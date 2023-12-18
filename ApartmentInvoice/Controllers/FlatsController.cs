using ApartmentInvoice.Business.Abstract;
using ApartmentInvoice.Entity.DTOs.BlockDtos;
using ApartmentInvoice.Entity.DTOs.FlatDtos;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ApartmentInvocie.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FlatsController : ControllerBase
    {

        //Todo : boş olmasına göre filtrele 
        //Todo : hatta query string seklinde yapılsın 
        //Todo : Admin icin olan controllerlar admin içine aktarılacak 
        //Todo : Block bilgileride gösterilecek 
        IFlatService _flatService;

        public FlatsController(IFlatService flatService)
        {
            _flatService = flatService;
        }
        /// <summary>
        /// Bütün daireleri getiren API 
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("[action]")]

        public async Task<IActionResult> GetAllFlat()
        {
            var result = await _flatService.GetListAsync();
            if (result != null)
            {
                return Ok(result);
            }

            return BadRequest();

        }

        /// <summary>
        /// Yeni bir daire eklemeyi sağlayan API 
        /// </summary>
        /// <param name="flatAddDto"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("[action]")]

        public async Task<IActionResult> AddNewFlat(FlatAddDto flatAddDto)
        {
            var result = await _flatService.AddAsync(flatAddDto);
            if (result != null)
            {
                return Ok(result);
            }

            return BadRequest();

        }

        /// <summary>
        /// Id ye göre tek bir daire getiren API 
        /// </summary>
        /// <param name="flatId"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("[action]/{flatId:int}")]
        public async Task<IActionResult> GetFlatById(int flatId)
        {
            var result = await _flatService.GetByIdAsync(flatId);
            if (result != null)
            {
                return Ok(result);
            }
            return BadRequest();
        }

        /// <summary>
        /// Dolu mu boş mu olduguna  göre daireleri listeyen  API 
        /// </summary>
        /// <param name="isEmpty"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("[action]/{isEmpty:bool}")]
        public async Task<IActionResult> GetFlatByEmpty(bool isEmpty)
        {
            var result = await _flatService.GetListAsync(x => x.IsEmpty == isEmpty);
            if (result != null)
            {
                return Ok(result);
            }
            return BadRequest();
        }

        [HttpGet]
        [Route("[action]/{blockId:int}")]
        public async Task<IActionResult> GetFlatByBlock(int blockId)
        {
            var result = await _flatService.GetListAsync(x => x.BlockId == blockId);
            if (result != null)
            {
                return Ok(result);
            }
            return BadRequest();
        }

        /// <summary>
        /// Daire silmeyi sağlayan API 
        /// </summary>
        /// <param name="flatId"></param>
        /// <returns></returns>
        [HttpDelete]
        [Route("[action]/{flatId:int}")]
        public async Task<IActionResult> DeleteFlat(int flatId)
        {
            var result = await _flatService.DeleteAsync(flatId);

            if (result.Success)
            {
                return Ok(result.Message);
            }

            return BadRequest();
        }

        /// <summary>
        /// Daire güncelleyen API 
        /// </summary>
        /// <param name="flatUpdateDto"></param>
        /// <returns></returns>
        [HttpPut]
        [Route("[action]")]

        public async Task<IActionResult> UpdateFlat([FromForm] FlatUpdateDto flatUpdateDto)
        {
            var result = await _flatService.UpdateAsync(flatUpdateDto);

            if (result != null)
            {
                return Ok(result);
            }
            return BadRequest();
        }
    }
}
