using ApartmentInvoice.Core.Entities.Abstract;
using ApartmentInvoice.Entity.Concrete;

namespace ApartmentInvoice.Entity.DTOs.BlockDtos
{
    public class BlocksDto : IDto
    {
        public int Id { get; set; }

        public string Name { get; set; }

    }
}
