using ApartmentInvoice.Core.Entities.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Entity.DTOs.FlatDtos
{
    public class AddUserToFlatDto : IDto
    {

        public int Id { get; set; }

        public int UserId { get; set; }
    }
}
