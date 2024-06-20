using ApartmentInvoice.Core.Utilities.Results;
using ApartmentInvoice.Entity.Concrete;
using ApartmentInvoice.Entity.DTOs.OrderDtos;
using ApartmentInvoice.Entity.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Business.Abstract
{
    public interface IOrderService
    {

        Task<IResult> AddAsync(OrderAddDto entity);


        Task<IDataResult<IEnumerable<OrdersDto>>> GetListAsync(Expression<Func<Order, bool>> filter = null);
        Task<IDataResult<OrderDto>> GetAsync(Expression<Func<Order, bool>> filter);

        Task<IDataResult<OrderDto>> GetByIdAsync(int id);

        Task<IDataResult<OrderUpdateDto>> UpdateAsync(OrderUpdateDto orderUpdateDto);


        Task<IResult> UpdateOrderStatusAsync(int orderId,OrderStatus orderStatus);
        Task<IDataResult<bool>> DeleteAsync(int id);
    }
}
