using ApartmentInvoice.Core.Entities.Concrete;
using ApartmentInvoice.Core.Entities.Concrete.Auth;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Entity.Concrete
{
    public class ActivityComment : AuditableEntity
    {

        public int UserId { get; set; }
        public int ActivityId { get; set; }
        public string Content { get; set; }

        public virtual User User { get; set; }

        
    }
}
