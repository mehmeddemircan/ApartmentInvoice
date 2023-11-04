using ApartmentInvoice.Entity.Concrete;
using ApartmentInvoice.Entity.DTOs.PostDtos;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Business.Mappings
{
    public class PostProfile : Profile
    {

        public PostProfile()
        {
            CreateMap<PostAddDto, Post>();
            CreateMap<Post, PostAddDto>();

            CreateMap<PostUpdateDto, Post>();
            CreateMap<Post, PostUpdateDto>();

            CreateMap<PostsDto, Post>();
            CreateMap<Post, PostsDto>()
                 .ForMember(dest => dest.FirstName, opt => opt.MapFrom(src => src.User.FirstName))
                .ForMember(dest => dest.LastName, opt => opt.MapFrom(src => src.User.LastName));

            CreateMap<PostDetailDto, Post>();
            CreateMap<Post, PostDetailDto>()
                .ForMember(dest => dest.FirstName, opt => opt.MapFrom(src => src.User.FirstName))
                .ForMember(dest => dest.LastName, opt => opt.MapFrom(src => src.User.LastName));
               
        }
    }
}
