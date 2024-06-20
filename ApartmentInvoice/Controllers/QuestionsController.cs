using ApartmentInvoice.Business.Abstract;
using ApartmentInvoice.Entity.DTOs.BlockDtos;
using ApartmentInvoice.Entity.DTOs.QuestionDtos;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ApartmentInvoice.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuestionsController : ControllerBase
    {

        IQuestionService _questionService;
        public QuestionsController(IQuestionService questionService)
        {

            _questionService = questionService;

        }
        /// <summary>
        ///  Bütün blockları getiren API 
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("[action]")]

        public async Task<IActionResult> GetAllQuestion()
        {
            var result = await _questionService.GetListAsync();
            if (result != null)
            {
                return Ok(result);
            }

            return BadRequest();

        }

        [HttpGet]
        [Route("[action]")]

        public async Task<IActionResult> GetAllQuestionBySurveyId(int surveyId)
        {
            var result = await _questionService.GetListAsync(x => x.SurveyId == surveyId);
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

        public async Task<IActionResult> AddNewQuestion(QuestionAddDto questionAddDto)
        {
            var result = await _questionService.AddAsync(questionAddDto);
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
        [Route("[action]/{questionId:int}")]
        public async Task<IActionResult> DeleteQuestion(int questionId)
        {
            var result = await _questionService.DeleteAsync(questionId);

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

        public async Task<IActionResult> UpdateQuestion([FromForm] QuestionUpdateDto questionUpdateDto)
        {
            var result = await _questionService.UpdateAsync(questionUpdateDto);

            if (result != null)
            {
                return Ok(result);
            }
            return BadRequest();
        }
    }
}
