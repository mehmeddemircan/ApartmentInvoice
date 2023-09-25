using ApartmentInvoice.Core.Utilities.Results;
using ApartmentInvoice.Entity.Concrete;
using ApartmentInvoice.Entity.DTOs.BlockDtos;
using ApartmentInvoice.Entity.DTOs.SubscriptionDtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Business.Abstract
{
    public interface ISubscriptionService
    {

        Task<IResult> AddAsync(SubscriptionAddDto entity);


        Task<IDataResult<IEnumerable<SubscriptionsDto>>> GetListAsync(Expression<Func<Subscription, bool>> filter = null);
        Task<IDataResult<SubscriptionDetailDto>> GetAsync(Expression<Func<Subscription, bool>> filter);

        Task<IDataResult<SubscriptionDetailDto>> GetByIdAsync(int id);

        Task<IDataResult<SubscriptionUpdateDto>> UpdateAsync(SubscriptionUpdateDto subscriptionUpdateDto);

        Task<IDataResult<bool>> DeleteAsync(int id);
    }
}
