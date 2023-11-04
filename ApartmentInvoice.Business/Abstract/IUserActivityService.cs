using ApartmentInvoice.Core.Utilities.Results;
using ApartmentInvoice.Entity.Concrete;
using ApartmentInvoice.Entity.DTOs.ActivityDtos;
using ApartmentInvoice.Entity.DTOs.UserActivityDtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Business.Abstract
{
    public interface IUserActivityService
    {

        Task<IResult> JoinActivityAsync(UserActivityAddDto entity);


        Task<IDataResult<IEnumerable<UserActivitiesDto>>> GetListOfParticipantsAsync(Expression<Func<UserActivity, bool>> filter = null);

        Task<IDataResult<bool>> LeaveActivityAsync(int userActivityId);
    }
}
