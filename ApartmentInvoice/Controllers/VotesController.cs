using ApartmentInvoice.Business.Abstract;
using ApartmentInvoice.Entity.DTOs.BlockDtos;
using ApartmentInvoice.Entity.DTOs.VoteDtos;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ApartmentInvoice.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VotesController : ControllerBase
    {

        IVoteService _voteService;

        public VotesController(IVoteService voteService )
        {
          _voteService = voteService;
        }

        //Todo : Soruya oy verilenler liste tutulacak

        [HttpGet]
        [Route("[action]")]

        public async Task<IActionResult> GetQuestionVotes(int questionId)
        {
            var result = await _voteService.GetListAsync(x=> x.QuestionId == questionId);
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

        public async Task<IActionResult> GiveVoteToQuestion(VoteAddDto voteAddDto)
        {
            var result = await _voteService.AddAsync(voteAddDto);
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
        [Route("[action]/{voteId:int}")]
        public async Task<IActionResult> RemoveVoteFromQuestion(int voteId)
        {
            var result = await _voteService.DeleteAsync(voteId);

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

        public async Task<IActionResult> UpdateVote([FromForm] VoteUpdateDto voteUpdateDto)
        {
            var result = await _voteService.UpdateAsync(voteUpdateDto);

            if (result != null)
            {
                return Ok(result);
            }
            return BadRequest();
        }

    }
}
