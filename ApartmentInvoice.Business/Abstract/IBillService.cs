using ApartmentInvoice.Core.Utilities.Results;
using ApartmentInvoice.Entity.Concrete;
using ApartmentInvoice.Entity.DTOs.BillDtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Business.Abstract
{
    public interface IBillService 
    {
        Task<IResult> AddAsync(BillAddDto entity);


        Task<IDataResult<IEnumerable<BillsDto>>> GetListAsync(Expression<Func<Bill, bool>> filter = null);
        Task<IDataResult<BillDetailDto>> GetAsync(Expression<Func<Bill, bool>> filter);

        Task<IDataResult<BillDetailDto>> GetByIdAsync(int id);

        Task<IDataResult<BillUpdateDto>> UpdateAsync(BillUpdateDto billUpdateDto);

        Task<IDataResult<bool>> DeleteAsync(int id);
    }
}
