using ApartmentInvoice.Core.Entities.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Entity.DTOs.UserActivityDtos
{
    public class UserActivityAddDto : IDto
    {

        public int UserId { get; set; }
        public int ActivityId { get; set; }

    }
}
