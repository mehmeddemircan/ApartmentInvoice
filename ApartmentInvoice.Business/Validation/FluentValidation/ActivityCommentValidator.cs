using ApartmentInvoice.Entity.DTOs.CommentDtos;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Business.Validation.FluentValidation
{
    public class ActivityCommentValidator : AbstractValidator<ActivityCommentAddDto>
    {
        public ActivityCommentValidator()
        {
            RuleFor(x => x.Content).Empty().WithMessage("Yorum boş gönderilemez lütfen karakter giriniz ! ");

        }
    }
}
