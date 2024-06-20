using ApartmentInvoice.Core.Entities.Abstract;
using ApartmentInvoice.Core.Entities.Concrete.Auth;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Entity.DTOs.AnnouncementDtos
{
    public class AnnouncementAddDto : IDto
    {

        public int UserId { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public DateTime DatePosted { get; set; } = DateTime.Now;



    }
}
