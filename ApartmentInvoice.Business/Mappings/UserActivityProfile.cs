using ApartmentInvoice.Entity.Concrete;
using ApartmentInvoice.Entity.DTOs.UserActivityDtos;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Business.Mappings
{
    public class UserActivityProfile : Profile
    {

        public UserActivityProfile()
        {
            CreateMap<UserActivityAddDto, UserActivity>();
            CreateMap<UserActivity, UserActivityAddDto>();

            CreateMap<UserActivitiesDto, UserActivity>();
            CreateMap<UserActivity, UserActivitiesDto>();
        }
    }
}
