using ApartmentInvoice.Core.Entities.Abstract;
using ApartmentInvoice.Core.Entities.Concrete.Auth;

namespace ApartmentInvoice.Entity.DTOs.OperationClaimDtos
{
    public class OperationClaimsDto : IDto
    {

        public int Id { get; set; }
        public string Name { get; set; }

       
    }
}
