using ApartmentInvoice.Business.Abstract;
using ApartmentInvoice.Entity.DTOs.PostDtos;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ApartmentInvoice.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostsController : ControllerBase
    {
        IPostService _postService; 
        public PostsController(IPostService postService)
        {
            _postService = postService;
        }
        /// <summary>
        /// Bütün postları listeleyen api 
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("[action]")]
        public async Task<IActionResult> GetAllPost()
        {
            var result = await _postService.GetListAsync();
            if (result != null)
            {
                return Ok(result);
            }

            return BadRequest();

        }

        /// <summary>
        /// Yeni post ekleyen api 
        /// </summary>
        /// <param name="postAddDto"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("[action]")]

        public async Task<IActionResult> AddNewPost(PostAddDto postAddDto)
        {
            var result = await _postService.AddAsync(postAddDto);
            if (result != null)
            {
                return Ok(result);
            }

            return BadRequest();

        }

        [HttpGet]
        [Route("[action]/{postId:int}")]
        public async Task<IActionResult> GetPostById(int postId)
        {
            var result = await _postService.GetByIdAsync(postId);
            if (result != null)
            {
                return Ok(result);
            }
            return BadRequest();
        }



        /// <summary>
        /// Post silen api 
        /// </summary>
        /// <param name="postId"></param>
        /// <returns></returns>
        [HttpDelete]
        [Route("[action]/{postId:int}")]
        public async Task<IActionResult> DeletePost(int postId)
        {
            var result = await _postService.DeleteAsync(postId);

            if (result.Success)
            {
                return Ok(result.Message);
            }

            return BadRequest();
        }

        /// <summary>
        /// Post güncelleyen api 
        /// </summary>
        /// <param name="postUpdateDto"></param>
        /// <returns></returns>
        [HttpPut]
        [Route("[action]")]

        public async Task<IActionResult> UpdatePost([FromBody] PostUpdateDto postUpdateDto)
        {
            var result = await _postService.UpdateAsync(postUpdateDto);

            if (result != null)
            {
                return Ok(result);
            }
            return BadRequest();
        }


        [HttpGet]
        [Route("[action]")]

        public async Task<IActionResult> GetPostswithPage(int pageNumber, int pageSize)
        {
            var result = await _postService.GetListAsyncPagination(pageNumber, pageSize);
            if (result != null)
            {
                return Ok(result);
            }

            return BadRequest();

        }
    }
}
