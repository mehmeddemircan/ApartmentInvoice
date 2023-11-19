using ApartmentInvoice.Entity.Concrete;
using ApartmentInvoice.Entity.DTOs.QuestionDtos;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Business.Mappings
{
    public class QuestionProfile : Profile
    {

        public QuestionProfile()
        {
            CreateMap<QuestionAddDto, Question>();
            CreateMap<Question, QuestionAddDto>();

            CreateMap<QuestionUpdateDto, Question>();
            CreateMap<Question, QuestionUpdateDto>();

            CreateMap<QuestionsDto, Question>();
            CreateMap<Question, QuestionsDto>()
                 .ForMember(dest => dest.SurveyTitle, opt => opt.MapFrom(src => src.Survey.Title));
               

         
        }
    }
}
