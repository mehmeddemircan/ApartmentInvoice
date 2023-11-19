using ApartmentInvoice.Entity.Concrete;
using ApartmentInvoice.Entity.DTOs.SurveyDtos;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Business.Mappings
{
    public class SurveyProfile : Profile
    {

        public SurveyProfile()
        {
            CreateMap<SurveyAddDto, Survey>();
            CreateMap<Survey, SurveyAddDto>();

            CreateMap<SurveyUpdateDto, Survey>();
            CreateMap<Survey, SurveyUpdateDto>();

            CreateMap<SurveysDto, Survey>();
            CreateMap<Survey, SurveysDto>();
                // .ForMember(dest => dest.FirstName, opt => opt.MapFrom(src => src.User.FirstName))
                //.ForMember(dest => dest.LastName, opt => opt.MapFrom(src => src.User.LastName));

            CreateMap<SurveyDetailDto, Survey>();
            CreateMap<Survey, SurveyDetailDto>();
                //.ForMember(dest => dest.FirstName, opt => opt.MapFrom(src => src.User.FirstName))
                //.ForMember(dest => dest.LastName, opt => opt.MapFrom(src => src.User.LastName));

        }
    }
}