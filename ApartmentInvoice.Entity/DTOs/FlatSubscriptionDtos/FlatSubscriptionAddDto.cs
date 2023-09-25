using ApartmentInvoice.Core.Entities.Abstract;
using ApartmentInvoice.Entity.Concrete;
using ApartmentInvoice.Entity.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Entity.DTOs.FlatSubscriptionDtos
{
    public class FlatSubscriptionAddDto : IDto
    {
        public int FlatId { get; set; }
        public int SubscriptionId { get; set; }
    }
}
