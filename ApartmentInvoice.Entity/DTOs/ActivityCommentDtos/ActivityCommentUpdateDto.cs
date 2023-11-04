using ApartmentInvoice.Core.Entities.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Entity.DTOs.CommentDtos
{
    public class ActivityCommentUpdateDto : IDto
    {
        public int Id { get; set; }

        public int UserId { get; set; }

        public int ActivityId { get; set; }

        public string Content { get; set; }
    }
}
