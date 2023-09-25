using ApartmentInvoice.Core.DataAccess;
using ApartmentInvoice.Core.Entities.Concrete.Auth;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.DataAccess.Abstract
{
    public interface IOperationClaimRepository : IBaseRepository<OperationClaim>
    {
    }
}
