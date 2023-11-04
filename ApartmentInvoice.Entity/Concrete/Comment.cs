using ApartmentInvoice.Core.Entities.Concrete;
using ApartmentInvoice.Core.Entities.Concrete.Auth;

namespace ApartmentInvoice.Entity.Concrete
{
    public class Comment : AuditableEntity
    {

        public int UserId { get; set; }
        public int? ActivityId { get; set; }
        public string Content { get; set; }

        public virtual User User { get; set; }


    }
}
