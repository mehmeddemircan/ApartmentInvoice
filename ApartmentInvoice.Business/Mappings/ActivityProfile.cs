using ApartmentInvoice.Entity.Concrete;
using ApartmentInvoice.Entity.DTOs.ActivityDtos;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Business.Mappings
{
    public class ActivityProfile : Profile
    {

        public ActivityProfile()
        {
            CreateMap<ActivityAddDto, Activity>();
            CreateMap<Activity, ActivityAddDto>();

            CreateMap<ActivityUpdateDto, Activity>();
            CreateMap<Activity, ActivityUpdateDto>();

            CreateMap<ActivitiesDto, Activity>();
            CreateMap<Activity, ActivitiesDto>();

            CreateMap<ActivityDetailDto, Activity>();
            CreateMap<Activity, ActivityDetailDto>();

            CreateMap<ActivityImageDto, Activity>();
            CreateMap< Activity, ActivityImageDto > ();
        }
    }
}
