using ApartmentInvoice.Entity.DTOs.PostDtos;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Business.Validation.FluentValidation
{
    public class PostValidator  : AbstractValidator<PostAddDto>
    {

        public PostValidator()
        {
            RuleFor(x => x.Content).Empty().WithMessage("Post içeriği boş bırakılamaz ! ");

        }
    }
}
