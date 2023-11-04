using ApartmentInvoice.Entity.DTOs.CategoryDtos;
using ApartmentInvoice.Entity.DTOs.MessageDtos;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Business.Validation.FluentValidation
{
    public class MessageValidator : AbstractValidator<MessageAddDto>
    {
        public MessageValidator()
        {
            RuleFor(x => x.Subject).MinimumLength(1).WithMessage("Geçersiz uzunlukta bir Konu girdiniz tekrar deneyiniz");
        }
    }
}
