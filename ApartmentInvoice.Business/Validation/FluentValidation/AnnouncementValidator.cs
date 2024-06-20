using ApartmentInvoice.Entity.DTOs.AnnouncementDtos;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Business.Validation.FluentValidation
{
    public class AnnouncementValidator : AbstractValidator<AnnouncementAddDto>
    {

        public AnnouncementValidator()
        {
            RuleFor(x => x.Content).Empty().WithMessage("Duyuru içeriği boş bırakılamaz ! ");

        }
    }
}
