using ApartmentInvoice.Core.Entities.Concrete;
using ApartmentInvoice.Core.Entities.Concrete.Auth;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Entity.Concrete
{
    public class Flat : AuditableEntity
    {
        //Todo : Apartmanda eklersek çoklu apartman sistemi yapabiliriz 

        public bool IsEmpty { get; set; } = true;
        public string NumberOfRooms { get; set; }
        public int Floor { get; set; }
        public int FlatNo { get; set; }
        public int? UserId { get; set; }
        public virtual  User User { get; set; }
        public int BlockId { get; set; }
        public virtual Block Block { get; set; }
        public virtual ICollection<Bill>? Bills { get; set; }
        public virtual ICollection<FlatSubscription>? FlatSubscriptions { get; set; }
    }
    
}
