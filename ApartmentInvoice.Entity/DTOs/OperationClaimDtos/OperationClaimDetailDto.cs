using ApartmentInvoice.Core.Entities.Abstract;
using ApartmentInvoice.Core.Entities.Concrete.Auth;

namespace ApartmentInvoice.Entity.DTOs.OperationClaimDtos
{
    public class OperationClaimDetailDto : IDto
    {
        public int Id { get; set; }

        public string Name { get; set; }
        public virtual ICollection<UserOperationClaim>? UserRoles { get; set; }
    }
}
