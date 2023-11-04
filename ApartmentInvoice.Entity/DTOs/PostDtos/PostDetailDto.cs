using ApartmentInvoice.Core.Entities.Abstract;

namespace ApartmentInvoice.Entity.DTOs.PostDtos
{
    public class PostDetailDto : IDto
    {
        public int Id { get; set; }

        public int UserId { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Content { get; set; }
    }
}
