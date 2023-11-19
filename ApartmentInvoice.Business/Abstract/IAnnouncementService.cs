using ApartmentInvoice.Core.Utilities.Results;
using ApartmentInvoice.Entity.Concrete;
using ApartmentInvoice.Entity.DTOs.AnnouncementDtos;
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

        Task<IDataResult<bool>> DeleteAsync(int id);
    }
}
