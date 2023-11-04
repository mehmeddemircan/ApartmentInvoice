using ApartmentInvoice.Core.DataAccess.EntityFramework;
using ApartmentInvoice.DataAccess.Abstract;
using ApartmentInvoice.DataAccess.Concrete.Contexts;
using ApartmentInvoice.Entity.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.DataAccess.Concrete.EntityFramework
{
    public  class PostCommentRepository : EfBaseRepository<PostComment,ApplicationDbContext> ,IPostCommentRepository
    {
    }
}
