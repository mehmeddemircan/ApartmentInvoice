using ApartmentInvoice.Business.Abstract;
using ApartmentInvoice.Entity.DTOs.PostCommentDtos;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ApartmentInvoice.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostCommentsController : ControllerBase
    {
        IPostCommentService _postCommentService;
        public PostCommentsController(IPostCommentService postCommentService)
        {
            _postCommentService = postCommentService;
        }

        [HttpGet]
        [Route("[action]")]
        public async Task<IActionResult> GetAllPostComment()
        {
            var result = await _postCommentService.GetListAsync();
            if (result != null)
            {
                return Ok(result);
            }

            return BadRequest();

        }


        [HttpPost]
        [Route("[action]")]

        public async Task<IActionResult> AddNewPostComment(PostCommentAddDto postCommentAddDto)
        {
            var result = await _postCommentService.AddAsync(postCommentAddDto);
            if (result != null)
            {
                return Ok(result);
            }

            return BadRequest();

        }

        [HttpGet]
        [Route("[action]/{postCommentId:int}")]
        public async Task<IActionResult> GetPostCommentById(int postCommentId)
        {
            var result = await _postCommentService.GetByIdAsync(postCommentId);
            if (result != null)
            {
                return Ok(result);
            }
            return BadRequest();
        }




        [HttpDelete]
        [Route("[action]/{postCommentId:int}")]
        public async Task<IActionResult> DeletePostComment(int postCommentId)
        {
            var result = await _postCommentService.DeleteAsync(postCommentId);

            if (result.Success)
            {
                return Ok(result.Message);
            }

            return BadRequest();
        }


        [HttpPut]
        [Route("[action]")]

        public async Task<IActionResult> UpdatePostComment([FromForm] PostCommentUpdateDto postCommentUpdateDto)
        {
            var result = await _postCommentService.UpdateAsync(postCommentUpdateDto);

            if (result != null)
            {
                return Ok(result);
            }
            return BadRequest();
        }


        [HttpGet]
        [Route("[action]/{postId:int}")]

        public async Task<IActionResult> GetPostCommentsByPostId(int postId)
        {
            var result = await _postCommentService.GetListAsync(x => x.PostId == postId);

            if (result != null)
            {
                return Ok(result);
            }
            return BadRequest();
        }


    }
}
