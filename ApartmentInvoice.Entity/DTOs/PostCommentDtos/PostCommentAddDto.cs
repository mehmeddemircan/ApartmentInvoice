using ApartmentInvoice.Core.Entities.Abstract;
using ApartmentInvoice.Core.Entities.Concrete.Auth;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Entity.DTOs.PostCommentDtos
{
    public class PostCommentAddDto : IDto
    {
        public int UserId { get; set; }
        public int PostId { get; set; }

        public string Content { get; set; }
    }
}
