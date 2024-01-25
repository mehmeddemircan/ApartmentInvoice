using ApartmentInvoice.Core.Entities.Abstract;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Entity.DTOs.ActivityDtos
{   
    //Todo : Aktiviteye birden çok resim ekleme alanı olacak 
    public class ActivityAddDto : IDto
    {

        public string Title { get; set; }

        public string Description { get; set; }

        public DateTime Date { get; set; }

        public int Capacity { get; set; }

        public bool IsActive { get; set; } = true;

        public string Images { get; set; }


    }
}
