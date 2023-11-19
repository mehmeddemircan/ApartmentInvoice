using ApartmentInvoice.Business.Abstract;
using ApartmentInvoice.Business.Constants;
using ApartmentInvoice.Core.Utilities.Results;
using ApartmentInvoice.DataAccess.Abstract;
using ApartmentInvoice.DataAccess.Concrete.EntityFramework;
using ApartmentInvoice.Entity.Concrete;
using ApartmentInvoice.Entity.DTOs.PostDtos;
using ApartmentInvoice.Entity.DTOs.SurveyDtos;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Business.Concrete
{
    public class SurveyManager : ISurveyService
    {
        ISurveyRepository _surveyRepository;
        IMapper _mapper;
        IUserRepository _userRepository;

        public SurveyManager(ISurveyRepository surveyRepository , IMapper mapper , IUserRepository userRepository)
        {
            _surveyRepository = surveyRepository;
            _mapper = mapper;
            _userRepository = userRepository;
        }
        public async Task<IResult> AddAsync(SurveyAddDto entity)
        {
            var newSurvey = _mapper.Map<Survey>(entity);

            await _surveyRepository.AddAsync(newSurvey);


            return new SuccessResult(Messages.Added);
        }

        public async Task<IDataResult<bool>> DeleteAsync(int id)
        {
            var isDelete = await _surveyRepository.DeleteAsync(id);
            return new SuccessDataResult<bool>(isDelete, Messages.Deleted);
        }

        public async Task<IDataResult<SurveyDetailDto>> GetAsync(Expression<Func<Survey, bool>> filter)
        {
            var survey = await _surveyRepository.GetAsync(filter);
            if (survey != null)
            {
                //var postDetailDto = await AssignSurveyDetails(survey, survey.UserId);
                var surveyDetailDto = _mapper.Map<SurveyDetailDto>(survey);
                return new SuccessDataResult<SurveyDetailDto>(surveyDetailDto, Messages.Listed);

            }
            return new ErrorDataResult<SurveyDetailDto>(null, Messages.NotListed);
        }

        public async Task<IDataResult<SurveyDetailDto>> GetByIdAsync(int id)
        {
            var survey = await _surveyRepository.GetAsync(x => x.Id == id);
            if (survey != null)
            {
                //var postDetailDto = await AssignSurveyDetails(survey, survey.UserId);
                var surveyDetailDto = _mapper.Map<SurveyDetailDto>(survey);
                return new SuccessDataResult<SurveyDetailDto>(surveyDetailDto, Messages.Listed);

            }
            return new ErrorDataResult<SurveyDetailDto>(null, Messages.NotListed);
        }

        public async Task<IDataResult<IEnumerable<SurveysDto>>> GetListAsync(Expression<Func<Survey, bool>> filter = null)
        {

            List<SurveysDto> surveys = new List<SurveysDto>();

            if (filter == null)
            {
                // Exception 
                //throw new UnauthorizedAccessException("UnAuthorized"); 
                var response = await _surveyRepository.GetListAsync();
                var responseDetailDto = _mapper.Map<IEnumerable<SurveysDto>>(response);


                //foreach (var survey in response)
                //{
                //    var surveyDto = await AssignSurveys(survey, survey.UserId);
                //    surveys.Add(surveyDto);
                //}
                return new SuccessDataResult<IEnumerable<SurveysDto>>(responseDetailDto, Messages.Listed);
            }
            else
            {
                var response = await _surveyRepository.GetListAsync(filter);
                var responseDetailDto = _mapper.Map<IEnumerable<SurveysDto>>(response);


                //foreach (var survey in response)
                //{
                //    var surveyDto = await AssignSurveys(survey, survey.UserId);
                //    surveys.Add(surveyDto);
                //}
                return new SuccessDataResult<IEnumerable<SurveysDto>>(responseDetailDto, Messages.Listed);
            }
        }

        public async Task<IDataResult<SurveyUpdateDto>> UpdateAsync(SurveyUpdateDto surveyUpdateDto)
        {
            var getSurvey = await _surveyRepository.GetAsync(x => x.Id == surveyUpdateDto.Id);

            var survey = _mapper.Map<Survey>(surveyUpdateDto);


            survey.UpdatedDate = DateTime.Now;
            survey.UpdatedBy = 1;


            var postUpdate = await _surveyRepository.UpdateAsync(survey);
            var resultUpdateDto = _mapper.Map<SurveyUpdateDto>(postUpdate);

            return new SuccessDataResult<SurveyUpdateDto>(resultUpdateDto, Messages.Updated);
        }
        private async Task<SurveysDto> AssignSurveys(Survey survey, int userId)
        {
            var user = await _userRepository.GetAsync(x => x.Id == userId);

            if (user == null)
            {
                return null;
            }
            //survey.User = user;

            var surveysDto = _mapper.Map<SurveysDto>(survey);
            return surveysDto;
        }
        private async Task<SurveyDetailDto> AssignSurveyDetails(Survey survey, int userId)
        {
            var user = await _userRepository.GetAsync(x => x.Id == userId);

            if (user == null)
            {
                return null;
            }
            //survey.User = user;

            var surveyDetailDto = _mapper.Map<SurveyDetailDto>(survey);
            return surveyDetailDto;
        }
    }
}
