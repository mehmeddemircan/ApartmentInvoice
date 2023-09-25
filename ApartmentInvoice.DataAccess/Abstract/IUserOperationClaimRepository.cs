using ApartmentInvoice.Core.DataAccess;
using ApartmentInvoice.Core.Entities.Concrete.Auth;
using ApartmentInvoice.DataAccess.Concrete.Contexts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.DataAccess.Abstract
{
    public interface IUserOperationClaimRepository : IBaseRepository<UserOperationClaim>
    {
    }
}
