using ApartmentInvoice.Core.Entities.Abstract;
using ApartmentInvoice.Core.Entities.Concrete.Auth;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Entity.DTOs.MessageDtos
{
    public class MessageAddDto : IDto
    {

        public int UserId { get; set; }
        public string Subject { get; set; }
        public string MessageContent { get; set; }
    }
}
