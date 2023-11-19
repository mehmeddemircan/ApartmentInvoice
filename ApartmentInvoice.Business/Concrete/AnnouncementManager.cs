using ApartmentInvoice.Business.Abstract;
using ApartmentInvoice.Business.Constants;
using ApartmentInvoice.Core.Utilities.Results;
using ApartmentInvoice.DataAccess.Abstract;
using ApartmentInvoice.DataAccess.Concrete.EntityFramework;
using ApartmentInvoice.Entity.Concrete;
using ApartmentInvoice.Entity.DTOs.AnnouncementDtos;
using ApartmentInvoice.Entity.DTOs.PostDtos;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Business.Concrete
{
    public class AnnouncementManager : IAnnouncementService
    {
        IAnnouncementRepository _announcementRepository;
        IUserRepository _userRepository;
        IMapper _mapper; 
        public AnnouncementManager(IAnnouncementRepository announcementRepository , IMapper mapper , IUserRepository userRepository )
        {
            _announcementRepository = announcementRepository;
            _mapper = mapper;
            _userRepository = userRepository;   
        }
        public async Task<IResult> AddAsync(AnnouncementAddDto entity)
        {
            var newAnnouncement = _mapper.Map<Announcement>(entity);

            await _announcementRepository.AddAsync(newAnnouncement);


            return new SuccessResult(Messages.Added);
        }

        public async Task<IDataResult<bool>> DeleteAsync(int id)
        {
            var isDelete = await _announcementRepository.DeleteAsync(id);
            return new SuccessDataResult<bool>(isDelete, Messages.Deleted);
        }

        public async Task<IDataResult<AnnouncementDetailDto>> GetAsync(Expression<Func<Announcement, bool>> filter)
        {
            var announcement = await _announcementRepository.GetAsync(filter);
            if (announcement != null)
            {
                var announcementDetailDto = await AssignAnnouncementDetails(announcement, announcement.UserId);
                return new SuccessDataResult<AnnouncementDetailDto>(announcementDetailDto, Messages.Listed);

            }
            return new ErrorDataResult<AnnouncementDetailDto>(null, Messages.NotListed);
        }

        public async Task<IDataResult<AnnouncementDetailDto>> GetByIdAsync(int id)
        {
            var announcement = await _announcementRepository.GetAsync(x => x.Id == id);
            if (announcement != null)
            {
                var announcementDetailDto = await AssignAnnouncementDetails(announcement, announcement.UserId);
                return new SuccessDataResult<AnnouncementDetailDto>(announcementDetailDto, Messages.Listed);

            }
            return new ErrorDataResult<AnnouncementDetailDto>(null, Messages.NotListed);
        }

        public async Task<IDataResult<IEnumerable<AnnouncementsDto>>> GetListAsync(Expression<Func<Announcement, bool>> filter = null)
        {
            List<AnnouncementsDto> announcements = new List<AnnouncementsDto>();

            if (filter == null)
            {
                // Exception 
                //throw new UnauthorizedAccessException("UnAuthorized"); 
                var response = await _announcementRepository.GetListAsync();
                var responseDetailDto = _mapper.Map<IEnumerable<AnnouncementsDto>>(response);


                foreach (var announcement in response)
                {
                    var announcementDto = await AssignAnnouncements(announcement, announcement.UserId);
                    announcements.Add(announcementDto);
                }
                return new SuccessDataResult<IEnumerable<AnnouncementsDto>>(announcements, Messages.Listed);
            }
            else
            {
                // Exception 
                //throw new UnauthorizedAccessException("UnAuthorized"); 
                var response = await _announcementRepository.GetListAsync(filter);
                var responseDetailDto = _mapper.Map<IEnumerable<AnnouncementsDto>>(response);


                foreach (var announcement in response)
                {
                    var announcementDto = await AssignAnnouncements(announcement, announcement.UserId);
                    announcements.Add(announcementDto);
                }
                return new SuccessDataResult<IEnumerable<AnnouncementsDto>>(announcements, Messages.Listed);
            }
        }

        public async Task<IDataResult<AnnouncementUpdateDto>> UpdateAsync(AnnouncementUpdateDto announcementUpdateDto)
        {
            var getAnnouncement = await _announcementRepository.GetAsync(x => x.Id == announcementUpdateDto.Id);

            var announcement = _mapper.Map<Announcement>(announcementUpdateDto);


            announcement.UpdatedDate = DateTime.Now;
            announcement.UpdatedBy = 1;


            var announcementUpdate = await _announcementRepository.UpdateAsync(announcement);
            var resultUpdateDto = _mapper.Map<AnnouncementUpdateDto>(announcementUpdate);

            return new SuccessDataResult<AnnouncementUpdateDto>(resultUpdateDto, Messages.Updated);
        }

        private async Task<AnnouncementsDto> AssignAnnouncements(Announcement announcement, int userId)
        {
            var user = await _userRepository.GetAsync(x => x.Id == userId);

            if (user == null)
            {
                return null;
            }
            announcement.User = user;

            var announcementsDto = _mapper.Map<AnnouncementsDto>(announcement);
            return announcementsDto;
        }

        private async Task<AnnouncementDetailDto> AssignAnnouncementDetails(Announcement announcement, int userId)
        {
            var user = await _userRepository.GetAsync(x => x.Id == userId);

            if (user == null)
            {
                return null;
            }
            announcement.User = user;

            var announcementDetailDto = _mapper.Map<AnnouncementDetailDto>(announcement);
            return announcementDetailDto;
        }
    }
}
