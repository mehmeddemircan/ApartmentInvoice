using ApartmentInvoice.Business.Abstract;
using ApartmentInvoice.Business.Constants;
using ApartmentInvoice.Core.Utilities.Results;
using ApartmentInvoice.DataAccess.Abstract;
using ApartmentInvoice.DataAccess.Concrete.EntityFramework;
using ApartmentInvoice.Entity.Concrete;
using ApartmentInvoice.Entity.DTOs.BlockDtos;
using ApartmentInvoice.Entity.DTOs.CommentDtos;
using ApartmentInvoice.Entity.DTOs.OrderDtos;
using ApartmentInvoice.Entity.DTOs.PostDtos;
using ApartmentInvoice.Entity.Enums;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Business.Concrete
{
    public class OrderManager : IOrderService
    {

        IOrderRepository _orderRepository;
        IUserRepository _userRepository;
        IMapper _mapper;
        public OrderManager(IOrderRepository orderRepository, IMapper mapper, IUserRepository userRepository)
        {
            _orderRepository = orderRepository;
            _mapper = mapper;
            _userRepository = userRepository;
        }
        public async Task<IResult> AddAsync(OrderAddDto entity)
        {
            var newOrder = _mapper.Map<Order>(entity);

            await _orderRepository.AddAsync(newOrder);


            return new SuccessResult(Messages.Added);
        }

        public async Task<IDataResult<bool>> DeleteAsync(int id)
        {
            var isDelete = await _orderRepository.DeleteAsync(id);
            return new SuccessDataResult<bool>(isDelete, Messages.Deleted);
        }

        public async Task<IDataResult<OrderDto>> GetAsync(Expression<Func<Order, bool>> filter)
        {
            var order = await _orderRepository.GetAsync(filter);
            if (order != null)
            {
                var orderDetailDto = _mapper.Map<OrderDto>(order);
                return new SuccessDataResult<OrderDto>(orderDetailDto, Messages.Listed);

            }
            return new ErrorDataResult<OrderDto>(null, Messages.NotListed);
        }

        public async Task<IDataResult<OrderDto>> GetByIdAsync(int id)
        {
            var order = await _orderRepository.GetAsync(x => x.Id == id);
            if (order != null)
            {
                var orderDetailDto = await AssignOrderDetail(order, order.UserId);
                return new SuccessDataResult<OrderDto>(orderDetailDto, Messages.Listed);

            }
            return new ErrorDataResult<OrderDto>(null, Messages.NotListed);
        }

        public async Task<IDataResult<IEnumerable<OrdersDto>>> GetListAsync(Expression<Func<Order, bool>> filter = null)
        {
            List<OrdersDto> orders = new List<OrdersDto>();
            if (filter == null)
            {
                // Exception 
                //throw new UnauthorizedAccessException("UnAuthorized"); 
                var response = await _orderRepository.GetListAsync();

                foreach (var order in response)
                {
                    var orderDto = await AssignOrders(order, order.UserId);
                    orders.Add(orderDto);
                }
                return new SuccessDataResult<IEnumerable<OrdersDto>>(orders, Messages.Listed);
            }
            else
            {
                var response = await _orderRepository.GetListAsync(filter);

                foreach (var order in response)
                {
                    var orderDto = await AssignOrders(order, order.UserId);
                    orders.Add(orderDto);
                }
                return new SuccessDataResult<IEnumerable<OrdersDto>>(orders, Messages.Listed);
            }
        }

        public async Task<IDataResult<OrderUpdateDto>> UpdateAsync(OrderUpdateDto orderUpdateDto)
        {
            var getOrder = await _orderRepository.GetAsync(x => x.Id == orderUpdateDto.Id);

            var order = _mapper.Map<Order>(orderUpdateDto);


            order.UpdatedDate = DateTime.Now;
            order.UpdatedBy = 1;


            var orderUpdate = await _orderRepository.UpdateAsync(order);
            var resultUpdateDto = _mapper.Map<OrderUpdateDto>(orderUpdate);

            return new SuccessDataResult<OrderUpdateDto>(resultUpdateDto, Messages.Updated);
        }

        private async Task<OrdersDto> AssignOrders(Order order, int userId)
        {
            var user = await _userRepository.GetAsync(x => x.Id == userId);

            if (user == null)
            {
                return null;
            }
            order.User = user;

            var ordersDto = _mapper.Map<OrdersDto>(order);
            return ordersDto;
        }


        private async Task<OrderDto> AssignOrderDetail(Order order, int userId)
        {
            var user = await _userRepository.GetAsync(x => x.Id == userId);

            if (user == null)
            {
                return null;
            }
            order.User = user;

            var commentsDto = _mapper.Map<OrderDto>(order);
            return commentsDto;
        }

        public async Task<IResult> UpdateOrderStatusAsync(int orderId , OrderStatus orderStatus)
        {
            var getOrder = await _orderRepository.GetAsync(x => x.Id == orderId);


            getOrder.OrderStatus = orderStatus; 

          


            var orderUpdate = await _orderRepository.UpdateAsync(getOrder);
            

            return new SuccessResult(Messages.Added);
        }
    }
}
