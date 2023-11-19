using ApartmentInvoice.Core.Entities.Concrete;
using ApartmentInvoice.Core.Entities.Concrete.Auth;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Entity.Concrete
{
    public  class Survey : AuditableEntity
    {
        public string Title { get; set; }

        public ICollection<Question>? Questions { get; set; }
    }

}
