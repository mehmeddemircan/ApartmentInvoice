using ApartmentInvoice.Core.Entities.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Entity.DTOs.ActivityDtos
{
    public class ActivityImageDto : IDto
    {

        public string PublicId { get; set; }

        public string Url { get; set; }
    }
}
