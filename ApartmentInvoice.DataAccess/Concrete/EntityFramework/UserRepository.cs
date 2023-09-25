using ApartmentInvoice.Core.DataAccess.EntityFramework;
using ApartmentInvoice.Core.Entities.Concrete.Auth;
using ApartmentInvoice.DataAccess.Abstract;
using ApartmentInvoice.DataAccess.Concrete.Contexts;

namespace ApartmentInvoice.DataAccess.Concrete.EntityFramework
{
    public class UserRepository : EfBaseRepository<User, ApplicationDbContext>, IUserRepository
    {
        public List<OperationClaim> GetClaims(User user)
        {
            using (var context = new ApplicationDbContext())
            {
                var result = from operationClaim in context.OperationClaims
                             join userOperationClaim in context.UserOperationClaims
                                 on operationClaim.Id equals userOperationClaim.OperationClaimId
                             where userOperationClaim.UserId == user.Id
                             select new OperationClaim { Id = operationClaim.Id, Name = operationClaim.Name };
                return result.ToList();

            }
        }
    }
}
