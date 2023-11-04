using ApartmentInvoice.Core.Entities.Abstract;

namespace ApartmentInvoice.Entity.DTOs.PostDtos
{
    public class PostUpdateDto : IDto
    {
        public int Id { get; set; }

        public int UserId { get; set; }

        public string Content { get; set; }
    }
}
