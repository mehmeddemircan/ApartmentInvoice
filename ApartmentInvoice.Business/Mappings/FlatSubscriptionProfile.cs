using ApartmentInvoice.Entity.Concrete;
using ApartmentInvoice.Entity.DTOs.FlatSubscriptionDtos;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Business.Mappings
{
    public class FlatSubscriptionProfile : Profile
    {
        public FlatSubscriptionProfile()
        {
            CreateMap<FlatSubscriptionAddDto, FlatSubscription>();
            CreateMap<FlatSubscription, FlatSubscriptionAddDto>();

            CreateMap<FlatSubscriptionUpdateDto, FlatSubscription>();
            CreateMap<FlatSubscription, FlatSubscriptionUpdateDto>();

            CreateMap<FlatSubscriptionsDto, FlatSubscription>();
            CreateMap<FlatSubscription, FlatSubscriptionsDto>();

            CreateMap<FlatSubscriptionDetailDto, FlatSubscription>();
            CreateMap<FlatSubscription, FlatSubscriptionDetailDto>();
        
         }
    }
}
