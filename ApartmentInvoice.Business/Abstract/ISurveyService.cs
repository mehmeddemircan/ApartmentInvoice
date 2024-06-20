using ApartmentInvoice.Core.Utilities.Results;
using ApartmentInvoice.Entity.Concrete;
using ApartmentInvoice.Entity.DTOs.SurveyDtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Business.Abstract
{
    public interface ISurveyService
    {
        Task<IResult> AddAsync(SurveyAddDto entity);


        Task<IDataResult<IEnumerable<SurveysDto>>> GetListAsync(Expression<Func<Survey, bool>> filter = null);
        Task<IDataResult<SurveyDetailDto>> GetAsync(Expression<Func<Survey, bool>> filter);

        Task<IDataResult<SurveyDetailDto>> GetByIdAsync(int id);

        Task<IDataResult<SurveyUpdateDto>> UpdateAsync(SurveyUpdateDto surveyUpdateDto);

        Task<IDataResult<bool>> DeleteAsync(int id);
    }
}
