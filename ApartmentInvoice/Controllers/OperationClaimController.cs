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
