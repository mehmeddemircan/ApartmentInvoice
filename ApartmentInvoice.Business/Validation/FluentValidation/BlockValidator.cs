using ApartmentInvoice.Entity.DTOs.BlockDtos;
using ApartmentInvoice.Entity.DTOs.CategoryDtos;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Business.Validation.FluentValidation
{
    public class BlockValidator : AbstractValidator<BlockAddDto>
    {
        public BlockValidator()
        {
            RuleFor(x => x.Name).Empty().WithMessage("Blok ismi boş olamaz ! ");
        }
    }
}
