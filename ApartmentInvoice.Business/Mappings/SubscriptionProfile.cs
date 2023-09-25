using ApartmentInvoice.Entity.Concrete;
using ApartmentInvoice.Entity.DTOs.SubscriptionDtos;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Business.Mappings
{
    public class SubscriptionProfile : Profile
    {
        public SubscriptionProfile()
        {
            CreateMap<SubscriptionAddDto, Subscription>();
            CreateMap<Subscription, SubscriptionAddDto>();

            CreateMap<SubscriptionUpdateDto, Subscription>();
            CreateMap<Subscription, SubscriptionUpdateDto>();

            CreateMap<SubscriptionsDto, Subscription>();
            CreateMap<Subscription, SubscriptionsDto>();

            CreateMap<SubscriptionDetailDto, Subscription>();
            CreateMap<Subscription, SubscriptionDetailDto>();
        }
    }
}
