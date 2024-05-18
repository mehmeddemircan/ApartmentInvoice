using ApartmentInvoice.Business.Abstract;
using ApartmentInvoice.Entity.DTOs.ActivityDtos;
using ApartmentInvoice.Entity.DTOs.ApartmentDtos;
using ApartmentInvoice.Entity.DTOs.BlockDtos;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ApartmentInvoice.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApartmentsController : ControllerBase
    {
        IApartmentService _apartmentService;
        public ApartmentsController(IApartmentService apartmentService)
        {

            _apartmentService = apartmentService;

        }
        /// <summary>
        ///  Bütün blockları getiren API 
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("[action]")]

        public async Task<IActionResult> GetAllApartment()
        {
            var result = await _apartmentService.GetListAsync();
            if (result != null)
            {
                return Ok(result);
            }

            return BadRequest();

        }
        /// <summary>
        ///  Bütün blockları getiren API 
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("[action]")]

        public async Task<IActionResult> GetApartmentByCity(int cityId)
        {
            var result = await _apartmentService.GetListAsync((x) => x.CityId == cityId);
            if (result != null)
            {
                return Ok(result);
            }

            return BadRequest();

        }
        /// <summary>
        /// Yeni block eklemeyi sağlayan API 
        /// </summary>
        /// <param name="blockAddDto"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("[action]")]

        public async Task<IActionResult> AddNewAparment([FromBody]ApartmentAddDto apartmentAddDto)
        {
            var result = await _apartmentService.AddAsync(apartmentAddDto);
            if (result != null)
            {
                return Ok(result);
            }

            return BadRequest();

        }

        /// <summary>
        ///  Tek bir block getiren API 
        ///  Id ye göre getirir 
        /// </summary>
        /// <param name="blockId"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("[action]/{apartmentId:int}")]
        public async Task<IActionResult> GetApartmentById(int apartmentId)
        {
            var result = await _apartmentService.GetByIdAsync(apartmentId);
            if (result != null)
            {
                return Ok(result);
            }
            return BadRequest();
        }



        /// <summary>
        ///  Block silen API 
        ///  Id ye göre siler 
        ///  Yöneticinin erisim hakkı varıdr 
        /// </summary>
        /// <param name="blockId"></param>
        /// <returns></returns>
        [HttpDelete]
        [Route("[action]/{apartmentId:int}")]
        public async Task<IActionResult> DeleteApartment(int apartmentId)
        {
            var result = await _apartmentService.DeleteAsync(apartmentId);

            if (result.Success)
            {
                return Ok(result.Message);
            }

            return BadRequest();
        }

        /// <summary>
        /// Block güncelleyen API 
        /// Yöneticinin erişim hakkı vardır 
        /// </summary>
        /// <param name="blockUpdateDto"></param>
        /// <returns></returns>
        [HttpPut]
        [Route("[action]")]

        public async Task<IActionResult> UpdateApartment([FromBody] ApartmentUpdateDto apartmentUpdateDto)
        {
            var result = await _apartmentService.UpdateAsync(apartmentUpdateDto);

            if (result != null)
            {
                return Ok(result);
            }
            return BadRequest();
        }


    }
}
