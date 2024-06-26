﻿using ApartmentInvoice.Core.Entities.Abstract;
using ApartmentInvoice.Core.Entities.Concrete.Auth;
using ApartmentInvoice.Entity.DTOs.BlockDtos;

namespace ApartmentInvoice.Entity.DTOs.FlatDtos
{
    public class FlatUpdateDto : IDto
    {
        public int Id { get; set; }
        public bool IsEmpty { get; set; } = true;
        public string NumberOfRooms { get; set; }
        public int Floor { get; set; }
        public int FlatNo { get; set; }

        public int? UserId { get; set; }
        public int BlockId { get; set; }
 
    }
}
