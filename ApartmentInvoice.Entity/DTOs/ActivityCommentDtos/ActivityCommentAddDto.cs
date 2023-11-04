using ApartmentInvoice.Core.Entities.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Entity.DTOs.CommentDtos
{
    public class ActivityCommentAddDto : IDto
    {
        public int UserId { get; set; }

        public int ActivityId { get; set; }

        public string Content { get; set; }
    }
}
