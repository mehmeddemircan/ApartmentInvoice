using ApartmentInvoice.Core.Entities.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Entity.DTOs.BlockDtos
{
    public class BlockAddDto : IDto
    {
        public string Name { get; set; }
    }
}
