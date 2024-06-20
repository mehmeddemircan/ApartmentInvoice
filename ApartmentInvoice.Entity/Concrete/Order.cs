using ApartmentInvoice.Core.Entities.Concrete;
using ApartmentInvoice.Core.Entities.Concrete.Auth;
using ApartmentInvoice.Entity.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Entity.Concrete
{
    public class Order : AuditableEntity
    {

        public int UserId { get; set; }

        public virtual User  User { get; set; }
        public string OrderContent { get; set; }
        public OrderStatus OrderStatus { get; set; }
    }
}
