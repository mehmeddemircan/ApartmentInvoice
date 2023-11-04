using ApartmentInvoice.Core.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Entity.Concrete
{
    public class Activity : AuditableEntity
    {


        public string Title { get; set; }

        public string Description { get; set; }

        public DateTime Date { get; set; }

        public int Capacity { get; set; }

        public bool IsActive { get; set; }

        public ICollection<ActivityComment> Comments { get; set; }

        public ICollection<UserActivity>? UserActivities { get; set; }
    }
}
