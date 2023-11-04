using ApartmentInvoice.Entity.DTOs.BillDtos;
using ApartmentInvoice.Entity.DTOs.CategoryDtos;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Business.Validation.FluentValidation
{
    public class BillValidator : AbstractValidator<BillAddDto>
    {
        public BillValidator()
        {
            RuleFor(x => x.FlatId).Empty().WithMessage("Daire Numarası boş olamaz ! ");
        }
    }
}
