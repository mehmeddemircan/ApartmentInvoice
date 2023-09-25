using ApartmentInvoice.Entity.Concrete;
using ApartmentInvoice.Entity.DTOs.FlatDtos;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Business.Mappings
{
    public class FlatProfile : Profile
    {

        public FlatProfile()
        {
               CreateMap<FlatAddDto, Flat>();
            CreateMap<Flat, FlatAddDto>();

            CreateMap<FlatUpdateDto, Flat>();
            CreateMap<Flat, FlatUpdateDto>();

            CreateMap<FlatsDto, Flat>();
            CreateMap<Flat, FlatsDto>();

            CreateMap<FlatDetailDto, Flat>();
            CreateMap<Flat, FlatDetailDto>();
        }
    }
}
