using ApartmentInvoice.Core.DataAccess;
using ApartmentInvoice.Core.Entities.Concrete.Auth;

namespace ApartmentInvoice.DataAccess.Abstract
{
    public interface IUserRepository : IBaseRepository<User>
    {
        List<OperationClaim> GetClaims(User user);
    }
}
