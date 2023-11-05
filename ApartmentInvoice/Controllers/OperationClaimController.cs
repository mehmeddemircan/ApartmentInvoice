using ApartmentInvoice.Business.Abstract;
using ApartmentInvoice.Entity.DTOs.OperationClaimDtos;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ApartmentInvocie.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OperationClaimController : ControllerBase
    {
        IOperationClaimService _operationClaimService;

        public OperationClaimController(IOperationClaimService operationClaimService)
        {
            _operationClaimService = operationClaimService;
        }


        /// <summary>
        /// Bütün rolleri gösteren api 
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("[action]")]

        public async Task<IActionResult> GetAllOperationClaim()
        {
            var result = await _operationClaimService.GetListAsync();
            if (result != null)
            {
                return Ok(result);
            }

            return BadRequest();

        }


        /// <summary>
        /// Yeni rol ekleyen api 
        /// </summary>
        /// <param name="operationClaimAddDto"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("[action]")]

        public async Task<IActionResult> AddNewOperationClaim(OperationClaimAddDto operationClaimAddDto)
        {
            var result = await _operationClaimService.AddAsync(operationClaimAddDto);
            if (result != null)
            {
                return Ok(result);
            }

            return BadRequest();

        }


        /// <summary>
        /// Id ye göre tek rol getiren api 
        /// </summary>
        /// <param name="operationClaimId"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("[action]/{operationClaimId:int}")]
        public async Task<IActionResult> GetOperationClaimById(int operationClaimId)
        {
            var result = await _operationClaimService.GetByIdAsync(operationClaimId);
            if (result != null)
            {
                return Ok(result);
            }
            return BadRequest();
        }



        /// <summary>
        /// rolü silen api 
        /// </summary>
        /// <param name="operationClaimId"></param>
        /// <returns></returns>
        [HttpDelete]
        [Route("[action]/{operationClaimId:int}")]
        public async Task<IActionResult> DeleteOperationClaim(int operationClaimId)
        {
            var result = await _operationClaimService.DeleteAsync(operationClaimId);

            if (result.Success)
            {
                return Ok(result.Message);
            }

            return BadRequest();
        }

        /// <summary>
        /// rolü güncelleyen api 
        /// </summary>
        /// <param name="operationClaimUpdateDto"></param>
        /// <returns></returns>
        [HttpPut]
        [Route("[action]")]

        public async Task<IActionResult> UpdateOperationClaim([FromForm] OperationClaimUpdateDto operationClaimUpdateDto)
        {
            var result = await _operationClaimService.UpdateAsync(operationClaimUpdateDto);

            if (result != null)
            {
                return Ok(result);
            }
            return BadRequest();
        }
    }
}
