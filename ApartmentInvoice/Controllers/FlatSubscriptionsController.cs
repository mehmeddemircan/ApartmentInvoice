using ApartmentInvoice.Business.Abstract;
using ApartmentInvoice.Entity.DTOs.FlatSubscriptionDtos;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ApartmentInvocie.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FlatSubscriptionsController : ControllerBase
    {
        IFlatSubscriptionService _flatSubscriptionService; 
        public FlatSubscriptionsController(IFlatSubscriptionService flatSubscriptionService)
        {

            _flatSubscriptionService = flatSubscriptionService;

        }
        [HttpGet]
        [Route("[action]")]

        public async Task<IActionResult> GetAllFlatSubscription()
        {
            var result = await _flatSubscriptionService.GetListAsync();
            if (result != null)
            {
                return Ok(result);
            }

            return BadRequest();

        }


        [HttpPost]
        [Route("[action]")]

        public async Task<IActionResult> AddNewFlatSubscription(FlatSubscriptionAddDto flatSubscriptionAddDto)
        {
            var result = await _flatSubscriptionService.AddAsync(flatSubscriptionAddDto);
            if (result != null)
            {
                return Ok(result);
            }

            return BadRequest();

        }

        [HttpGet]
        [Route("[action]/{flatSubscriptionId:int}")]
        public async Task<IActionResult> GetFlatSubscriptionById(int flatSubscriptionId)
        {
            var result = await _flatSubscriptionService.GetByIdAsync(flatSubscriptionId);
            if (result != null)
            {
                return Ok(result);
            }
            return BadRequest();
        }




        [HttpDelete]
        [Route("[action]/{flatSubscriptionId:int}")]
        public async Task<IActionResult> DeleteFlatSubscription(int flatSubscriptionId)
        {
            var result = await _flatSubscriptionService.DeleteAsync(flatSubscriptionId);

            if (result.Success)
            {
                return Ok(result.Message);
            }

            return BadRequest();
        }


        [HttpPut]
        [Route("[action]")]

        public async Task<IActionResult> UpdateFlatSubscription([FromForm] FlatSubscriptionUpdateDto flatSubscriptionUpdateDto)
        {
            var result = await _flatSubscriptionService.UpdateAsync(flatSubscriptionUpdateDto);

            if (result != null)
            {
                return Ok(result);
            }
            return BadRequest();
        }
    }
}
