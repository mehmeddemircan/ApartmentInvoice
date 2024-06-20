using ApartmentInvoice.Core.Entities.Concrete.Auth;
using ApartmentInvoice.Core.Utilities.Results;
using ApartmentInvoice.Entity.Concrete;
using ApartmentInvoice.Entity.DTOs.AnnouncementDtos;
using ApartmentInvoice.Entity.DTOs.UsersDtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Business.Abstract
{
    public interface IAnnouncementService
    {

        Task<IResult> AddAsync(AnnouncementAddDto entity);


        Task<IDataResult<IEnumerable<AnnouncementsDto>>> GetListAsync(Expression<Func<Announcement, bool>> filter = null);
        Task<IDataResult<AnnouncementDetailDto>> GetAsync(Expression<Func<Announcement, bool>> filter);

        Task<IDataResult<AnnouncementDetailDto>> GetByIdAsync(int id);

        Task<IDataResult<AnnouncementUpdateDto>> UpdateAsync(AnnouncementUpdateDto announcementUpdateDto);

        Task<IDataResult<IEnumerable<AnnouncementsDto>>> GetListAsyncPagination(int pageNumber, int pageSize, Expression<Func<Announcement, bool>> filter = null);

        Task<IDataResult<bool>> DeleteAsync(int id);
    }
}
