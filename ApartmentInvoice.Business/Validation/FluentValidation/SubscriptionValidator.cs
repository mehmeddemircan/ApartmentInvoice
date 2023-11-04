using ApartmentInvoice.Entity.DTOs.SubscriptionDtos;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Business.Validation.FluentValidation
{
    public class SubscriptionValidator : AbstractValidator<SubscriptionAddDto>
    {

        public SubscriptionValidator()
        {
            RuleFor(x => x.Amount).Empty().WithMessage("Miktar boş bırakılamaz ! ");

        }
    }
}
