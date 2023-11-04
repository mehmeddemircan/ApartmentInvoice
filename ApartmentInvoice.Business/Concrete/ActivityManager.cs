using ApartmentInvoice.Business.Abstract;
using ApartmentInvoice.Business.Constants;
using ApartmentInvoice.Core.Utilities.Results;
using ApartmentInvoice.DataAccess.Abstract;
using ApartmentInvoice.DataAccess.Concrete.EntityFramework;
using ApartmentInvoice.Entity.Concrete;
using ApartmentInvoice.Entity.DTOs.ActivityDtos;
using ApartmentInvoice.Entity.DTOs.BillDtos;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Business.Concrete
{
    public class ActivityManager : IActivityService
    {
        IMapper _mapper;
        IActivityRepository _activityRepository; 
        public ActivityManager(IMapper mapper,IActivityRepository activityRepository)
        {
            _mapper = mapper;
            _activityRepository = activityRepository; 
        }
        public async Task<IResult> AddAsync(ActivityAddDto entity)
        {
            var newActivity = _mapper.Map<Activity>(entity);

            await _activityRepository.AddAsync(newActivity);


            return new SuccessResult(Messages.Added);
        }

        public async Task<IDataResult<bool>> DeleteAsync(int id)
        {
            var isDelete = await _activityRepository.DeleteAsync(id);
            return new SuccessDataResult<bool>(isDelete, Messages.Deleted);
        }

        public async Task<IDataResult<ActivityDetailDto>> GetAsync(Expression<Func<Activity, bool>> filter)
        {
            var activity = await _activityRepository.GetAsync(filter);
            if (activity != null)
            {
                var activityDetailDto = _mapper.Map<ActivityDetailDto>(activity);
                return new SuccessDataResult<ActivityDetailDto>(activityDetailDto, Messages.Listed);

            }
            return new ErrorDataResult<ActivityDetailDto>(null, Messages.NotListed);
        }

        public async Task<IDataResult<ActivityDetailDto>> GetByIdAsync(int id)
        {
            var activity = await _activityRepository.GetAsync(x => x.Id == id);
            if (activity != null)
            {
                var activityDetailDto = _mapper.Map<ActivityDetailDto>(activity);
                return new SuccessDataResult<ActivityDetailDto>(activityDetailDto, Messages.Listed);

            }
            return new ErrorDataResult<ActivityDetailDto>(null, Messages.NotListed);
        }

        public async Task<IDataResult<IEnumerable<ActivitiesDto>>> GetListAsync(Expression<Func<Activity, bool>> filter = null)
        {
            if (filter == null)
            {
                // Exception 
                //throw new UnauthorizedAccessException("UnAuthorized"); 
                var response = await _activityRepository.GetListAsync();
                var responseDetailDto = _mapper.Map<IEnumerable<ActivitiesDto>>(response);
                return new SuccessDataResult<IEnumerable<ActivitiesDto>>(responseDetailDto, Messages.Listed);
            }
            else
            {
                var response = await _activityRepository.GetListAsync(filter);
                var responseDetailDto = _mapper.Map<IEnumerable<ActivitiesDto>>(response);
                return new SuccessDataResult<IEnumerable<ActivitiesDto>>(responseDetailDto, Messages.Listed);
            }
        }

        public async Task<IDataResult<ActivityUpdateDto>> UpdateAsync(ActivityUpdateDto activityUpdateDto)
        {
            var getActivity = await _activityRepository.GetAsync(x => x.Id == activityUpdateDto.Id);

            var activity = _mapper.Map<Activity>(activityUpdateDto);


            activity.UpdatedDate = DateTime.Now;
            activity.UpdatedBy = 1;


            var activityUpdate = await _activityRepository.UpdateAsync(activity);
            var resultUpdateDto = _mapper.Map<ActivityUpdateDto>(activityUpdate);

            return new SuccessDataResult<ActivityUpdateDto>(resultUpdateDto, Messages.Updated);
        }
    }
}
