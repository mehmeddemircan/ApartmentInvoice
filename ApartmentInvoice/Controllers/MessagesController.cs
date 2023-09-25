using ApartmentInvoice.Business.Abstract;
using ApartmentInvoice.Entity.DTOs.MessageDtos;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ApartmentInvocie.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MessagesController : ControllerBase
    {
        IMessageService _messageService; 
        public MessagesController(IMessageService messageService)
        {
            _messageService = messageService;
        }

        [HttpGet]
        [Route("[action]")]

        public async Task<IActionResult> GetAllMessage()
        {
            var result = await _messageService.GetListAsync();
            if (result != null)
            {
                return Ok(result);
            }

            return BadRequest();

        }


        [HttpPost]
        [Route("[action]")]

        public async Task<IActionResult> AddNewMessage(MessageAddDto messageAddDto)
        {
            var result = await _messageService.AddAsync(messageAddDto);
            if (result != null)
            {
                return Ok(result);
            }

            return BadRequest();

        }

        [HttpGet]
        [Route("[action]/{messageId:int}")]
        public async Task<IActionResult> GetMessageById(int messageId)
        {
            var result = await _messageService.GetByIdAsync(messageId);
            if (result != null)
            {
                return Ok(result);
            }
            return BadRequest();
        }




        [HttpDelete]
        [Route("[action]/{messageId:int}")]
        public async Task<IActionResult> DeleteMessage(int messageId)
        {
            var result = await _messageService.DeleteAsync(messageId);

            if (result.Success)
            {
                return Ok(result.Message);
            }

            return BadRequest();
        }


        [HttpPut]
        [Route("[action]")]

        public async Task<IActionResult> UpdateMessage([FromForm] MessageUpdateDto messageUpdateDto)
        {
            var result = await _messageService.UpdateAsync(messageUpdateDto);

            if (result != null)
            {
                return Ok(result);
            }
            return BadRequest();
        }
    }
}
