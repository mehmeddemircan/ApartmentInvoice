using ApartmentInvoice.Core.Entities.Abstract;
using ApartmentInvoice.Entity.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Entity.DTOs.SurveyDtos
{
    public  class SurveyUpdateDto : IDto
    {

        public int Id { get; set; }
        public string Title { get; set; }

    }
}
