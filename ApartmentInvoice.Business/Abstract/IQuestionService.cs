using ApartmentInvoice.Core.Utilities.Results;
using ApartmentInvoice.Entity.Concrete;
using ApartmentInvoice.Entity.DTOs.QuestionDtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Business.Abstract
{
    public interface IQuestionService
    {

        Task<IResult> AddAsync(QuestionAddDto entity);


        Task<IDataResult<IEnumerable<QuestionsDto>>> GetListAsync(Expression<Func<Question, bool>> filter = null);
        //Task<IDataResult<QuestionDetailDto>> GetAsync(Expression<Func<Question, bool>> filter);

        //Task<IDataResult<QuestionDetailDto>> GetByIdAsync(int id);

        Task<IDataResult<QuestionUpdateDto>> UpdateAsync(QuestionUpdateDto questionUpdateDto);

        Task<IDataResult<bool>> DeleteAsync(int id);
    }
}
