using ApartmentInvoice.Core.Entities.Abstract;
using ApartmentInvoice.Entity.Concrete;
using ApartmentInvoice.Entity.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Entity.DTOs.SubscriptionDtos
{
    public class SubscriptionAddDto : IDto
    {
        public float Amount { get; set; }
        public int Month { get; set; }
        public int Year { get; set; }
    }
}
