using ApartmentInvoice.Core.Entities.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Entity.DTOs.ApartmentDtos
{
    public class ApartmentsDto : IDto
    {
        public int Id { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }

        public int CityId { get; set; }

        public string Images { get; set; }
    }
}
