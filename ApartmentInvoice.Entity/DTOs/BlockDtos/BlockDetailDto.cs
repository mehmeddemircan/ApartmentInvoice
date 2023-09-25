using ApartmentInvoice.Core.Entities.Abstract;
using ApartmentInvoice.Entity.Concrete;
using ApartmentInvoice.Entity.DTOs.FlatDtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Entity.DTOs.BlockDtos
{
    public class BlockDetailDto : IDto
    {

        public int Id { get; set; }
        public string Name { get; set; }

        public virtual ICollection<FlatsDto> Flats { get; set; }
    }
}
