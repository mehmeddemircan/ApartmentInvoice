using ApartmentInvoice.Core.Entities.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Core.Entities.Concrete
{
    public class AuditableEntity : BaseEntity, ICreatedEntity, IUpdatedEntity
    {


        public int? CreatedBy { get; set; }

        public DateTime CreatedDate { get; set; } =  DateTime.Now ; 

        public int? UpdatedBy { get; set; }

        public DateTime UpdatedDate { get; set; }
    }
}
