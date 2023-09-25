using ApartmentInvoice.Core.Entities.Abstract;
using ApartmentInvoice.Core.Entities.Concrete.Auth;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Entity.DTOs.FlatDtos
{
    public class FlatAddDto : IDto
    {
        public int FlatNo { get; set; }
        public bool IsEmpty { get; set; } = true;
        public string NumberOfRooms { get; set; }
        public int Floor { get; set; }
        public int BlockId { get; set; }
    }
}
