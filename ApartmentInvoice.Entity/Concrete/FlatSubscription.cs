using ApartmentInvoice.Core.Entities.Concrete;
using ApartmentInvoice.Entity.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Entity.Concrete
{
    public class FlatSubscription : AuditableEntity
    {
        public int FlatId { get; set; }
        public virtual Flat Flat { get; set; }
        
        public int SubscriptionId { get; set; }
        public virtual Subscription Subscription { get; set; }

        public SubscriptionStatus SubscriptionStatu { get; set; } = SubscriptionStatus.Pending;
    }
}
