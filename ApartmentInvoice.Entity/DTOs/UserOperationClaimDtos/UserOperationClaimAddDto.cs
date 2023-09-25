
using ApartmentInvoice.Core.Entities.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Entity.DTOs.UserOperationClaimDtos
{
    public class UserOperationClaimAddDto : IDto
    {

        public int UserId { get; set; }
        public int OperationClaimId { get; set; }

    }
}
