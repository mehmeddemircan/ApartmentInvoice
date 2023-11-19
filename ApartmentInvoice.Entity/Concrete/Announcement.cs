using ApartmentInvoice.Core.Entities.Concrete;
using ApartmentInvoice.Core.Entities.Concrete.Auth;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Entity.Concrete
{
    public class Announcement : AuditableEntity
    {

        public int UserId { get; set; }
        public virtual User User { get; set; }
        public string Title { get; set; } 
        public string Content { get; set; } 
        public DateTime DatePosted { get; set; } = DateTime.Now;


    }
}
