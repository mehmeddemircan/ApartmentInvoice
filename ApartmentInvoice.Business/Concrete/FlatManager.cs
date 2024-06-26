﻿using ApartmentInvoice.Business.Abstract;
using ApartmentInvoice.Business.Constants;
using ApartmentInvoice.Core.Utilities.Results;
using ApartmentInvoice.DataAccess.Abstract;
using ApartmentInvoice.DataAccess.Concrete.EntityFramework;
using ApartmentInvoice.Entity.Concrete;
using ApartmentInvoice.Entity.DTOs.BlockDtos;
using ApartmentInvoice.Entity.DTOs.CategoryDtos;
using ApartmentInvoice.Entity.DTOs.CommentDtos;
using ApartmentInvoice.Entity.DTOs.FlatDtos;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Runtime.ConstrainedExecution;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace ApartmentInvoice.Business.Concrete
{
    public class FlatManager : IFlatService
    {
        IFlatRepository _flatRepository;
        IBlockRepository _blockRepository;
        IUserRepository _userRepository; 
        IMapper _mapper;
        public FlatManager(IFlatRepository flatRepository,IMapper mapper, IBlockRepository blockRepository, IUserRepository userRepository)
        {
            _flatRepository = flatRepository;
            _mapper = mapper;
            _blockRepository = blockRepository;
            _userRepository = userRepository;
        }
        public async Task<IResult> AddAsync(FlatAddDto entity)
        {
            var flat = _mapper.Map<Flat>(entity);

            var flatAdd = await _flatRepository.AddAsync(flat);
            return new SuccessResult(Messages.Added);

        }

        public async Task<IDataResult<FlatUpdateDto>> AddUserToFlat(FlatUpdateDto flatUpdateDto)
        {
            var getFlat = await _flatRepository.GetAsync(x => x.Id == flatUpdateDto.Id);

            var flat = _mapper.Map<Flat>(flatUpdateDto);

            
            flat.UpdatedDate = DateTime.Now;
            flat.UpdatedBy = 1;


            var flatUpdate = await _flatRepository.UpdateAsync(flat);
            var resultUpdateDto = _mapper.Map<FlatUpdateDto>(flatUpdate);

            return new SuccessDataResult<FlatUpdateDto>(resultUpdateDto, Messages.Updated);
        }

        public async Task<IDataResult<bool>> DeleteAsync(int id)
        {
            var isDelete = await _flatRepository.DeleteAsync(id);
            return new SuccessDataResult<bool>(isDelete,Messages.Deleted);
        }

        public async Task<IDataResult<FlatDetailDto>> GetAsync(Expression<Func<Flat, bool>> filter)
        {
            var flat = await _flatRepository.GetAsync(filter);
            if (flat != null)
            {
                var flatDetailDto = await AssignDetails(flat, flat.BlockId);
                return new SuccessDataResult<FlatDetailDto>(flatDetailDto, Messages.Listed);

            }
            return new ErrorDataResult<FlatDetailDto>(null, Messages.NotListed);
        }
        // stashhhhe atma 
        public async Task<IDataResult<FlatDetailDto>> GetByIdAsync(int id)
        {
            var flat = await _flatRepository.GetAsync(x=> x.Id == id);
            if (flat != null)
            {
                var flatDetailDto = await AssignDetails(flat, flat.BlockId);
                return new SuccessDataResult<FlatDetailDto>(flatDetailDto, Messages.Listed);

            }
            return new ErrorDataResult<FlatDetailDto>(null, Messages.NotListed);
        }

        public async Task<IDataResult<IEnumerable<FlatsDto>>> GetListAsync(Expression<Func<Flat, bool>> filter = null)
        {
            List<FlatsDto> comments = new List<FlatsDto>();

            if (filter == null)
            {
                // Exception 
                //throw new UnauthorizedAccessException("UnAuthorized"); 
                var response = await _flatRepository.GetListAsync();
                foreach (var comment in response)
                {
                    var commentDto = await AssignUserDetails(comment, comment.UserId);
                    comments.Add(commentDto);
                }
            
        
                return new SuccessDataResult<IEnumerable<FlatsDto>>(comments, Messages.Listed);
            }
            else
            {
                var response = await _flatRepository.GetListAsync(filter);
                foreach (var comment in response)
                {
                    var commentDto = await AssignUserDetails(comment, comment.UserId);
                    comments.Add(commentDto);
                }


                return new SuccessDataResult<IEnumerable<FlatsDto>>(comments, Messages.Listed);
            }
        }

        public async Task<IDataResult<FlatUpdateDto>> UpdateAsync(FlatUpdateDto flatUpdateDto)
        {
            var getFlat = await _flatRepository.GetAsync(x => x.Id == flatUpdateDto.Id);

            var flat = _mapper.Map<Flat>(flatUpdateDto);


            flat.UpdatedDate = DateTime.Now;
            flat.UpdatedBy = 1;


            var flatUpdate = await _flatRepository.UpdateAsync(flat);
            var resultUpdateDto = _mapper.Map<FlatUpdateDto>(flatUpdate);

            return new SuccessDataResult<FlatUpdateDto>(resultUpdateDto, Messages.Updated);
        }

        private async Task<FlatsDto> AssignUserDetails(Flat flat, int? userId)
        {
            var user = await _userRepository.GetAsync(x => x.Id == userId);

          

            flat.User = user;

            var flatDetailDto = _mapper.Map<FlatsDto>(flat);
            return flatDetailDto;
        }
        private async Task<FlatDetailDto> AssignDetails(Flat flat, int blockId)
        {
            var block = await _blockRepository.GetAsync(x => x.Id == blockId);
       
          
           
            flat.Block = block;
            
            var flatDetailDto = _mapper.Map<FlatDetailDto>(flat);
            return flatDetailDto;
        }
    }
}
