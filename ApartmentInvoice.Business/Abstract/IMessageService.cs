using ApartmentInvoice.Core.Entities.Concrete.Auth;
using ApartmentInvoice.Core.Utilities.Results;
using ApartmentInvoice.Entity.Concrete;
using ApartmentInvoice.Entity.DTOs.CategoryDtos;
using ApartmentInvoice.Entity.DTOs.MessageDtos;
using ApartmentInvoice.Entity.DTOs.UsersDtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Business.Abstract
{
    public interface IMessageService
    {

        Task<IResult> AddAsync(MessageAddDto entity);

        Task<IDataResult<IEnumerable<MessagesDto>>> GetListAsyncPagination(int pageNumber, int pageSize, Expression<Func<Message, bool>> filter = null);
        Task<IDataResult<IEnumerable<MessagesDto>>> GetListAsync(Expression<Func<Message, bool>> filter = null);
        Task<IDataResult<MessagesDto>> GetAsync(Expression<Func<Message, bool>> filter);

        Task<IDataResult<MessageDetailDto>> GetByIdAsync(int id);

        Task<IDataResult<MessageUpdateDto>> UpdateAsync(MessageUpdateDto messageUpdateDto);

        Task<IDataResult<bool>> DeleteAsync(int id);
    }
}
