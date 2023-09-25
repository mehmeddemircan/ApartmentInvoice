using ApartmentInvoice.Core.Entities.Concrete.Auth;
using ApartmentInvoice.Entity.Concrete;
using ApartmentInvoice.Entity.DTOs.OperationClaimDtos;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Business.Mappings
{
    public class OperationClaimProfile : Profile
    {
        public OperationClaimProfile()
        {
            CreateMap<OperationClaimAddDto, OperationClaim>();
            CreateMap<OperationClaim, OperationClaimAddDto>();

            CreateMap<OperationClaimUpdateDto, OperationClaim>();
            CreateMap<OperationClaim, OperationClaimUpdateDto>();

            CreateMap<OperationClaimsDto, OperationClaim>();
            CreateMap<OperationClaim, OperationClaimsDto>();

            CreateMap<OperationClaimDetailDto, OperationClaim>();
            CreateMap<OperationClaim, OperationClaimDetailDto>();
        }
    }
}
