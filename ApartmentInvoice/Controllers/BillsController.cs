using ApartmentInvoice.Business.Abstract;
using ApartmentInvoice.Entity.DTOs.BillDtos;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ApartmentInvocie.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BillsController : ControllerBase
    {
        //Todo: Authentication Ekleencek 
        IBillService _billService; 
        public BillsController(IBillService billService)
        {

            _billService = billService;

        }

        [HttpGet]
        [Route("[action]")]

        public async Task<IActionResult> GetAllBill()
        {
            var result = await _billService.GetListAsync();
            if (result != null)
            {
                return Ok(result);
            }

            return BadRequest();

        }


        [HttpPost]
        [Route("[action]")]

        public async Task<IActionResult> AddNewBill(BillAddDto billAddDto)
        {
            var result = await _billService.AddAsync(billAddDto);
            if (result != null)
            {
                return Ok(result);
            }

            return BadRequest();

        }

        [HttpGet]
        [Route("[action]/{billId:int}")]
        public async Task<IActionResult> GetBillById(int billId)
        {
            var result = await _billService.GetByIdAsync(billId);
            if (result != null)
            {
                return Ok(result);
            }
            return BadRequest();
        }




        [HttpDelete]
        [Route("[action]/{billId:int}")]
        public async Task<IActionResult> DeleteBill(int billId)
        {
            var result = await _billService.DeleteAsync(billId);

            if (result.Success)
            {
                return Ok(result.Message);
            }

            return BadRequest();
        }


        [HttpPut]
        [Route("[action]")]

        public async Task<IActionResult> UpdateBill([FromForm] BillUpdateDto billUpdateDto)
        {
            var result = await _billService.UpdateAsync(billUpdateDto);

            if (result != null)
            {
                return Ok(result);
            }
            return BadRequest();
        }
    }
}
