using ApartmentInvoice.Entity.Concrete;
using ApartmentInvoice.Entity.DTOs.BlockDtos;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Business.Mappings
{
    public class BlockProfile : Profile
    {

        public BlockProfile()
        {
            CreateMap<BlockAddDto, Block>();
            CreateMap<Block, BlockAddDto>();

            CreateMap<BlockUpdateDto, Block>();
            CreateMap<Block, BlockUpdateDto>();

            CreateMap<BlocksDto, Block>();
            CreateMap<Block, BlocksDto>();

            CreateMap<BlockDetailDto, Block>();
            CreateMap<Block, BlockDetailDto>();
        }
    }
}
