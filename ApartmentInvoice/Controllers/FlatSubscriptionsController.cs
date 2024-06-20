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

        /// <summary>
        /// Daire üyeliklerini aidatlarını gösteren apı 
        /// </summary>
        /// <returns></returns>
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


        /// <summary>
        /// Yeni aidat ekleyen api 
        /// </summary>
        /// <param name="flatSubscriptionAddDto"></param>
        /// <returns></returns>
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


        /// <summary>
        /// Aidati id ye göre çeken api 
        /// </summary>
        /// <param name="flatSubscriptionId"></param>
        /// <returns></returns>

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




        /// <summary>
        /// Aidati silen api 
        /// </summary>
        /// <param name="flatSubscriptionId"></param>
        /// <returns></returns>
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



        /// <summary>
        /// Aidati güncelleyen api 
        /// </summary>
        /// <param name="flatSubscriptionUpdateDto"></param>
        /// <returns></returns>
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
