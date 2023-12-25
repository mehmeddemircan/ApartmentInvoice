using ApartmentInvoice.Core.Entities.Concrete.Auth;
using ApartmentInvoice.Core.Utilities.Results;
using ApartmentInvoice.Entity.Concrete;
using ApartmentInvoice.Entity.DTOs.PostDtos;
using ApartmentInvoice.Entity.DTOs.UsersDtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Business.Abstract
{
    public interface IUserService
    {
        List<OperationClaim> GetClaims(User user);
        void Add(User user);
        User GetByMail(string email);

        Task<IDataResult<IEnumerable<UserDetailDto>>> GetListAsync(Expression<Func<User, bool>> filter = null);

        Task<IDataResult<IEnumerable<UsersDto>>> GetListAsyncPagination(int pageNumber, int pageSize, Expression<Func<User, bool>> filter = null);
        Task<IDataResult<UsersDto>> GetAsync(Expression<Func<User, bool>> filter);

        Task<IDataResult<UsersDto>> GetByIdAsync(int id);

        Task<IDataResult<UserUpdateDto>> UpdateAsync(UserUpdateDto userUpdateDto);

        Task<IDataResult<bool>> DeleteAsync(int id);
    }
}
