using ApartmentInvoice.Core.Utilities.Results;
using ApartmentInvoice.Entity.Concrete;
using ApartmentInvoice.Entity.DTOs.CommentDtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Business.Abstract
{
    public interface IActivityCommentService 
    {

        Task<IResult> AddAsync(ActivityCommentAddDto entity);


        Task<IDataResult<IEnumerable<ActivityCommentsDto>>> GetListAsync(Expression<Func<ActivityComment, bool>> filter = null);
        Task<IDataResult<ActivityCommentsDto>> GetAsync(Expression<Func<ActivityComment, bool>> filter);

        Task<IDataResult<ActivityCommentsDto>> GetByIdAsync(int id);

        Task<IDataResult<ActivityCommentUpdateDto>> UpdateAsync(ActivityCommentUpdateDto CommentUpdateDto);

        Task<IDataResult<bool>> DeleteAsync(int id);
    }
}
