using ApartmentInvoice.Business.Abstract;
using ApartmentInvoice.Entity.DTOs.AnnouncementDtos;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ApartmentInvoice.WebApi.Controllers.Areas.Doorman
{
    [Area("Doorman")]
    [Route("api/[Area]/[controller]")]
    [ApiController]
    public class AnnouncementsController : ControllerBase
    {

        IAnnouncementService _announcementService;
        public AnnouncementsController(IAnnouncementService announcementService)
        {
            _announcementService = announcementService;
        }
        /// <summary>
        /// Bütün Announcementları listeleyen api 
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("[action]")]
        public async Task<IActionResult> GetAllAnnouncement()
        {
            var result = await _announcementService.GetListAsync();
            if (result != null)
            {
                return Ok(result);
            }

            return BadRequest();

        }

        /// <summary>
        /// Yeni Announcement ekleyen api 
        /// </summary>
        /// <param name="AnnouncementAddDto"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("[action]")]

        public async Task<IActionResult> AddNewAnnouncement(AnnouncementAddDto announcementAddDto)
        {
            var result = await _announcementService.AddAsync(announcementAddDto);
            if (result != null)
            {
                return Ok(result);
            }

            return BadRequest();

        }

        [HttpGet]
        [Route("[action]/{announcementId:int}")]
        public async Task<IActionResult> GetAnnouncementById(int announcementId)
        {
            var result = await _announcementService.GetByIdAsync(announcementId);
            if (result != null)
            {
                return Ok(result);
            }
            return BadRequest();
        }



        /// <summary>
        /// Announcement silen api 
        /// </summary>
        /// <param name="AnnouncementId"></param>
        /// <returns></returns>
        [HttpDelete]
        [Route("[action]/{announcementId:int}")]
        public async Task<IActionResult> DeleteAnnouncement(int announcementId)
        {
            var result = await _announcementService.DeleteAsync(announcementId);

            if (result.Success)
            {
                return Ok(result.Message);
            }

            return BadRequest();
        }

        /// <summary>
        /// Announcement güncelleyen api 
        /// </summary>
        /// <param name="AnnouncementUpdateDto"></param>
        /// <returns></returns>
        [HttpPut]
        [Route("[action]")]

        public async Task<IActionResult> UpdateAnnouncement([FromForm] AnnouncementUpdateDto announcementUpdateDto)
        {
            var result = await _announcementService.UpdateAsync(announcementUpdateDto);

            if (result != null)
            {
                return Ok(result);
            }
            return BadRequest();
        }
    }
}
