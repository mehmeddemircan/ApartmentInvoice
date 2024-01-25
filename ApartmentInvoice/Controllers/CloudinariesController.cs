using ApartmentInvoice.Business.Abstract;
using ApartmentInvoice.Entity.DTOs.ActivityDtos;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ApartmentInvoice.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CloudinariesController : ControllerBase
    {
        ICloudinaryService _cloudinaryService;
        public CloudinariesController(ICloudinaryService cloudinaryService)
        {

            _cloudinaryService = cloudinaryService;

        }
        [HttpPost]
        [Route("[action]")]

        public async Task<IActionResult> AddImage( IFormFile file)
        {
            var result = await _cloudinaryService.UploadActivityImageAsync(file);
            if (result != null)
            {
                return Ok(result);
            }

            return BadRequest();

        }

    }
}
