using ApartmentInvoice.Core.Entities.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Entity.DTOs.SurveyDtos
{
    public class SurveyAddDto : IDto
    {

        public string Title { get; set; }
    }
}
