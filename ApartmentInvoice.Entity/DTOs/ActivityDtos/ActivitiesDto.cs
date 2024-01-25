using ApartmentInvoice.Core.Entities.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Entity.DTOs.ActivityDtos
{
    public class ActivitiesDto : IDto
    {

        public int Id { get; set; }
        public string Title { get; set; }

        public string Description { get; set; }

        public DateTime Date { get; set; }

        public int Capacity { get; set; }

        public bool IsActive { get; set; }

        public string Images { get; set; }
    }
}
