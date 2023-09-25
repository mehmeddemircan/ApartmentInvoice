using ApartmentInvoice.Entity.Concrete;
using ApartmentInvoice.Entity.DTOs.CategoryDtos;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Business.Mappings
{
    public class CategoryProfile : Profile
    {


        public CategoryProfile()
        {

            CreateMap<CategoryAddDto, Category>();
            CreateMap<Category, CategoryAddDto>();

            CreateMap<CategoryUpdateDto, Category>();
            CreateMap<Category, CategoryUpdateDto>();

            CreateMap<CategoriesDto, Category>();
            CreateMap<Category, CategoriesDto >();

        }
    }
}
