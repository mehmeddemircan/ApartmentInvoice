using ApartmentInvoice.Core.Entities.Concrete;
using ApartmentInvoice.Core.Entities.Concrete.Auth;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Entity.Concrete
{
    public class Message : AuditableEntity
    {

        public int UserId { get; set; }

        public virtual User User { get; set; }

        public string Subject { get; set; }
        public string MessageContent { get; set; }
        //TODO : Added jwt authentication to add message
    }
}
