using ApartmentInvoice.Business.Abstract;
using ApartmentInvoice.Business.Constants;
using ApartmentInvoice.Core.Utilities.Results;
using ApartmentInvoice.DataAccess.Abstract;
using ApartmentInvoice.DataAccess.Concrete.EntityFramework;
using ApartmentInvoice.Entity.Concrete;
using ApartmentInvoice.Entity.DTOs.ActivityDtos;
using ApartmentInvoice.Entity.DTOs.BillDtos;
using ApartmentInvoice.Entity.DTOs.PostCommentDtos;
using ApartmentInvoice.Entity.DTOs.UserActivityDtos;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Diagnostics;
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
        IUserRepository _userRepository; 
        public UserActivityManager(IMapper mapper , IUserActivityRepository userActivityRepository,IUserRepository userRepository)
        {
            _mapper = mapper;
            _userActivityRepository = userActivityRepository;   
            _userRepository = userRepository;
        }
        public async Task<IDataResult<IEnumerable<UserActivitiesDto>>> GetListOfParticipantsAsync(Expression<Func<UserActivity, bool>> filter = null)
        {
        

            List<UserActivitiesDto> userActivities = new List<UserActivitiesDto>();
            if (filter == null)
            {
                // Exception 
                //throw new UnauthorizedAccessException("UnAuthorized"); 
                var response = await _userActivityRepository.GetListAsync();

                foreach (var userActivity in response)
                {
                    var userActivityDto = await AssignPostComments(userActivity, userActivity.UserId);
                    userActivities.Add(userActivityDto);
                }
                return new SuccessDataResult<IEnumerable<UserActivitiesDto>>(userActivities, Messages.Listed);
            }
            else
            {
                var response = await _userActivityRepository.GetListAsync(filter);

                foreach (var userActivity in response)
                {
                    var userActivityDto = await AssignPostComments(userActivity, userActivity.UserId);
                    userActivities.Add(userActivityDto);
                }
                return new SuccessDataResult<IEnumerable<UserActivitiesDto>>(userActivities, Messages.Listed);
            }
        }

        public async Task<IDataResult<UserActivitiesDto>> IsJoined(int activityId,int userId)
        {

           
            var userActivity = await _userActivityRepository.GetAsync(x=> x.ActivityId == activityId && x.UserId == userId);
            if (userActivity != null)
            {




                var userActivityDto = _mapper.Map<UserActivitiesDto>(userActivity);
                return new SuccessDataResult<UserActivitiesDto>(userActivityDto, Messages.Listed);
            }
            return new ErrorDataResult<UserActivitiesDto>(null, Messages.NotListed);

       
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

        private async Task<UserActivitiesDto> AssignPostComments(UserActivity userActivity, int userId)
        {
            var user = await _userRepository.GetAsync(x => x.Id == userId);

            if (user == null)
            {
                return null;
            }
            userActivity.User = user;

            var commentsDto = _mapper.Map<UserActivitiesDto>(userActivity);
            return commentsDto;
        }
    }
}
