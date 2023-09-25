using ApartmentInvoice.Core.DataAccess.EntityFramework;
using ApartmentInvoice.Core.Entities.Concrete.Auth;
using ApartmentInvoice.DataAccess.Abstract;
using ApartmentInvoice.DataAccess.Concrete.Contexts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.DataAccess.Concrete.EntityFramework
{
    public class OperationClaimRepository : EfBaseRepository<OperationClaim,ApplicationDbContext> , IOperationClaimRepository
    {
    }
}
