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

        IBillService _billService; 
        public BillsController(IBillService billService)
        {

            _billService = billService;

        }
        /// <summary>
        ///  Database de ki bütün faturaları getiren API 
        ///  Yönetici görebilir 
        /// </summary>
        /// <returns></returns>
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

        /// <summary>
        /// Yeni fatura ekleyen API 
        /// Yöneticinin erişme hakkı vardır 
        /// </summary>
        /// <param name="billAddDto"></param>
        /// <returns></returns>
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
        /// <summary>
        /// Faturanın Id ye göre getiren API 
        /// </summary>
        /// <param name="billId"></param>
        /// <returns></returns>
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


        /// <summary>
        /// Fatura silen API 
        /// </summary>
        /// <param name="billId"></param>
        /// <returns></returns>

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

        /// <summary>
        /// Fatura Güncelleyen API 
        /// </summary>
        /// <param name="billUpdateDto"></param>
        /// <returns></returns>
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
