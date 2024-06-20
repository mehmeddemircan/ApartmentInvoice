using ApartmentInvoice.Entity.Concrete;
using ApartmentInvoice.Entity.DTOs.OrderDtos;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Business.Mappings
{
    public class OrderProfile : Profile
    {

public OrderProfile() {

        
                CreateMap<OrderAddDto, Order>();
                CreateMap<Order, OrderAddDto>();

                CreateMap<OrderUpdateDto, Order>();
                CreateMap<Order, OrderUpdateDto>();

                CreateMap<OrdersDto, Order>();
                CreateMap<Order, OrdersDto>()
                                  .ForMember(dest => dest.UserFirstName, opt => opt.MapFrom(src => src.User.FirstName))
                .ForMember(dest => dest.UserLastName, opt => opt.MapFrom(src => src.User.LastName));

            CreateMap<OrderDto, Order>();
                CreateMap<Order, OrderDto>()
                  .ForMember(dest => dest.UserFirstName, opt => opt.MapFrom(src => src.User.FirstName))
                .ForMember(dest => dest.UserLastName, opt => opt.MapFrom(src => src.User.LastName));
        
        }
    }
}
