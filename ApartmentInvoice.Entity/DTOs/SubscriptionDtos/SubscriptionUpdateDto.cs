using ApartmentInvoice.Core.Entities.Abstract;
using ApartmentInvoice.Entity.Concrete;
using ApartmentInvoice.Entity.Enums;

namespace ApartmentInvoice.Entity.DTOs.SubscriptionDtos
{
    public class SubscriptionUpdateDto : IDto
    {

        public int Id { get; set; }
        public float Amount { get; set; }
        public string SubscriptionDate { get; set; }

    }
}
