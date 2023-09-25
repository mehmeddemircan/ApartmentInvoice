using ApartmentInvoice.Core.Entities.Abstract;
using ApartmentInvoice.Entity.Concrete;
using ApartmentInvoice.Entity.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Entity.DTOs.BillDtos
{
    public class BillAddDto : IDto
    {
        public int FlatId { get; set; }
        public float Amount { get; set; }
        public int CategoryId { get; set; }
        public int Month { get; set; }
        public int Year { get; set; }
        public BillStatus BillStatu { get; set; } = BillStatus.Pending;

        public DateTime DeadLine { get; set; }
    }
}
