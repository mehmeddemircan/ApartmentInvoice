using ApartmentInvoice.Entity.Concrete;
using ApartmentInvoice.Entity.DTOs.BillDtos;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Business.Mappings
{
    public class BillProfile : Profile
    {

        public BillProfile()
        {
            CreateMap<BillAddDto, Bill>();
            CreateMap<Bill, BillAddDto>();

            CreateMap<BillUpdateDto, Bill>();
            CreateMap<Bill, BillUpdateDto>();

            CreateMap<BillsDto, Bill>();
            CreateMap<Bill, BillsDto>();

            CreateMap<BillDetailDto, Bill>();
            CreateMap<Bill, BillDetailDto>();
        }
    }
}
