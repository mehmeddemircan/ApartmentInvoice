using ApartmentInvoice.Core.Utilities.Results;
using ApartmentInvoice.Entity.Concrete;
using ApartmentInvoice.Entity.DTOs.CommentDtos;
using ApartmentInvoice.Entity.DTOs.PostCommentDtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Business.Abstract
{
    public interface IPostCommentService
    {
        Task<IResult> AddAsync(PostCommentAddDto entity);


        Task<IDataResult<IEnumerable<PostCommentsDto>>> GetListAsync(Expression<Func<PostComment, bool>> filter = null);
        Task<IDataResult<PostCommentsDto>> GetAsync(Expression<Func<PostComment, bool>> filter);

        Task<IDataResult<PostCommentsDto>> GetByIdAsync(int id);

        Task<IDataResult<PostCommentUpdateDto>> UpdateAsync(PostCommentUpdateDto CommentUpdateDto);

        Task<IDataResult<bool>> DeleteAsync(int id);
    }
}
