using ApartmentInvoice.Entity.DTOs.FlatDtos;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Business.Validation.FluentValidation
{
    public class FlatValidator : AbstractValidator<FlatAddDto>
    {

        public FlatValidator()
        {
            RuleFor(x => x.FlatNo).Empty().WithMessage("Daire No boş bırakılamaz ! ");

        }
    }
}
