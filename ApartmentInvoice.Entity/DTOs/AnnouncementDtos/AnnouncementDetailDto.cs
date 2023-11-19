using ApartmentInvoice.Core.Entities.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Entity.DTOs.AnnouncementDtos
{
    public class AnnouncementDetailDto : IDto
    {

        public int Id { get; set; }
        public int UserId { get; set; }
        public string FirstName { get; set; }

        public string LastName { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public DateTime DatePosted { get; set; } 


    }
}
