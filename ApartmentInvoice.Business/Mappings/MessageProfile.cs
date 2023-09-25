using ApartmentInvoice.Entity.Concrete;
using ApartmentInvoice.Entity.DTOs.MessageDtos;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Business.Mappings
{
    public class MessageProfile : Profile
    {

        public MessageProfile()
        {
            CreateMap<MessageAddDto, Message>();
            CreateMap<Message, MessageAddDto>();

            CreateMap<MessageUpdateDto, Message>();
            CreateMap<Message, MessageUpdateDto>();

            CreateMap<MessagesDto, Message>();
            CreateMap<Message, MessagesDto>();

            CreateMap<MessageDetailDto, Message>();
            CreateMap<Message, MessageDetailDto>();
        }
    }
}
