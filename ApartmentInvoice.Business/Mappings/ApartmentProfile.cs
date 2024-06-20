using ApartmentInvoice.Entity.Concrete;
using ApartmentInvoice.Entity.DTOs.ApartmentDtos;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Business.Mappings
{
    public class ApartmentProfile : Profile
    {

        public ApartmentProfile()
        {
            CreateMap<ApartmentAddDto, Apartment>();
            CreateMap<Apartment, ApartmentAddDto>();

            CreateMap<ApartmentUpdateDto, Apartment>();
            CreateMap<Apartment, ApartmentUpdateDto>();

            CreateMap<ApartmentsDto, Apartment>();
            CreateMap<Apartment, ApartmentsDto>();

            CreateMap<ApartmentDetailDto, Apartment>();
            CreateMap<Apartment, ApartmentDetailDto>();
        }
    }

}
