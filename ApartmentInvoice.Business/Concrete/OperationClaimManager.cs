using ApartmentInvoice.Business.Abstract;
using ApartmentInvoice.Business.Constants;
using ApartmentInvoice.Core.Entities.Concrete.Auth;
using ApartmentInvoice.Core.Utilities.Results;
using ApartmentInvoice.DataAccess.Abstract;
using ApartmentInvoice.DataAccess.Concrete.EntityFramework;
using ApartmentInvoice.Entity.Concrete;
using ApartmentInvoice.Entity.DTOs.BillDtos;
using ApartmentInvoice.Entity.DTOs.OperationClaimDtos;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Business.Concrete
{
    public class OperationClaimManager : IOperationClaimService
    {
        IOperationClaimRepository _operationClaimRepository; 
        IMapper _mapper; 
        public OperationClaimManager(IMapper mapper,IOperationClaimRepository operationClaimRepository)
        {
            _mapper = mapper;
            _operationClaimRepository = operationClaimRepository;
        }
        public async Task<IResult> AddAsync(OperationClaimAddDto entity)
        {
            var newOperationClaim = _mapper.Map<OperationClaim>(entity);

            await _operationClaimRepository.AddAsync(newOperationClaim);


            return new SuccessResult(Messages.Added);
        }

        public async Task<IDataResult<bool>> DeleteAsync(int id)
        {
           var isDelete = await _operationClaimRepository.DeleteAsync(id);
            return new SuccessDataResult<bool>(isDelete,Messages.Deleted);
        }

        public async Task<IDataResult<OperationClaimDetailDto>> GetAsync(Expression<Func<OperationClaim, bool>> filter)
        {
            var operation = await _operationClaimRepository.GetAsync(filter);
            if (operation != null)
            {
                var operationDetailDto = _mapper.Map<OperationClaimDetailDto>(operation);
                return new SuccessDataResult<OperationClaimDetailDto>(operationDetailDto, Messages.Listed);

            }
            return new ErrorDataResult<OperationClaimDetailDto>(null, Messages.NotListed);
        }

        public async Task<IDataResult<OperationClaimDetailDto>> GetByIdAsync(int id)
        {
            var operation = await _operationClaimRepository.GetAsync(x => x.Id == id);
            if (operation != null)
            {
                var operationDetailDto = _mapper.Map<OperationClaimDetailDto>(operation);
                return new SuccessDataResult<OperationClaimDetailDto>(operationDetailDto, Messages.Listed);

            }
            return new ErrorDataResult<OperationClaimDetailDto>(null, Messages.NotListed);
        }

        public async Task<IDataResult<IEnumerable<OperationClaimsDto>>> GetListAsync(Expression<Func<OperationClaim, bool>> filter = null)
        {
            if (filter == null)
            {
                // Exception 
                //throw new UnauthorizedAccessException("UnAuthorized"); 
                var response = await _operationClaimRepository.GetListAsync();
                var responseDetailDto = _mapper.Map<IEnumerable<OperationClaimsDto>>(response);
                return new SuccessDataResult<IEnumerable<OperationClaimsDto>>(responseDetailDto, Messages.Listed);
            }
            else
            {
                var response = await _operationClaimRepository.GetListAsync(filter);
                var responseDetailDto = _mapper.Map<IEnumerable<OperationClaimsDto>>(response);
                return new SuccessDataResult<IEnumerable<OperationClaimsDto>>(responseDetailDto, Messages.Listed);
            }
        }

        public async Task<IDataResult<OperationClaimUpdateDto>> UpdateAsync(OperationClaimUpdateDto operationClaimUpdateDto)
        {
            var getOperationClaim = await _operationClaimRepository.GetAsync(x => x.Id == operationClaimUpdateDto.Id);

            var operationClaim = _mapper.Map<OperationClaim>(operationClaimUpdateDto);


            operationClaim.UpdatedDate = DateTime.Now;
            operationClaim.UpdatedBy = 1;


            var operationClaimUpdate = await _operationClaimRepository.UpdateAsync(operationClaim);
            var resultUpdateDto = _mapper.Map<OperationClaimUpdateDto>(operationClaimUpdate);

            return new SuccessDataResult<OperationClaimUpdateDto>(resultUpdateDto, Messages.Updated);
        }
    }
}
