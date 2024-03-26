using ApartmentInvoice.Core.Entities.Abstract;
using ApartmentInvoice.Entity.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Entity.DTOs.OrderDtos
{
    public class OrderAddDto : IDto
    {

        public int UserId { get; set; }

        public string OrderContent { get; set; }

        public OrderStatus OrderStatus { get; set; } = OrderStatus.Pending;
    }
}
