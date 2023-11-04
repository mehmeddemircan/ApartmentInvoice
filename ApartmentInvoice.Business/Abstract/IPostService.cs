using ApartmentInvoice.Core.Utilities.Results;
using ApartmentInvoice.Entity.Concrete;
using ApartmentInvoice.Entity.DTOs.PostDtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Business.Abstract
{
    public interface IPostService
    {
        Task<IResult> AddAsync(PostAddDto entity);


        Task<IDataResult<IEnumerable<PostsDto>>> GetListAsync(Expression<Func<Post, bool>> filter = null);
        Task<IDataResult<PostDetailDto>> GetAsync(Expression<Func<Post, bool>> filter);

        Task<IDataResult<PostDetailDto>> GetByIdAsync(int id);

        Task<IDataResult<PostUpdateDto>> UpdateAsync(PostUpdateDto postUpdateDto);

        Task<IDataResult<bool>> DeleteAsync(int id);
    }
}
