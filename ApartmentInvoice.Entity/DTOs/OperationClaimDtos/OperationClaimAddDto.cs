using ApartmentInvoice.Core.Entities.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Entity.DTOs.OperationClaimDtos
{
    public class OperationClaimAddDto : IDto
    {
        public string Name { get; set; }
    }
}
