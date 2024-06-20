using ApartmentInvoice.Business.Abstract;
using ApartmentInvoice.Entity.DTOs.BlockDtos;
using ApartmentInvoice.Entity.DTOs.OrderDtos;
using ApartmentInvoice.Entity.Enums;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ApartmentInvoice.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {


        IOrderService _orderService;
        public OrdersController(IOrderService orderService)
        {

            _orderService = orderService;

        }
        /// <summary>
        ///  Bütün blockları getiren API 
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("[action]")]

        public async Task<IActionResult> GetAllOrder()
        {
            var result = await _orderService.GetListAsync();
            if (result != null)
            {
                return Ok(result);
            }

            return BadRequest();

        }



        [HttpGet]
        [Route("[action]/{userId:int}")]

        public async Task<IActionResult> GetOrdersByUserId(int userId)
        {
            var result = await _orderService.GetListAsync(x => x.UserId == userId);
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

        public async Task<IActionResult> AddNewOrder(OrderAddDto orderAddDto)
        {
            var result = await _orderService.AddAsync(orderAddDto);
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
        [Route("[action]/{orderId:int}")]
        public async Task<IActionResult> GetOrderById(int orderId)
        {
            var result = await _orderService.GetByIdAsync(orderId);
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
        [Route("[action]/{orderId:int}")]
        public async Task<IActionResult> DeleteOrder(int orderId)
        {
            var result = await _orderService.DeleteAsync(orderId);

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

        public async Task<IActionResult> UpdateOrder([FromBody] OrderUpdateDto orderUpdateDto)
        {
            var result = await _orderService.UpdateAsync(orderUpdateDto);

            if (result != null)
            {
                return Ok(result);
            }
            return BadRequest();
        }

        [HttpPut]
        [Route("[action]")]

        public async Task<IActionResult> UpdateOrderStatus( int orderId, OrderStatus orderStatus)
        {
            var result = await _orderService.UpdateOrderStatusAsync(orderId,orderStatus);

            if (result != null)
            {
                return Ok(result);
            }
            return BadRequest();
        }

    }
}
