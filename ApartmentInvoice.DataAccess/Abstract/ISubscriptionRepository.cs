using ApartmentInvoice.Core.DataAccess;
using ApartmentInvoice.Entity.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.DataAccess.Abstract
{
    public interface ISubscriptionRepository : IBaseRepository<Subscription>
    {
    }
}
