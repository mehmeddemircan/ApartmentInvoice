using ApartmentInvoice.Business.Abstract;
using ApartmentInvoice.Business.Constants;
using ApartmentInvoice.Core.Utilities.Results;
using ApartmentInvoice.DataAccess.Abstract;
using ApartmentInvoice.DataAccess.Concrete.EntityFramework;
using ApartmentInvoice.Entity.Concrete;
using ApartmentInvoice.Entity.DTOs.BlockDtos;
using ApartmentInvoice.Entity.DTOs.QuestionDtos;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Business.Concrete
{
    public class QuestionManager : IQuestionService
    {
        IQuestionRepository _questionRepository;
        IMapper _mapper;

        public QuestionManager(IQuestionRepository questionRepository,IMapper mapper )
        {
            _mapper = mapper;
            _questionRepository = questionRepository;   
        }
        public async Task<IResult> AddAsync(QuestionAddDto entity)
        {
            var newQuestion = _mapper.Map<Question>(entity);

            await _questionRepository.AddAsync(newQuestion);


            return new SuccessResult(Messages.Added);
        }

        public async Task<IDataResult<bool>> DeleteAsync(int id)
        {
            var isDelete = await _questionRepository.DeleteAsync(id);
            return new SuccessDataResult<bool>(isDelete, Messages.Deleted);
        }

      

        public async Task<IDataResult<IEnumerable<QuestionsDto>>> GetListAsync(Expression<Func<Question, bool>> filter = null)
        {
            if (filter == null)
            {
                // Exception 
                //throw new UnauthorizedAccessException("UnAuthorized"); 
                var response = await _questionRepository.GetListAsync();
                var responseDetailDto = _mapper.Map<IEnumerable<QuestionsDto>>(response);
                return new SuccessDataResult<IEnumerable<QuestionsDto>>(responseDetailDto, Messages.Listed);
            }
            else
            {
                var response = await _questionRepository.GetListAsync(filter);
                var responseDetailDto = _mapper.Map<IEnumerable<QuestionsDto>>(response);
                return new SuccessDataResult<IEnumerable<QuestionsDto>>(responseDetailDto, Messages.Listed);
            }
        }

        public async Task<IDataResult<QuestionUpdateDto>> UpdateAsync(QuestionUpdateDto questionUpdateDto)
        {
            var getQuestion = await _questionRepository.GetAsync(x => x.Id == questionUpdateDto.Id);

            var question = _mapper.Map<Question>(questionUpdateDto);


            question.UpdatedDate = DateTime.Now;
            question.UpdatedBy = 1;


            var questionUpdate = await _questionRepository.UpdateAsync(question);
            var resultUpdateDto = _mapper.Map<QuestionUpdateDto>(questionUpdate);

            return new SuccessDataResult<QuestionUpdateDto>(resultUpdateDto, Messages.Updated);
        }
    }
}
