using ApartmentInvoice.Business.Abstract;
using ApartmentInvoice.Business.Constants;
using ApartmentInvoice.Core.Utilities.Results;
using ApartmentInvoice.DataAccess.Abstract;
using ApartmentInvoice.DataAccess.Concrete.EntityFramework;
using ApartmentInvoice.Entity.Concrete;
using ApartmentInvoice.Entity.DTOs.BillDtos;
using ApartmentInvoice.Entity.DTOs.CommentDtos;
using ApartmentInvoice.Entity.DTOs.PostDtos;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Business.Concrete
{
    public class ActivityCommentManager : IActivityCommentService
    {
        IActivityCommentRepository _activityCommentRepository;
        IUserRepository _userRepository; 
        IMapper _mapper; 
        public ActivityCommentManager(IActivityCommentRepository activityCommentRepository,IMapper mapper, IUserRepository userRepository)
        {

            _activityCommentRepository = activityCommentRepository;
            _userRepository = userRepository;
            _mapper = mapper; 

        }
        public async Task<IResult> AddAsync(ActivityCommentAddDto entity)
        {
            var newComment = _mapper.Map<ActivityComment>(entity);

            await _activityCommentRepository.AddAsync(newComment);


            return new SuccessResult(Messages.Added);
        }

        public async Task<IDataResult<bool>> DeleteAsync(int id)
        {
            var isDelete = await _activityCommentRepository.DeleteAsync(id);
            return new SuccessDataResult<bool>(isDelete, Messages.Deleted);
        }

        public async Task<IDataResult<ActivityCommentsDto>> GetAsync(Expression<Func<ActivityComment, bool>> filter)
        {
            var comment = await _activityCommentRepository.GetAsync(filter);
            if (comment != null)
            {
                var commentDetailDto = _mapper.Map<ActivityCommentsDto>(comment);
                return new SuccessDataResult<ActivityCommentsDto>(commentDetailDto, Messages.Listed);

            }
            return new ErrorDataResult<ActivityCommentsDto>(null, Messages.NotListed);
        }

        public async Task<IDataResult<ActivityCommentsDto>> GetByIdAsync(int id)
        {
            var comment = await _activityCommentRepository.GetAsync(x => x.Id == id);
            if (comment != null)
            {
                var commentDetailDto = _mapper.Map<ActivityCommentsDto>(comment);
                return new SuccessDataResult<ActivityCommentsDto>(commentDetailDto, Messages.Listed);

            }
            return new ErrorDataResult<ActivityCommentsDto>(null, Messages.NotListed);
        }

        public async Task<IDataResult<IEnumerable<ActivityCommentsDto>>> GetListAsync(Expression<Func<ActivityComment, bool>> filter = null)
        {
            List<ActivityCommentsDto> comments = new List<ActivityCommentsDto>();
            if (filter == null)
            {
                // Exception 
                //throw new UnauthorizedAccessException("UnAuthorized"); 
                var response = await _activityCommentRepository.GetListAsync();
               
                foreach (var comment in response)
                {
                    var commentDto = await AssignComments(comment, comment.UserId);
                    comments.Add(commentDto);
                }
                return new SuccessDataResult<IEnumerable<ActivityCommentsDto>>(comments, Messages.Listed);
            }
            else
            {
                var response = await _activityCommentRepository.GetListAsync(filter);
                foreach (var comment in response)
                {
                    var commentDto = await AssignComments(comment, comment.UserId);
                    comments.Add(commentDto);
                }
                return new SuccessDataResult<IEnumerable<ActivityCommentsDto>>(comments, Messages.Listed);
            }
        }

        public async Task<IDataResult<ActivityCommentUpdateDto>> UpdateAsync(ActivityCommentUpdateDto commentUpdateDto)
        {
            var getComment = await _activityCommentRepository.GetAsync(x => x.Id == commentUpdateDto.Id);

            var comment = _mapper.Map<ActivityComment>(commentUpdateDto);


            comment.UpdatedDate = DateTime.Now;
            comment.UpdatedBy = 1;


            var commentUpdate = await _activityCommentRepository.UpdateAsync(comment);
            var resultUpdateDto = _mapper.Map<ActivityCommentUpdateDto>(commentUpdate);

            return new SuccessDataResult<ActivityCommentUpdateDto>(resultUpdateDto, Messages.Updated);
        }

        private async Task<ActivityCommentsDto> AssignComments(ActivityComment comment, int userId)
        {
            var user = await _userRepository.GetAsync(x => x.Id == userId);

            if (user == null)
            {
                return null;
            }
            comment.User = user;

            var commentsDto = _mapper.Map<ActivityCommentsDto>(comment);
            return commentsDto;
        }

      
    }
}
