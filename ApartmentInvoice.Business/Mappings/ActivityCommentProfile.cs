using ApartmentInvoice.Entity.Concrete;
using ApartmentInvoice.Entity.DTOs.CommentDtos;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Business.Mappings
{
    public class ActivityCommentProfile : Profile
    {
        public ActivityCommentProfile() 
        {
            CreateMap<ActivityCommentAddDto, ActivityComment>();
            CreateMap<ActivityComment, ActivityCommentAddDto>();

            CreateMap<ActivityCommentUpdateDto, ActivityComment>();
            CreateMap<ActivityComment, ActivityCommentUpdateDto>();

            CreateMap<ActivityCommentsDto, ActivityComment>();
            CreateMap<ActivityComment, ActivityCommentsDto>()
                 .ForMember(dest => dest.FirstName, opt => opt.MapFrom(src => src.User.FirstName))
                .ForMember(dest => dest.LastName, opt => opt.MapFrom(src => src.User.LastName));

         
        }
    }
}
