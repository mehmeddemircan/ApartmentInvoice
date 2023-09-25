using ApartmentInvoice.Core.Entities.Abstract;
using ApartmentInvoice.Core.Entities.Concrete.Auth;
using ApartmentInvoice.Entity.DTOs.UsersDtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Entity.DTOs.MessageDtos
{
    public class MessageDetailDto : IDto
    {
        public int Id { get; set; }
        public int UserId { get; set; }

        public virtual UserDetailDto User { get; set; }
        public string Subject { get; set; }
        public string MessageContent { get; set; }
    }
}
