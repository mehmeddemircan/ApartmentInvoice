using ApartmentInvoice.Core.Entities.Abstract;
using ApartmentInvoice.Core.Entities.Concrete;
using ApartmentInvoice.Entity.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Entity.DTOs.SurveyDtos
{
    public class SurveyDetailDto : IDto
    {
        public int Id { get; set; }
        public string Title { get; set; }

        public ICollection<Question>? Questions { get; set; }
    }
}
