﻿using ApartmentInvoice.Core.Entities.Concrete.Auth;
using ApartmentInvoice.Core.Utilities.Results;
using ApartmentInvoice.Entity.DTOs.UserOperationClaimDtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Business.Abstract
{
    public interface IUserOperationClaimService
    {
        Task<IResult> AddAsync(UserOperationClaimAddDto entity);


        Task<IDataResult<IEnumerable<UserOperationClaimDetailDto>>> GetListAsync(Expression<Func<UserOperationClaim, bool>> filter = null);
        Task<IDataResult<UserOperationClaimDetailDto>> GetAsync(Expression<Func<UserOperationClaim, bool>> filter);

        Task<IDataResult<UserOperationClaimDetailDto>> GetByIdAsync(int id);

        Task<IDataResult<UserOperationClaimUpdateDto>> UpdateAsync(UserOperationClaimUpdateDto userOperationClaimUpdateDto);

        Task<IDataResult<bool>> DeleteAsync(int id);
    }
}
