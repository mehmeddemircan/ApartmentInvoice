using ApartmentInvoice.Core.Utilities.Results;
using ApartmentInvoice.Entity.Concrete;
using ApartmentInvoice.Entity.DTOs.ActivityDtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Business.Abstract
{
    public interface IActivityService
    {

        Task<IResult> AddAsync(ActivityAddDto entity);


        Task<IDataResult<IEnumerable<ActivitiesDto>>> GetListAsync(Expression<Func<Activity, bool>> filter = null);
        Task<IDataResult<ActivityDetailDto>> GetAsync(Expression<Func<Activity, bool>> filter);

        Task<IDataResult<ActivityDetailDto>> GetByIdAsync(int id);

        Task<IDataResult<ActivityUpdateDto>> UpdateAsync(ActivityUpdateDto ActivityUpdateDto);

        Task<IDataResult<bool>> DeleteAsync(int id);
    }
}
