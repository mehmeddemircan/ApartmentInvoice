using ApartmentInvoice.Business.Abstract;
using ApartmentInvoice.Business.Constants;
using ApartmentInvoice.Core.Utilities.Results;
using ApartmentInvoice.DataAccess.Abstract;
using ApartmentInvoice.DataAccess.Concrete.EntityFramework;
using ApartmentInvoice.Entity.Concrete;
using ApartmentInvoice.Entity.DTOs.ApartmentDtos;
using ApartmentInvoice.Entity.DTOs.BlockDtos;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Business.Concrete
{
    public class ApartmentManager : IApartmentService
    {
        private IApartmentRepository _apartmentRepository;
        private IMapper _mapper;
        public ApartmentManager(IApartmentRepository apartmentRepository,IMapper mapper)
        {
            _apartmentRepository = apartmentRepository;
            _mapper = mapper;
        }
        public async Task<IResult> AddAsync(ApartmentAddDto entity)
        {
            var newApartment = _mapper.Map<Apartment>(entity);

            await _apartmentRepository.AddAsync(newApartment);


            return new SuccessResult(Messages.Added);
        }

        public async Task<IDataResult<bool>> DeleteAsync(int id)
        {
            var isDelete = await _apartmentRepository.DeleteAsync(id);
            return new SuccessDataResult<bool>(isDelete, Messages.Deleted);
        }

        public async Task<IDataResult<ApartmentDetailDto>> GetAsync(Expression<Func<Apartment, bool>> filter)
        {
            var apartment = await _apartmentRepository.GetAsync(filter);
            if (apartment != null)
            {
                var blockDetailDto = _mapper.Map<ApartmentDetailDto>(apartment);
                return new SuccessDataResult<ApartmentDetailDto>(blockDetailDto, Messages.Listed);

            }
            return new ErrorDataResult<ApartmentDetailDto>(null, Messages.NotListed);
        }

        public async Task<IDataResult<ApartmentDetailDto>> GetByIdAsync(int id)
        {
            var apartment = await _apartmentRepository.GetAsync((x) => x.Id == id);
            if (apartment != null)
            {
                var blockDetailDto = _mapper.Map<ApartmentDetailDto>(apartment);
                return new SuccessDataResult<ApartmentDetailDto>(blockDetailDto, Messages.Listed);

            }
            return new ErrorDataResult<ApartmentDetailDto>(null, Messages.NotListed);
        }

        public async Task<IDataResult<IEnumerable<ApartmentsDto>>> GetListAsync(Expression<Func<Apartment, bool>> filter = null)
        {
            if (filter == null)
            {
                // Exception 
                //throw new UnauthorizedAccessException("UnAuthorized"); 
                var response = await _apartmentRepository.GetListAsync();
                var responseDetailDto = _mapper.Map<IEnumerable<ApartmentsDto>>(response);
                return new SuccessDataResult<IEnumerable<ApartmentsDto>>(responseDetailDto, Messages.Listed);
            }
            else
            {
                // Exception 
                //throw new UnauthorizedAccessException("UnAuthorized"); 
                var response = await _apartmentRepository.GetListAsync(filter);
                var responseDetailDto = _mapper.Map<IEnumerable<ApartmentsDto>>(response);
                return new SuccessDataResult<IEnumerable<ApartmentsDto>>(responseDetailDto, Messages.Listed);
            }
        }

        public async Task<IDataResult<ApartmentUpdateDto>> UpdateAsync(ApartmentUpdateDto blockUpdateDto)
        {
            var getBlock = await _apartmentRepository.GetAsync(x => x.Id == blockUpdateDto.Id);

            var apartment = _mapper.Map<Apartment>(blockUpdateDto);


            apartment.UpdatedDate = DateTime.Now;
            apartment.UpdatedBy = 1;


            var blockUpdate = await _apartmentRepository.UpdateAsync(apartment);
            var resultUpdateDto = _mapper.Map<ApartmentUpdateDto>(blockUpdate);

            return new SuccessDataResult<ApartmentUpdateDto>(resultUpdateDto, Messages.Updated);
        }
    }
}
