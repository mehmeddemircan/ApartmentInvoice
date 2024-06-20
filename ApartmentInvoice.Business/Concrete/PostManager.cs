using ApartmentInvoice.Business.Abstract;
using ApartmentInvoice.Business.Constants;
using ApartmentInvoice.Core.Helpers;
using ApartmentInvoice.Core.Utilities.Results;
using ApartmentInvoice.DataAccess.Abstract;
using ApartmentInvoice.DataAccess.Concrete.EntityFramework;
using ApartmentInvoice.Entity.Concrete;
using ApartmentInvoice.Entity.DTOs.BillDtos;
using ApartmentInvoice.Entity.DTOs.PostDtos;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Linq.Expressions;
using System.Runtime.ConstrainedExecution;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Business.Concrete
{
    public class PostManager : IPostService
    {
        IMapper _mapper;
        IPostRepository _postRepository;
        IUserRepository _userRepository;

        public PostManager(IMapper mapper ,IPostRepository postRepository,IUserRepository userRepository)
        {
            _mapper = mapper;
            _postRepository = postRepository;   
            _userRepository = userRepository;
        }
        public async Task<IResult> AddAsync(PostAddDto entity)
        {
            var newPost = _mapper.Map<Post>(entity);

            await _postRepository.AddAsync(newPost);


            return new SuccessResult(Messages.Added);
        }

        public async Task<IDataResult<bool>> DeleteAsync(int id)
        {
            var isDelete = await _postRepository.DeleteAsync(id);
            return new SuccessDataResult<bool>(isDelete, Messages.Deleted);
        }

        public async Task<IDataResult<PostDetailDto>> GetAsync(Expression<Func<Post, bool>> filter)
        {
            var post = await _postRepository.GetAsync(filter);
            if (post != null)
            {
                var postDetailDto = await AssignPostDetails(post, post.UserId);
                return new SuccessDataResult<PostDetailDto>(postDetailDto, Messages.Listed);

            }
            return new ErrorDataResult<PostDetailDto>(null, Messages.NotListed);
        }

        public async Task<IDataResult<PostDetailDto>> GetByIdAsync(int id)
        {
            var post = await _postRepository.GetAsync(x => x.Id == id);
            if (post != null)
            {
                var postDetailDto = await AssignPostDetails(post, post.UserId);
                return new SuccessDataResult<PostDetailDto>(postDetailDto, Messages.Listed);

            }
            return new ErrorDataResult<PostDetailDto>(null, Messages.NotListed);
        }

        public async Task<IDataResult<IEnumerable<PostsDto>>> GetListAsync(Expression<Func<Post, bool>> filter = null)
        {

            List<PostsDto> posts = new List<PostsDto>();

            if (filter == null)
            {
                // Exception 
                //throw new UnauthorizedAccessException("UnAuthorized"); 
                var response = await _postRepository.GetListAsync();
                var responseDetailDto = _mapper.Map<IEnumerable<PostsDto>>(response);


                foreach (var post in response)
                {
                    var postDto  = await AssignPosts(post, post.UserId);
                    posts.Add(postDto);
                }
                return new SuccessDataResult<IEnumerable<PostsDto>>(posts, Messages.Listed);
            }
            else
            {
                var response = await _postRepository.GetListAsync(filter);
                var responseDetailDto = _mapper.Map<IEnumerable<PostsDto>>(response);

                foreach (var post in response)
                {
                    var postDto = await AssignPosts(post, post.UserId);
                    posts.Add(postDto);
                }
                return new SuccessDataResult<IEnumerable<PostsDto>>(posts, Messages.Listed);
            }
        }

        public async Task<IDataResult<PostUpdateDto>> UpdateAsync(PostUpdateDto postUpdateDto)
        {
            var getPost = await _postRepository.GetAsync(x => x.Id == postUpdateDto.Id);

            var post = _mapper.Map<Post>(postUpdateDto);


            post.UpdatedDate = DateTime.Now;
            post.UpdatedBy = 1;


            var postUpdate = await _postRepository.UpdateAsync(post);
            var resultUpdateDto = _mapper.Map<PostUpdateDto>(postUpdate);

            return new SuccessDataResult<PostUpdateDto>(resultUpdateDto, Messages.Updated);
        }

        private async Task<PostsDto> AssignPosts(Post post ,int userId)
        {
            var user = await _userRepository.GetAsync(x => x.Id == userId );
          
            if (user == null)
            {
                return null;
            }
            post.User = user; 
            
            var postsDto = _mapper.Map<PostsDto>(post);
            return postsDto;
        }

        private async Task<PostDetailDto> AssignPostDetails(Post post, int userId)
        {
            var user = await _userRepository.GetAsync(x => x.Id == userId);

            if (user == null)
            {
                return null;
            }
            post.User = user;

            var postDetailDto = _mapper.Map<PostDetailDto>(post);
            return postDetailDto;
        }

        public async Task<IDataResult<IEnumerable<PostsDto>>> GetListAsyncPagination(int pageNumber, int pageSize, Expression<Func<Post, bool>> filter = null)
        {

            List<PostsDto> posts = new List<PostsDto>();

            if (filter == null)
            {
          
                var response = await _postRepository.GetListAsyncPagination(pageNumber, pageSize);

                //var responsePostsDto= _mapper.Map<IEnumerable<PostsDto>>(response);

                foreach (var post in response)
                {
                    var postDto = await AssignPosts(post, post.UserId);
                    posts.Add(postDto);
                }
                return new SuccessDataResult<IEnumerable<PostsDto>>(posts, Messages.Listed);
            }
            else
            {

                var response = await _postRepository.GetListAsyncPagination(pageNumber, pageSize,filter);


                foreach (var post in response)
                {
                    var postDto = await AssignPosts(post, post.UserId);
                    posts.Add(postDto);
                }
                return new SuccessDataResult<IEnumerable<PostsDto>>(posts, Messages.Listed);
            }
        }
    }
}
