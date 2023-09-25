using ApartmentInvoice.Core.Entities.Concrete;
using ApartmentInvoice.Entity.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Entity.Concrete
{
    public class Bill : AuditableEntity
    {

        public int FlatId { get; set; }
 
        public virtual Flat Flat { get; set; }
        public float Amount { get; set; }
        public int CategoryId { get; set; }
        public virtual Category Category { get; set; }
        public int Month { get; set; }
        public int Year { get; set; }
        public BillStatus BillStatu { get; set; } = BillStatus.Pending;

        public DateTime DeadLine { get; set; }
    }
}
