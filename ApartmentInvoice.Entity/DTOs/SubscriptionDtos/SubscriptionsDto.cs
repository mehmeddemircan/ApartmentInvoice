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
    public class SubscriptionsDto : IDto
    {
        public int Id { get; set; }
        public float Amount { get; set; }

        public string SubscriptionDate { get; set; }

    }
}
