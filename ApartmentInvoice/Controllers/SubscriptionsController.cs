using ApartmentInvoice.Business.Abstract;
using ApartmentInvoice.Entity.DTOs.SubscriptionDtos;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ApartmentInvocie.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SubscriptionsController : ControllerBase
    {
        ISubscriptionService _subscriptionService; 
        public SubscriptionsController(ISubscriptionService subscriptionService)
        {
            _subscriptionService = subscriptionService;
        }
        /// <summary>
        /// Bütün üyelikleri çeken api
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("[action]")]

        public async Task<IActionResult> GetAllSubscription()
        {
            var result = await _subscriptionService.GetListAsync();
            if (result != null)
            {
                return Ok(result);
            }

            return BadRequest();

        }

        /// <summary>
        /// Yeni aidat ekleyen api 
        /// </summary>
        /// <param name="subscriptionAddDto"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("[action]")]

        public async Task<IActionResult> AddNewSubscription(SubscriptionAddDto subscriptionAddDto)
        {
            var result = await _subscriptionService.AddAsync(subscriptionAddDto);
            if (result != null)
            {
                return Ok(result);
            }

            return BadRequest();

        }
        /// <summary>
        /// Tek aidati çeken api
        /// </summary>
        /// <param name="subscriptionId"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("[action]/{subscriptionId:int}")]
        public async Task<IActionResult> GetSubscriptionById(int subscriptionId)
        {
            var result = await _subscriptionService.GetByIdAsync(subscriptionId);
            if (result != null)
            {
                return Ok(result);
            }
            return BadRequest();
        }


        /// <summary>
        /// Aidati silen api 
        /// </summary>
        /// <param name="subscriptionId"></param>
        /// <returns></returns>

        [HttpDelete]
        [Route("[action]/{subscriptionId:int}")]
        public async Task<IActionResult> DeleteSubscription(int subscriptionId)
        {
            var result = await _subscriptionService.DeleteAsync(subscriptionId);

            if (result.Success)
            {
                return Ok(result.Message);
            }

            return BadRequest();
        }

        /// <summary>
        /// Aidati güncelleyen api 
        /// </summary>
        /// <param name="subscriptionUpdateDto"></param>
        /// <returns></returns>
        [HttpPut]
        [Route("[action]")]

        public async Task<IActionResult> UpdateSubscription([FromForm] SubscriptionUpdateDto subscriptionUpdateDto)
        {
            var result = await _subscriptionService.UpdateAsync(subscriptionUpdateDto);

            if (result != null)
            {
                return Ok(result);
            }
            return BadRequest();
        }
    }
}
