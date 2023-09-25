using ApartmentInvoice.Core.Entities.Concrete;
using ApartmentInvoice.Entity.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Entity.Concrete
{
    public class Subscription : AuditableEntity
    {

        //public int FlatId { get; set; }
        //public virtual Flat Flat { get; set; }
        public float Amount { get; set; }
        public int Month { get; set; }
        public int Year { get; set; }
        public virtual ICollection<FlatSubscription>? FlatSubscriptions { get; set; }

    }
}
