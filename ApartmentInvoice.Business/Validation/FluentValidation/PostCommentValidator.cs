using ApartmentInvoice.Entity.DTOs.CommentDtos;
using ApartmentInvoice.Entity.DTOs.PostCommentDtos;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Business.Validation.FluentValidation
{
    public class PostCommentValidator : AbstractValidator<PostCommentAddDto>
    {

        public PostCommentValidator()
        {
            RuleFor(x => x.Content).Empty().WithMessage("Post Yorumu boş bırakılamaz");

        }
    }
}
