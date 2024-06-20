using ApartmentInvoice.Entity.Concrete;
using ApartmentInvoice.Entity.DTOs.AnnouncementDtos;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Business.Mappings
{
    public class AnnouncementProfile : Profile
    {

        public AnnouncementProfile()
        {
            CreateMap<AnnouncementAddDto, Announcement>();
            CreateMap<Announcement, AnnouncementAddDto>();

            CreateMap<AnnouncementUpdateDto, Announcement>();
            CreateMap<Announcement, AnnouncementUpdateDto>();

            CreateMap<AnnouncementsDto, Announcement>();
            CreateMap<Announcement, AnnouncementsDto>()
                 .ForMember(dest => dest.FirstName, opt => opt.MapFrom(src => src.User.FirstName))
                .ForMember(dest => dest.LastName, opt => opt.MapFrom(src => src.User.LastName));

            CreateMap<AnnouncementDetailDto, Announcement>();
            CreateMap<Announcement, AnnouncementDetailDto>()
                .ForMember(dest => dest.FirstName, opt => opt.MapFrom(src => src.User.FirstName))
                .ForMember(dest => dest.LastName, opt => opt.MapFrom(src => src.User.LastName));

        }
    }
}
