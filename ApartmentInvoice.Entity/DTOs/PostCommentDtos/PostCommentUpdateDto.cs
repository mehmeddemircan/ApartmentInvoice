﻿using ApartmentInvoice.Core.Entities.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Entity.DTOs.PostCommentDtos
{
    public class PostCommentUpdateDto : IDto
    {
        public int Id { get; set; }

        public int UserId { get; set; }

        public int PostId { get; set; }

        public string Content { get; set; }
    }
}
