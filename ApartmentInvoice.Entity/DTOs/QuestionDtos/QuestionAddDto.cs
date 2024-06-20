using ApartmentInvoice.Core.Entities.Abstract;
using ApartmentInvoice.Entity.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Entity.DTOs.QuestionDtos
{
    public class QuestionAddDto : IDto
    {

        public int SurveyId { get; set; }
        public string Content { get; set; }

     


    }
}
