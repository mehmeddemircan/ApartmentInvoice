using ApartmentInvoice.Core.Utilities.Results;
using ApartmentInvoice.Entity.Concrete;
using ApartmentInvoice.Entity.DTOs.BlockDtos;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Business.Abstract
{
    public interface IBlockService
    {

        Task<IResult> AddAsync(BlockAddDto entity);


        Task<IDataResult<IEnumerable<BlocksDto>>> GetListAsync(Expression<Func<Block, bool>> filter = null);
        Task<IDataResult<BlockDetailDto>> GetAsync(Expression<Func<Block, bool>> filter);

        Task<IDataResult<BlockDetailDto>> GetByIdAsync(int id);

        Task<IDataResult<BlockUpdateDto>> UpdateAsync(BlockUpdateDto blockUpdateDto);

        Task<IDataResult<bool>> DeleteAsync(int id);
    }
}
