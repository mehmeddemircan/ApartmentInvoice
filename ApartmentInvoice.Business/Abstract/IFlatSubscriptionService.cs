using ApartmentInvoice.Core.Utilities.Results;
using ApartmentInvoice.Entity.Concrete;
using ApartmentInvoice.Entity.DTOs.FlatSubscriptionDtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Business.Abstract
{
    public interface IFlatSubscriptionService
    {
        Task<IResult> AddAsync(FlatSubscriptionAddDto entity);


        Task<IDataResult<IEnumerable<FlatSubscriptionsDto>>> GetListAsync(Expression<Func<FlatSubscription, bool>> filter = null);
        Task<IDataResult<FlatSubscriptionDetailDto>> GetAsync(Expression<Func<FlatSubscription, bool>> filter);

        Task<IDataResult<FlatSubscriptionDetailDto>> GetByIdAsync(int id);

        Task<IDataResult<FlatSubscriptionUpdateDto>> UpdateAsync(FlatSubscriptionUpdateDto flatSubscriptionUpdateDto);

        Task<IDataResult<bool>> DeleteAsync(int id);
    }
}
