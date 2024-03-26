using ApartmentInvoice.Core.Entities.Abstract;
using ApartmentInvoice.Entity.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Entity.DTOs.OrderDtos
{
    public class OrdersDto : IDto
    {


        public int Id { get; set; }

        public string OrderContent { get; set; }
        public string UserFirstName { get; set; }

        public string UserLastName { get; set; }

        public OrderStatus OrderStatus { get; set; }
    }
}
