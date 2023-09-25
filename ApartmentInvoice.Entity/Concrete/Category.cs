using ApartmentInvoice.Core.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Entity.Concrete
{
    public class Category : AuditableEntity
    {

        public string CategoryName { get; set; }

    }
}
