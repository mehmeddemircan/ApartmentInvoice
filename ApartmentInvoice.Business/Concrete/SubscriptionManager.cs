using ApartmentInvoice.Business.Abstract;
using ApartmentInvoice.Business.Constants;
using ApartmentInvoice.Core.Utilities.Results;
using ApartmentInvoice.DataAccess.Abstract;
using ApartmentInvoice.DataAccess.Concrete.EntityFramework;
using ApartmentInvoice.Entity.Concrete;
using ApartmentInvoice.Entity.DTOs.BlockDtos;
using ApartmentInvoice.Entity.DTOs.SubscriptionDtos;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Business.Concrete
{
    public class SubscriptionManager : ISubscriptionService
    {
        ISubscriptionRepository _subscriptionRepository;
        IMapper _mapper; 
        public SubscriptionManager(ISubscriptionRepository subscriptionRepository,IMapper mapper)
        {
            _subscriptionRepository = subscriptionRepository; 
            _mapper = mapper;
        }
        public async Task<IResult> AddAsync(SubscriptionAddDto entity)
        {
            var subscription = _mapper.Map<Subscription>(entity);
            await _subscriptionRepository.AddAsync(subscription);
            return new SuccessResult(Messages.Added); 
        }

        public async Task<IDataResult<bool>> DeleteAsync(int id)
        {
            var isDelete = await _subscriptionRepository.DeleteAsync(id);
            return new SuccessDataResult<bool>(isDelete,Messages.Deleted);
        }

        public async Task<IDataResult<SubscriptionDetailDto>> GetAsync(Expression<Func<Subscription, bool>> filter)
        {
            var subscription = await _subscriptionRepository.GetAsync(filter);
            if (subscription != null)
            {
                var subscriptionDetailDto = _mapper.Map<SubscriptionDetailDto>(subscription);
                return new SuccessDataResult<SubscriptionDetailDto>(subscriptionDetailDto, Messages.Listed);

            }
            return new ErrorDataResult<SubscriptionDetailDto>(null, Messages.NotListed);
        }

        public async Task<IDataResult<SubscriptionDetailDto>> GetByIdAsync(int id)
        {
            var subscription = await _subscriptionRepository.GetAsync(x => x.Id == id);
            if (subscription != null)
            {
                var subscriptionDetailDto = _mapper.Map<SubscriptionDetailDto>(subscription);
                return new SuccessDataResult<SubscriptionDetailDto>(subscriptionDetailDto, Messages.Listed);

            }
            return new ErrorDataResult<SubscriptionDetailDto>(null, Messages.NotListed);
        }

        public async Task<IDataResult<IEnumerable<SubscriptionsDto>>> GetListAsync(Expression<Func<Subscription, bool>> filter = null)
        {
            if (filter == null)
            {
                // Exception 
                //throw new UnauthorizedAccessException("UnAuthorized"); 
                var response = await _subscriptionRepository.GetListAsync();
                var responseDetailDto = _mapper.Map<IEnumerable<SubscriptionsDto>>(response);
                return new SuccessDataResult<IEnumerable<SubscriptionsDto>>(responseDetailDto, Messages.Listed);
            }
            else
            {
                var response = await _subscriptionRepository.GetListAsync(filter);
                var responseDetailDto = _mapper.Map<IEnumerable<SubscriptionsDto>>(response);
                return new SuccessDataResult<IEnumerable<SubscriptionsDto>>(responseDetailDto, Messages.Listed);
            }
        }

        public async Task<IDataResult<SubscriptionUpdateDto>> UpdateAsync(SubscriptionUpdateDto subscriptionUpdateDto)
        {
            var getSubscription = await _subscriptionRepository.GetAsync(x => x.Id == subscriptionUpdateDto.Id);

            var subscription = _mapper.Map<Subscription>(subscriptionUpdateDto);


            subscription.UpdatedDate = DateTime.Now;
            subscription.UpdatedBy = 1;


            var subscriptionUpdate = await _subscriptionRepository.UpdateAsync(subscription);
            var resultUpdateDto = _mapper.Map<SubscriptionUpdateDto>(subscriptionUpdate);

            return new SuccessDataResult<SubscriptionUpdateDto>(resultUpdateDto, Messages.Updated);
        }
    }
}
