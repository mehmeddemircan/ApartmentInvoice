using ApartmentInvoice.Business.Abstract;
using ApartmentInvoice.Business.Constants;
using ApartmentInvoice.Core.Utilities.Results;
using ApartmentInvoice.DataAccess.Abstract;
using ApartmentInvoice.DataAccess.Concrete.EntityFramework;
using ApartmentInvoice.Entity.Concrete;
using ApartmentInvoice.Entity.DTOs.BillDtos;
using ApartmentInvoice.Entity.DTOs.BlockDtos;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Business.Concrete
{
    public class BillManager : IBillService
    {
        IBillRepository _billRepository;
        IMapper _mapper; 
        public BillManager(IBillRepository billRepository,IMapper mapper)
        {
            _billRepository = billRepository;
            _mapper = mapper;
        }
        public async Task<IResult> AddAsync(BillAddDto entity)
        {
            var newBill = _mapper.Map<Bill>(entity);

            await _billRepository.AddAsync(newBill);


            return new SuccessResult(Messages.Added);
        }

        public async Task<IDataResult<bool>> DeleteAsync(int id)
        {
            var isDelete = await _billRepository.DeleteAsync(id);
            return new SuccessDataResult<bool>(isDelete, Messages.Deleted);
        }

        public async Task<IDataResult<BillDetailDto>> GetAsync(Expression<Func<Bill, bool>> filter)
        {
            var bill = await _billRepository.GetAsync(filter);
            if (bill != null)
            {
                var billDetailDto = _mapper.Map<BillDetailDto>(bill);
                return new SuccessDataResult<BillDetailDto>(billDetailDto, Messages.Listed);

            }
            return new ErrorDataResult<BillDetailDto>(null, Messages.NotListed);
        }

        public async Task<IDataResult<BillDetailDto>> GetByIdAsync(int id)
        {
            var bill = await _billRepository.GetAsync(x => x.Id == id);
            if (bill != null)
            {
                var billDetailDto = _mapper.Map<BillDetailDto>(bill);
                return new SuccessDataResult<BillDetailDto>(billDetailDto, Messages.Listed);

            }
            return new ErrorDataResult<BillDetailDto>(null, Messages.NotListed);
        }

        public async Task<IDataResult<IEnumerable<BillsDto>>> GetListAsync(Expression<Func<Bill, bool>> filter = null)
        {
            if (filter == null)
            {
                // Exception 
                //throw new UnauthorizedAccessException("UnAuthorized"); 
                var response = await _billRepository.GetListAsync();
                var responseDetailDto = _mapper.Map<IEnumerable<BillsDto>>(response);
                return new SuccessDataResult<IEnumerable<BillsDto>>(responseDetailDto, Messages.Listed);
            }
            else
            {
                var response = await _billRepository.GetListAsync(filter);
                var responseDetailDto = _mapper.Map<IEnumerable<BillsDto>>(response);
                return new SuccessDataResult<IEnumerable<BillsDto>>(responseDetailDto, Messages.Listed);
            }
        }

        public async Task<IDataResult<BillUpdateDto>> UpdateAsync(BillUpdateDto billUpdateDto)
        {
            var getBill = await _billRepository.GetAsync(x => x.Id == billUpdateDto.Id);

            var bill = _mapper.Map<Bill>(billUpdateDto);


            bill.UpdatedDate = DateTime.Now;
            bill.UpdatedBy = 1;


            var billUpdate = await _billRepository.UpdateAsync(bill);
            var resultUpdateDto = _mapper.Map<BillUpdateDto>(billUpdate);

            return new SuccessDataResult<BillUpdateDto>(resultUpdateDto, Messages.Updated);
        }
    }
}
