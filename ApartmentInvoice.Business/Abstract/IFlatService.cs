using ApartmentInvoice.Core.Utilities.Results;
using ApartmentInvoice.Entity.Concrete;
using ApartmentInvoice.Entity.DTOs.FlatDtos;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Business.Abstract
{
    public interface IFlatService
    {

        Task<IResult> AddAsync(FlatAddDto entity);


        Task<IDataResult<IEnumerable<FlatsDto>>> GetListAsync(Expression<Func<Flat, bool>> filter = null);
        Task<IDataResult<FlatDetailDto>> GetAsync(Expression<Func<Flat, bool>> filter);

        Task<IDataResult<FlatDetailDto>> GetByIdAsync(int id);

        Task<IDataResult<FlatUpdateDto>> UpdateAsync(FlatUpdateDto flatUpdateDto);

        Task<IDataResult<bool>> DeleteAsync(int id);
    }
}
