using ApartmentInvoice.Core.Entities.Abstract;

namespace ApartmentInvoice.Entity.DTOs.BlockDtos
{
    public class BlockUpdateDto : IDto
    {
        public int Id { get; set; }

        public string Name { get; set; }
    }
}
