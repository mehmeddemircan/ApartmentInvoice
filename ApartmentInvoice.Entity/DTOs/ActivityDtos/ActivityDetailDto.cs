using ApartmentInvoice.Core.Entities.Abstract;
using ApartmentInvoice.Entity.DTOs.CommentDtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Entity.DTOs.ActivityDtos
{
    public class ActivityDetailDto : IDto
    {

        public int Id { get; set; }
        public string Title { get; set; }

        public string Description { get; set; }

        public DateTime Date { get; set; }

        public int Capacity { get; set; }

        public bool IsActive { get; set; }

        public List<string> Images { get; set; }
        public ICollection<ActivityCommentsDto> Comments { get; set; }

    }
}
