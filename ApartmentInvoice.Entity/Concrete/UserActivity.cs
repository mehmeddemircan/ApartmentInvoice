using ApartmentInvoice.Core.Entities.Concrete;
using ApartmentInvoice.Core.Entities.Concrete.Auth;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Entity.Concrete
{
    public class UserActivity : AuditableEntity
    {
        public int ActivityId  { get; set; }
        public virtual Activity Activity { get; set; }
        public int UserId { get; set; }
        public virtual User  User { get; set; }
    }
}
