
using ApartmentInvoice.Core.Entities.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Entity.DTOs.UserOperationClaimDtos
{
    public class UserOperationClaimDetailDto : IDto
    {

        public int Id { get; set; }

        public int UserId { get; set; }
        //Todo : Full Name diye birleştir 
        public string UserFirstName { get; set; }
        public string UserLastName { get; set; }

        public int OperationClaimId { get; set; }
        public string RoleName { get; set; }

    }
}
