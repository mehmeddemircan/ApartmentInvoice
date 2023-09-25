using ApartmentInvoice.Entity.DTOs.CategoryDtos;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Business.Validation.FluentValidation
{
    public class CategoryValidator : AbstractValidator<CategoryAddDto>
    {

        public CategoryValidator()
        {
            RuleFor(x => x.CategoryName).MinimumLength(1).WithMessage("Geçersiz uzunlukta bir Kategori ismi girdiniz tekrar deneyiniz");
        }
    }
}
