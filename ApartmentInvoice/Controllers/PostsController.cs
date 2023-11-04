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


        [HttpPut]
        [Route("[action]")]

        public async Task<IActionResult> UpdatePost([FromForm] PostUpdateDto postUpdateDto)
        {
            var result = await _postService.UpdateAsync(postUpdateDto);

            if (result != null)
            {
                return Ok(result);
            }
            return BadRequest();
        }
    }
}
