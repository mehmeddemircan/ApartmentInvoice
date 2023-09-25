using ApartmentInvoice.Core.Entities.Abstract;

namespace ApartmentInvoice.Entity.DTOs.MessageDtos
{
    public class MessageUpdateDto : IDto
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string Subject { get; set; }
        public string MessageContent { get; set; }
    }
}
