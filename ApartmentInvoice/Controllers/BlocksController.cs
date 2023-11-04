using ApartmentInvoice.Business.Abstract;
using ApartmentInvoice.Entity.DTOs.BlockDtos;
using ApartmentInvoice.Entity.DTOs.CategoryDtos;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ApartmentInvocie.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BlocksController : ControllerBase
    {
        IBlockService _blockService; 
        public BlocksController(IBlockService blockService)
        {

           _blockService = blockService;

        }
        /// <summary>
        ///  Bütün blockları getiren API 
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("[action]")]

        public async Task<IActionResult> GetAllBlock()
        {
            var result = await _blockService.GetListAsync();
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

        public async Task<IActionResult> AddNewBlock(BlockAddDto blockAddDto)
        {
            var result = await _blockService.AddAsync(blockAddDto);
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
        [Route("[action]/{blockId:int}")]
        public async Task<IActionResult> GetBlockById(int blockId)
        {
            var result = await _blockService.GetByIdAsync(blockId);
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
        [Route("[action]/{blockId:int}")]
        public async Task<IActionResult> DeleteBlock(int blockId)
        {
            var result = await _blockService.DeleteAsync(blockId);

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

        public async Task<IActionResult> UpdateBlock([FromForm] BlockUpdateDto blockUpdateDto)
        {
            var result = await _blockService.UpdateAsync(blockUpdateDto);

            if (result != null)
            {
                return Ok(result);
            }
            return BadRequest();
        }
    }
}
