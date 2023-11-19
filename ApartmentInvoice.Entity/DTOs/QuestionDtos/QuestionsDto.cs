using ApartmentInvoice.Core.Entities.Abstract;
using ApartmentInvoice.Entity.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Entity.DTOs.QuestionDtos
{
    public class QuestionsDto : IDto
    {
        public int Id { get; set; }
        public int SurveyId { get; set; }

        public string  SurveyTitle { get; set; }
        public string Content { get; set; }

        public ICollection<Vote>? Votes { get; set; } // Seçeneğe verilen oylar
    }
}
