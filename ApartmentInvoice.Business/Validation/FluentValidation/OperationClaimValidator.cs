using ApartmentInvoice.Core.Entities.Concrete.Auth;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Business.Validation.FluentValidation
{
    public class OperationClaimValidator : AbstractValidator<OperationClaim>
    {

        public OperationClaimValidator()
        {
            RuleFor(x => x.Name).Empty().WithMessage("Rol ismi boş bırakılamaz ! ");

        }
    }
}
