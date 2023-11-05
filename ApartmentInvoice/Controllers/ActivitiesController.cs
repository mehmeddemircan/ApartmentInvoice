using ApartmentInvoice.Business.Abstract;
using ApartmentInvoice.Entity.DTOs.ActivityDtos;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ApartmentInvoice.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ActivitiesController : ControllerBase
    {
        IActivityService _activityService; 
        public ActivitiesController(IActivityService activityService )
        {
            _activityService = activityService; 
        }

        [HttpGet]
        [Route("[action]")]
        public async Task<IActionResult> GetAllActivity()
        {
            var result = await _activityService.GetListAsync();
            if (result != null)
            {
                return Ok(result);
            }

            return BadRequest();

        }


        [HttpPost]
        [Route("[action]")]

        public async Task<IActionResult> AddNewActivity(ActivityAddDto activityAddDto)
        {
            var result = await _activityService.AddAsync(activityAddDto);
            if (result != null)
            {
                return Ok(result);
            }

            return BadRequest();

        }

        [HttpGet]
        [Route("[action]/{activityId:int}")]
        public async Task<IActionResult> GetActivityById(int activityId)
        {
            var result = await _activityService.GetByIdAsync(activityId);
            if (result != null)
            {
                return Ok(result);
            }
            return BadRequest();
        }




        [HttpDelete]
        [Route("[action]/{activityId:int}")]
        public async Task<IActionResult> DeleteActivity(int activityId)
        {
            var result = await _activityService.DeleteAsync(activityId);

            if (result.Success)
            {
                return Ok(result.Message);
            }

            return BadRequest();
        }


        [HttpPut]
        [Route("[action]")]

        public async Task<IActionResult> UpdateActivity([FromForm] ActivityUpdateDto activityUpdateDto)
        {
            var result = await _activityService.UpdateAsync(activityUpdateDto);

            if (result != null)
            {
                return Ok(result);
            }
            return BadRequest();
        }
    }
}
