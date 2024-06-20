using ApartmentInvoice.Core.Utilities.Results;
using ApartmentInvoice.Entity.Concrete;
using ApartmentInvoice.Entity.DTOs.ApartmentDtos;
using ApartmentInvoice.Entity.DTOs.BlockDtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Business.Abstract
{
    public interface IApartmentService 
    {

        Task<IResult> AddAsync(ApartmentAddDto entity);


        Task<IDataResult<IEnumerable<ApartmentsDto>>> GetListAsync(Expression<Func<Apartment, bool>> filter = null);
        Task<IDataResult<ApartmentDetailDto>> GetAsync(Expression<Func<Apartment, bool>> filter);

        Task<IDataResult<ApartmentDetailDto>> GetByIdAsync(int id);

        Task<IDataResult<ApartmentUpdateDto>> UpdateAsync(ApartmentUpdateDto blockUpdateDto);

        Task<IDataResult<bool>> DeleteAsync(int id);

    }
}
