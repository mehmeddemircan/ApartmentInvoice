using ApartmentInvoice.Core.Entities.Concrete.Auth;
using ApartmentInvoice.Entity.Concrete;
using ApartmentInvoice.Entity.DTOs.UsersDtos;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Business.Mappings
{
    public class UserProfile : Profile
    {

        public UserProfile()
        {
        

            CreateMap<UserUpdateDto, User>();
            CreateMap<User, UserUpdateDto>();

            CreateMap<UsersDto, User>();
            CreateMap<User, UsersDto>();

            CreateMap<UserDetailDto, User>();
            CreateMap<User, UserDetailDto>()
                  .ForMember(dest => dest.RoleId, opt => opt.MapFrom(src => src.OperationClaim.Id))
          
                .ForMember(dest => dest.RoleName, opt => opt.MapFrom(src => src.OperationClaim.Name));
        }
    }
}
