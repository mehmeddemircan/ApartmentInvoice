using ApartmentInvoice.Business.Abstract;
using ApartmentInvoice.Business.Constants;
using ApartmentInvoice.Core.Utilities.Results;
using ApartmentInvoice.DataAccess.Abstract;
using ApartmentInvoice.DataAccess.Concrete.EntityFramework;
using ApartmentInvoice.Entity.Concrete;
using ApartmentInvoice.Entity.DTOs.ActivityDtos;
using ApartmentInvoice.Entity.DTOs.BillDtos;
using ApartmentInvoice.Entity.DTOs.UserActivityDtos;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Business.Concrete
{
    public class UserActivityManager : IUserActivityService
    {

        IMapper _mapper;
        IUserActivityRepository _userActivityRepository;

        public UserActivityManager(IMapper mapper , IUserActivityRepository userActivityRepository)
        {
            _mapper = mapper;
            _userActivityRepository = userActivityRepository;   
        }
        public async Task<IDataResult<IEnumerable<UserActivitiesDto>>> GetListOfParticipantsAsync(Expression<Func<UserActivity, bool>> filter = null)
        {
            if (filter == null)
            {
                // Exception 
                //throw new UnauthorizedAccessException("UnAuthorized"); 
                var response = await _userActivityRepository.GetListAsync();
                var responseDetailDto = _mapper.Map<IEnumerable<UserActivitiesDto>>(response);
                return new SuccessDataResult<IEnumerable<UserActivitiesDto>>(responseDetailDto, Messages.Listed);
            }
            else
            {
                var response = await _userActivityRepository.GetListAsync(filter);
                var responseDetailDto = _mapper.Map<IEnumerable<UserActivitiesDto>>(response);
                return new SuccessDataResult<IEnumerable<UserActivitiesDto>>(responseDetailDto, Messages.Listed);
            }
        }

        public async Task<IResult> JoinActivityAsync(UserActivityAddDto entity)
        {
            var newUserActivity = _mapper.Map<UserActivity>(entity);

            await _userActivityRepository.AddAsync(newUserActivity);


            return new SuccessResult(Messages.Added);
        }

        public async Task<IDataResult<bool>> LeaveActivityAsync(int userActivityId)
        {
            var isDelete = await _userActivityRepository.DeleteAsync(userActivityId);
            return new SuccessDataResult<bool>(isDelete, Messages.Deleted);
        }
    }
}
