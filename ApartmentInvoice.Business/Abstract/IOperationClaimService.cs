using ApartmentInvoice.Core.Entities.Concrete.Auth;
using ApartmentInvoice.Core.Utilities.Results;
using ApartmentInvoice.Entity.Concrete;
using ApartmentInvoice.Entity.DTOs.OperationClaimDtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Business.Abstract
{
    public interface IOperationClaimService
    {
        Task<IResult> AddAsync(OperationClaimAddDto entity);


        Task<IDataResult<IEnumerable<OperationClaimsDto>>> GetListAsync(Expression<Func<OperationClaim, bool>> filter = null);
        Task<IDataResult<OperationClaimDetailDto>> GetAsync(Expression<Func<OperationClaim, bool>> filter);

        Task<IDataResult<OperationClaimDetailDto>> GetByIdAsync(int id);

        Task<IDataResult<OperationClaimUpdateDto>> UpdateAsync(OperationClaimUpdateDto operationClaimUpdateDto);

        Task<IDataResult<bool>> DeleteAsync(int id);
    }
}
