using ApartmentInvoice.Business.Abstract;
using ApartmentInvoice.Business.Constants;
using ApartmentInvoice.Core.Utilities.Results;
using ApartmentInvoice.DataAccess.Abstract;
using ApartmentInvoice.DataAccess.Concrete.EntityFramework;
using ApartmentInvoice.Entity.Concrete;
using ApartmentInvoice.Entity.DTOs.MessageDtos;
using ApartmentInvoice.Entity.DTOs.MessageDtos;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Business.Concrete
{
    public class MessageManager : IMessageService
    {   

        //Todo : User kısmında message detail dtoda gösterilecek 
        IMessageRepository _messageRepository;
        IMapper _mapper; 
        public MessageManager(IMessageRepository messageRepository,IMapper mapper )
        {
            _messageRepository = messageRepository;
            _mapper = mapper; 
        }
        public async Task<IResult> AddAsync(MessageAddDto entity)
        {
            var newMessage = _mapper.Map<Message>(entity);

            await _messageRepository.AddAsync(newMessage);


            return new SuccessResult(Messages.Added);
        }

        public async Task<IDataResult<bool>> DeleteAsync(int id)
        {
            var isDelete = await _messageRepository.DeleteAsync(id);
            return new SuccessDataResult<bool>(isDelete,Messages.Deleted);   
        }

        public async Task<IDataResult<MessagesDto>> GetAsync(Expression<Func<Message, bool>> filter)
        {
            var message = await _messageRepository.GetAsync(filter);
            if (message != null)
            {
                var messageDetailDto = _mapper.Map<MessagesDto>(message);
                return new SuccessDataResult<MessagesDto>(messageDetailDto, Messages.Listed);

            }
            return new ErrorDataResult<MessagesDto>(null, Messages.NotListed);
        }

        public async Task<IDataResult<MessageDetailDto>> GetByIdAsync(int id)
        {
            var message = await _messageRepository.GetAsync(x => x.Id == id);
            if (message != null)
            {
                var messageDetailDto = _mapper.Map<MessageDetailDto>(message);
                return new SuccessDataResult<MessageDetailDto>(messageDetailDto, Messages.Listed);

            }
            return new ErrorDataResult<MessageDetailDto>(null, Messages.NotListed);
        }

        public async Task<IDataResult<IEnumerable<MessagesDto>>> GetListAsync(Expression<Func<Message, bool>> filter = null)
        {
            if (filter == null)
            {
                // Exception 
                //throw new UnauthorizedAccessException("UnAuthorized"); 
                var response = await _messageRepository.GetListAsync();
                var responseDetailDto = _mapper.Map<IEnumerable<MessagesDto>>(response);
                return new SuccessDataResult<IEnumerable<MessagesDto>>(responseDetailDto, Messages.Listed);
            }
            else
            {
                var response = await _messageRepository.GetListAsync(filter);
                var responseDetailDto = _mapper.Map<IEnumerable<MessagesDto>>(response);
                return new SuccessDataResult<IEnumerable<MessagesDto>>(responseDetailDto, Messages.Listed);
            }
        }

        public async Task<IDataResult<MessageUpdateDto>> UpdateAsync(MessageUpdateDto messageUpdateDto)
        {
            var getMessage = await _messageRepository.GetAsync(x => x.Id == messageUpdateDto.Id);

            var message = _mapper.Map<Message>(messageUpdateDto);


            message.UpdatedDate = DateTime.Now;
            message.UpdatedBy = 1;


            var messageUpdate = await _messageRepository.UpdateAsync(message);
            var resultUpdateDto = _mapper.Map<MessageUpdateDto>(messageUpdate);
            return new SuccessDataResult<MessageUpdateDto>(resultUpdateDto, Messages.Updated);
        }
    }
}
