using ApartmentInvoice.Core.Entities.Abstract;

namespace ApartmentInvoice.Entity.DTOs.OperationClaimDtos
{
    public class OperationClaimUpdateDto : IDto
    {

        public int Id { get; set; }
        public string Name { get; set; }
    }
}
