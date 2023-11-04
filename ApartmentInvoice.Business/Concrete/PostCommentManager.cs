using ApartmentInvoice.Business.Abstract;
using ApartmentInvoice.Business.Constants;
using ApartmentInvoice.Core.Utilities.Results;
using ApartmentInvoice.DataAccess.Abstract;
using ApartmentInvoice.DataAccess.Concrete.EntityFramework;
using ApartmentInvoice.Entity.Concrete;
using ApartmentInvoice.Entity.DTOs.CommentDtos;
using ApartmentInvoice.Entity.DTOs.PostCommentDtos;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Business.Concrete
{
    public class PostCommentManager : IPostCommentService
    {
        IPostCommentRepository _postCommentRepository;
        IMapper _mapper; 
        IUserRepository _userRepository;
        public PostCommentManager(IPostCommentRepository postCommentRepository,IMapper mapper ,IUserRepository userRepository)
        {
            _postCommentRepository = postCommentRepository;
            _mapper = mapper;
            _userRepository = userRepository;
        }
        public async Task<IResult> AddAsync(PostCommentAddDto entity)
        {
            var newPostComment = _mapper.Map<PostComment>(entity);

            await _postCommentRepository.AddAsync(newPostComment);


            return new SuccessResult(Messages.Added);
        }

        public async Task<IDataResult<bool>> DeleteAsync(int id)
        {
            var isDelete = await _postCommentRepository.DeleteAsync(id);
            return new SuccessDataResult<bool>(isDelete, Messages.Deleted);
        }

        public async Task<IDataResult<PostCommentsDto>> GetAsync(Expression<Func<PostComment, bool>> filter)
        {
            var comment = await _postCommentRepository.GetAsync(filter);
            if (comment != null)
            {
                var commentDetailDto = _mapper.Map<PostCommentsDto>(comment);
                return new SuccessDataResult<PostCommentsDto>(commentDetailDto, Messages.Listed);

            }
            return new ErrorDataResult<PostCommentsDto>(null, Messages.NotListed);
        }

        public async Task<IDataResult<PostCommentsDto>> GetByIdAsync(int id)
        {
            var comment = await _postCommentRepository.GetAsync(x => x.Id == id);
            if (comment != null)
            {
                var commentDetailDto = _mapper.Map<PostCommentsDto>(comment);
                return new SuccessDataResult<PostCommentsDto>(commentDetailDto, Messages.Listed);

            }
            return new ErrorDataResult<PostCommentsDto>(null, Messages.NotListed);
        }

        public async Task<IDataResult<IEnumerable<PostCommentsDto>>> GetListAsync(Expression<Func<PostComment, bool>> filter = null)
        {
            List<PostCommentsDto> postComments = new List<PostCommentsDto>();
            if (filter == null)
            {
                // Exception 
                //throw new UnauthorizedAccessException("UnAuthorized"); 
                var response = await _postCommentRepository.GetListAsync();

                foreach (var comment in response)
                {
                    var commentDto = await AssignPostComments(comment, comment.UserId);
                    postComments.Add(commentDto);
                }
                return new SuccessDataResult<IEnumerable<PostCommentsDto>>(postComments, Messages.Listed);
            }
            else
            {
                var response = await _postCommentRepository.GetListAsync(filter);
                foreach (var comment in response)
                {
                    var commentDto = await AssignPostComments(comment, comment.UserId);
                    postComments.Add(commentDto);
                }
                return new SuccessDataResult<IEnumerable<PostCommentsDto>>(postComments, Messages.Listed);
            }
        }

        public async Task<IDataResult<PostCommentUpdateDto>> UpdateAsync(PostCommentUpdateDto commentUpdateDto)
        {
            var getComment = await _postCommentRepository.GetAsync(x => x.Id == commentUpdateDto.Id);
            var comment = _mapper.Map<PostComment>(commentUpdateDto);


            comment.UpdatedDate = DateTime.Now;
            comment.UpdatedBy = 1;


            var commentUpdate = await _postCommentRepository.UpdateAsync(comment);
            var resultUpdateDto = _mapper.Map<PostCommentUpdateDto>(commentUpdate);

            return new SuccessDataResult<PostCommentUpdateDto>(resultUpdateDto, Messages.Updated);
        }

        private async Task<PostCommentsDto> AssignPostComments(PostComment postComment, int userId)
        {
            var user = await _userRepository.GetAsync(x => x.Id == userId);

            if (user == null)
            {
                return null;
            }
            postComment.User = user;

            var commentsDto = _mapper.Map<PostCommentsDto>(postComment);
            return commentsDto;
        }


    }
}
