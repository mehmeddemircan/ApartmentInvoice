using ApartmentInvoice.Core.Entities.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Entity.DTOs.CategoryDtos
{
    public class CategoryUpdateDto : IDto
    {

        public int Id { get; set; }

        public string CategoryName { get; set; }
    }
}
