using ApartmentInvoice.Business.Abstract;
using ApartmentInvoice.Entity.DTOs.CommentDtos;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ApartmentInvoice.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ActivityCommentsController : ControllerBase
    {

        IActivityCommentService _activityCommentService; 
        public ActivityCommentsController(IActivityCommentService activityCommentService)
        {
            _activityCommentService = activityCommentService;
        }

        [HttpGet]
        [Route("[action]")]
        public async Task<IActionResult> GetAllActivityComment()
        {
            var result = await _activityCommentService.GetListAsync();
            if (result != null)
            {
                return Ok(result);
            }

            return BadRequest();

        }


        [HttpPost]
        [Route("[action]")]

        public async Task<IActionResult> AddNewActivityComment(ActivityCommentAddDto commentAddDto)
        {
            var result = await _activityCommentService.AddAsync(commentAddDto);
            if (result != null)
            {
                return Ok(result);
            }

            return BadRequest();

        }

        [HttpGet]
        [Route("[action]/{commentId:int}")]
        public async Task<IActionResult> GetActivityCommentById(int commentId)
        {
            var result = await _activityCommentService.GetByIdAsync(commentId);
            if (result != null)
            {
                return Ok(result);
            }
            return BadRequest();
        }




        [HttpDelete]
        [Route("[action]/{commentId:int}")]
        public async Task<IActionResult> DeleteActivityComment(int commentId)
        {
            var result = await _activityCommentService.DeleteAsync(commentId);

            if (result.Success)
            {
                return Ok(result.Message);
            }

            return BadRequest();
        }


        [HttpPut]
        [Route("[action]")]

        public async Task<IActionResult> UpdateActivityComment([FromBody] ActivityCommentUpdateDto activityCommentUpdateDto)
        {
            var result = await _activityCommentService.UpdateAsync(activityCommentUpdateDto);

            if (result != null)
            {
                return Ok(result);
            }
            return BadRequest();
        }


        [HttpGet]
        [Route("[action]/{activityId:int}")]

        public async Task<IActionResult> GetActivityCommentsByActivityId(int activityId)
        {
            var result = await _activityCommentService.GetListAsync(x => x.ActivityId == activityId);

            if (result != null)
            {
                return Ok(result);
            }
            return BadRequest();
        }

        [HttpGet]
        [Route("[action]/{userId:int}")]

        public async Task<IActionResult> GetActivityCommentsByUserId(int userId)
        {
            var result = await _activityCommentService.GetListAsync(x => x.UserId == userId);

            if (result != null)
            {
                return Ok(result);
            }
            return BadRequest();
        }
    }
}
