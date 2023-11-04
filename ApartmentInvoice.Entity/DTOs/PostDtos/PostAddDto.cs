using ApartmentInvoice.Core.Entities.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Entity.DTOs.PostDtos
{
    //Todo : Resim Ekleme Alanı olacak 
    //Todo : Interface , repository dataaccess kısımları yazılacak autofac ve automapper kısımları da yazılacak 
    // Todo : Migration Atilacak 
    //Todo : PostComment Fluent validation kısmı yazılacak 
    //Todo : ActivityComment alanı düzeltilecek 
    public class PostAddDto : IDto
    {
        public int UserId { get; set; }
        public string Content { get; set; }
    }
}
