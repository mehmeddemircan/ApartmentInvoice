using ApartmentInvoice.Business.Abstract;
using ApartmentInvoice.Entity.DTOs.ActivityDtos;
using ApartmentInvoice.Entity.DTOs.UserActivityDtos;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ApartmentInvoice.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserActivitiesController : ControllerBase
    {
        IUserActivityService _userActivityService; 
        public UserActivitiesController(IUserActivityService userActivityService)
        {
            _userActivityService = userActivityService;
        }

        [HttpGet]
        [Route("[action]/{activityId:int}")]
        public async Task<IActionResult> GetAllActivityParticipants(int activityId)
        {
            var result = await _userActivityService.GetListOfParticipantsAsync(x => x.ActivityId == activityId);
            if (result != null)
            {
                return Ok(result);
            }

            return BadRequest();

        }

        [HttpPost]
        [Route("[action]")]

        public async Task<IActionResult> JoinActivity(UserActivityAddDto userActivityAddDto)
        {
            var result = await _userActivityService.JoinActivityAsync(userActivityAddDto);
            if (result != null)
            {
                return Ok(result);
            }

            return BadRequest();

        }

        [HttpDelete]
        [Route("[action]/{userActivityId:int}")]

        public async Task<IActionResult> LeaveActivity(int userActivityId)
        {
            var result = await _userActivityService.LeaveActivityAsync(userActivityId);
            if (result != null)
            {
                return Ok(result);
            }

            return BadRequest();

        }

        [HttpGet]
        [Route("[action]/{activityId:int}/{userId:int}")]

        public async Task<IActionResult> GetUserActivityById(int activityId, int userId)
        {
            var result = await _userActivityService.IsJoined(activityId,userId);
            if (result != null)
            {
                return Ok(result);
            }

            return BadRequest();

        }

    

    }
}
