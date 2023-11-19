using ApartmentInvoice.Core.Utilities.Results;
using ApartmentInvoice.Entity.Concrete;
using ApartmentInvoice.Entity.DTOs.BlockDtos;
using ApartmentInvoice.Entity.DTOs.VoteDtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Business.Abstract
{
    public interface IVoteService 
    {
        Task<IResult> AddAsync(VoteAddDto entity);
        Task<IDataResult<IEnumerable<VotesDto>>> GetListAsync(Expression<Func<Vote, bool>> filter = null);
        Task<IDataResult<VoteUpdateDto>> UpdateAsync(VoteUpdateDto VoteUpdateDto);

        Task<IDataResult<bool>> DeleteAsync(int id);
    }
}
