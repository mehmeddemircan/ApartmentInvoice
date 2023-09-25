using ApartmentInvoice.Core.Entities.Abstract;
using ApartmentInvoice.Core.Entities.Concrete.Auth;
using ApartmentInvoice.Entity.Concrete;
using ApartmentInvoice.Entity.DTOs.BlockDtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Entity.DTOs.FlatDtos
{
    public class FlatDetailDto : IDto
    {
        public int Id { get; set; }

        public int FlatNo { get; set; }
        public bool IsEmpty { get; set; } = true;
        public string NumberOfRooms { get; set; }
        public int Floor { get; set; }
    

        //public int? UserId { get; set; }
        //public virtual User User { get; set; }
        public int BlockId { get; set; }
        public virtual BlocksDto Block { get; set; }

        //Todo DTO Seklinde yapılacak
        //public virtual ICollection<Bill>? Bills { get; set; }
        //public virtual ICollection<Subscription>? Subscriptions { get; set; }
    }
}
