using ApartmentInvoice.Core.Entities.Abstract;
using ApartmentInvoice.Entity.Concrete;
using ApartmentInvoice.Entity.Enums;

namespace ApartmentInvoice.Entity.DTOs.BillDtos
{
    public class BillUpdateDto : IDto
    {
        public int Id { get; set; }
        public int FlatId { get; set; }
        public float Amount { get; set; }
        public int CategoryId { get; set; }
        public int Month { get; set; }
        public int Year { get; set; }
        public BillStatus BillStatu { get; set; } = BillStatus.Pending;

        public DateTime DeadLine { get; set; }
    }
}
