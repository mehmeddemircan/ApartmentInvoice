using ApartmentInvoice.Business.Abstract;
using ApartmentInvoice.Entity.DTOs.PostDtos;
using ApartmentInvoice.Entity.DTOs.SurveyDtos;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ApartmentInvoice.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SurveysController : ControllerBase
    {

        ISurveyService _surveyService;
        public SurveysController(ISurveyService surveyService)
        {
            _surveyService = surveyService;
        }
        /// <summary>
        /// Bütün postları listeleyen api 
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("[action]")]
        public async Task<IActionResult> GetAllSurvey()
        {
            var result = await _surveyService.GetListAsync();
            if (result != null)
            {
                return Ok(result);
            }

            return BadRequest();

        }

        /// <summary>
        /// Yeni survey ekleyen api 
        /// </summary>
        /// <param name="postAddDto"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("[action]")]

        public async Task<IActionResult> AddNewSurvey(SurveyAddDto surveyAddDto)
        {
            var result = await _surveyService.AddAsync(surveyAddDto);
            if (result != null)
            {
                return Ok(result);
            }

            return BadRequest();

        }

        [HttpGet]
        [Route("[action]/{surveyId:int}")]
        public async Task<IActionResult> GetSurveyById(int surveyId)
        {
            var result = await _surveyService.GetByIdAsync(surveyId);
            if (result != null)
            {
                return Ok(result);
            }
            return BadRequest();
        }



        /// <summary>
        /// Survey silen api 
        /// </summary>
        /// <param name="postId"></param>
        /// <returns></returns>
        [HttpDelete]
        [Route("[action]/{surveyId:int}")]
        public async Task<IActionResult> DeleteSurvey(int surveyId)
        {
            var result = await _surveyService.DeleteAsync(surveyId);

            if (result.Success)
            {
                return Ok(result.Message);
            }

            return BadRequest();
        }

        /// <summary>
        /// Survey güncelleyen api 
        /// </summary>
        /// <param name="postUpdateDto"></param>
        /// <returns></returns>
        [HttpPut]
        [Route("[action]")]

        public async Task<IActionResult> UpdateSurvey([FromForm] SurveyUpdateDto surveyUpdateDto)
        {
            var result = await _surveyService.UpdateAsync(surveyUpdateDto);

            if (result != null)
            {
                return Ok(result);
            }
            return BadRequest();
        }




    }
}
