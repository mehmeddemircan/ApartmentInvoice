using ApartmentInvoice.Business.Abstract;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ApartmentInvocie.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {

        ICategoryService _categoryService;

        public CategoriesController(ICategoryService categoryService)
        {
            _categoryService = categoryService;
        }


        [HttpGet]
        [Route("[action]")]

        public async Task<IActionResult> GetCategoies()
        {
            var result = await _categoryService.GetListAsync();
            if (result != null)
            {
                return Ok(result);
            }

            return BadRequest();

        }


        [HttpGet]
        [Route("[action]/{categoryId:int}")]
        public async Task<IActionResult> GetCategoryById(int categoryId)
        {
            var result = await _categoryService.GetByIdAsync(categoryId);
            if (result != null)
            {
                return Ok(result);
            }
            return BadRequest();
        }


    }
}
