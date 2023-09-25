using ApartmentInvoice.Core.Entities.Abstract;
using ApartmentInvoice.Entity.Concrete;
using ApartmentInvoice.Entity.Enums;

namespace ApartmentInvoice.Entity.DTOs.FlatSubscriptionDtos
{
    public class FlatSubscriptionsDto : IDto
    {
        public int Id { get; set; }
        public int FlatId { get; set; }
        public virtual Flat Flat { get; set; }

        public int SubscriptionId { get; set; }
        public virtual Subscription Subscription { get; set; }

        public SubscriptionStatus SubscriptionStatu { get; set; } = SubscriptionStatus.Pending;
    }
}
