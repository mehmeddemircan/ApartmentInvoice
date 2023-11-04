using ApartmentInvoice.Entity.DTOs.ActivityDtos;
using ApartmentInvoice.Entity.DTOs.CategoryDtos;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Business.Validation.FluentValidation
{
    public class ActivityValidator : AbstractValidator<ActivityAddDto>
    {
        public ActivityValidator()
        {
            RuleFor(x => x.Title).MinimumLength(1).WithMessage("Geçersiz uzunlukta bir Aktivite ismi girdiniz tekrar deneyiniz");
            RuleFor(x => x.Description).MinimumLength(1).WithMessage("Geçersiz uzunlukta bir Aktivite açıklaması girdiniz tekrar deneyiniz");
        }
    }
}
