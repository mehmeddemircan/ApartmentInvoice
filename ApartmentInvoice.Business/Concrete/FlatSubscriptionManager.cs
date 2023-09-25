using ApartmentInvoice.Business.Abstract;
using ApartmentInvoice.Business.Constants;
using ApartmentInvoice.Core.Utilities.Results;
using ApartmentInvoice.DataAccess.Abstract;
using ApartmentInvoice.DataAccess.Concrete.EntityFramework;
using ApartmentInvoice.Entity.Concrete;
using ApartmentInvoice.Entity.DTOs.BlockDtos;
using ApartmentInvoice.Entity.DTOs.FlatSubscriptionDtos;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Business.Concrete
{
    public class FlatSubscriptionManager : IFlatSubscriptionService
    {
        //Todo : FlatSubscription kısmında flat ile subscription entegre edilecek 
        IFlatSubscriptionRepository _flatSubscriptionRepository;
        IMapper _mapper; 
        public FlatSubscriptionManager(IFlatSubscriptionRepository flatSubscriptionRepository,IMapper mapper)
        {
            _flatSubscriptionRepository = flatSubscriptionRepository;
            _mapper = mapper;
        }
        public async Task<IResult> AddAsync(FlatSubscriptionAddDto entity)
        {
            var newFlatSubscription = _mapper.Map<FlatSubscription>(entity);

            await _flatSubscriptionRepository.AddAsync(newFlatSubscription);


            return new SuccessResult(Messages.Added);
        }

        public async Task<IDataResult<bool>> DeleteAsync(int id)
        {
           var isDelete = await _flatSubscriptionRepository.DeleteAsync(id);
            return new SuccessDataResult<bool>(isDelete,Messages.Deleted);
        }

        public async Task<IDataResult<FlatSubscriptionDetailDto>> GetAsync(Expression<Func<FlatSubscription, bool>> filter)
        {
            var flat = await _flatSubscriptionRepository.GetAsync(filter);
            if (flat != null)
            {
                var flatDetailDto = _mapper.Map<FlatSubscriptionDetailDto>(flat);
                return new SuccessDataResult<FlatSubscriptionDetailDto>(flatDetailDto, Messages.Listed);

            }
            return new ErrorDataResult<FlatSubscriptionDetailDto>(null, Messages.NotListed);
        }

        public async Task<IDataResult<FlatSubscriptionDetailDto>> GetByIdAsync(int id)
        {
            var flat = await _flatSubscriptionRepository.GetAsync(x => x.Id == id);
            if (flat != null)
            {
                var flatDetailDto = _mapper.Map<FlatSubscriptionDetailDto>(flat);
                return new SuccessDataResult<FlatSubscriptionDetailDto>(flatDetailDto, Messages.Listed);

            }
            return new ErrorDataResult<FlatSubscriptionDetailDto>(null, Messages.NotListed);
        }

        public async Task<IDataResult<IEnumerable<FlatSubscriptionsDto>>> GetListAsync(Expression<Func<FlatSubscription, bool>> filter = null)
        {
            if (filter == null)
            {
                // Exception 
                //throw new UnauthorizedAccessException("UnAuthorized"); 
                var response = await _flatSubscriptionRepository.GetListAsync();
                var responseDetailDto = _mapper.Map<IEnumerable<FlatSubscriptionsDto>>(response);
                return new SuccessDataResult<IEnumerable<FlatSubscriptionsDto>>(responseDetailDto, Messages.Listed);
            }
            else
            {
                var response = await _flatSubscriptionRepository.GetListAsync(filter);
                var responseDetailDto = _mapper.Map<IEnumerable<FlatSubscriptionsDto>>(response);
                return new SuccessDataResult<IEnumerable<FlatSubscriptionsDto>>(responseDetailDto, Messages.Listed);
            }
        }

        public async Task<IDataResult<FlatSubscriptionUpdateDto>> UpdateAsync(FlatSubscriptionUpdateDto flatSubscriptionUpdateDto)
        {
            var getFlatSubscription = await _flatSubscriptionRepository.GetAsync(x => x.Id == flatSubscriptionUpdateDto.Id);

            var flatSubscription = _mapper.Map<FlatSubscription>(flatSubscriptionUpdateDto);


            flatSubscription.UpdatedDate = DateTime.Now;
            flatSubscription.UpdatedBy = 1;


            var flatSubscriptionUpdate = await _flatSubscriptionRepository.UpdateAsync(flatSubscription);
            var resultUpdateDto = _mapper.Map<FlatSubscriptionUpdateDto>(flatSubscriptionUpdate);

            return new SuccessDataResult<FlatSubscriptionUpdateDto>(resultUpdateDto, Messages.Updated);
        }
    }
}
