using ApartmentInvoice.Entity.Concrete;

using ApartmentInvoice.Entity.DTOs.VoteDtos;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Business.Mappings
{
    public class VoteProfile : Profile
    {

        public VoteProfile()
        {
            CreateMap<VoteAddDto, Vote>();
            CreateMap<Vote, VoteAddDto>();

            CreateMap<VoteUpdateDto, Vote>();
            CreateMap<Vote, VoteUpdateDto>();

            CreateMap<VotesDto, Vote>();
            CreateMap<Vote, VotesDto>();
        }
    }
}
