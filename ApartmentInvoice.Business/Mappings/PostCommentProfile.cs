using ApartmentInvoice.Entity.Concrete;

using ApartmentInvoice.Entity.DTOs.PostCommentDtos;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Business.Mappings
{
    public class PostCommentProfile : Profile
    {

        public PostCommentProfile()
        {
            CreateMap<PostCommentAddDto, PostComment>();
            CreateMap<ActivityComment, PostCommentAddDto>();

            CreateMap<PostCommentUpdateDto, PostComment>();
            CreateMap<PostComment, PostCommentUpdateDto>();

            CreateMap<PostCommentsDto, PostComment>();
            CreateMap<PostComment, PostCommentsDto>()
                 .ForMember(dest => dest.FirstName, opt => opt.MapFrom(src => src.User.FirstName))
                .ForMember(dest => dest.LastName, opt => opt.MapFrom(src => src.User.LastName));
        }
    }
}
