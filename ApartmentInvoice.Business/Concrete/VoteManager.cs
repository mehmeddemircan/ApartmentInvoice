using ApartmentInvoice.Business.Abstract;
using ApartmentInvoice.Business.Constants;
using ApartmentInvoice.Core.Utilities.Results;
using ApartmentInvoice.DataAccess.Abstract;
using ApartmentInvoice.DataAccess.Concrete.EntityFramework;
using ApartmentInvoice.Entity.Concrete;
using ApartmentInvoice.Entity.DTOs.BlockDtos;
using ApartmentInvoice.Entity.DTOs.VoteDtos;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Business.Concrete
{
    public class VoteManager : IVoteService
    {   
        IVoteRepository _voteRepository;
        IMapper _mapper;

        public VoteManager(IVoteRepository voteRepository,IMapper mapper )
        {
            _voteRepository = voteRepository;
            _mapper = mapper;
        }
        public async Task<IResult> AddAsync(VoteAddDto entity)
        {
            var newVote = _mapper.Map<Vote>(entity);

            await _voteRepository.AddAsync(newVote);


            return new SuccessResult(Messages.Added);
        }

        public async Task<IDataResult<bool>> DeleteAsync(int id)
        {
            var isDelete = await _voteRepository.DeleteAsync(id);
            return new SuccessDataResult<bool>(isDelete, Messages.Deleted);
        }

        public async Task<IDataResult<IEnumerable<VotesDto>>> GetListAsync(Expression<Func<Vote, bool>> filter = null)
        {
            if (filter == null)
            {
                // Exception 
                //throw new UnauthorizedAccessException("UnAuthorized"); 
                var response = await _voteRepository.GetListAsync();
                var responseDetailDto = _mapper.Map<IEnumerable<VotesDto>>(response);
                return new SuccessDataResult<IEnumerable<VotesDto>>(responseDetailDto, Messages.Listed);
            }
            else
            {
                var response = await _voteRepository.GetListAsync(filter);
                var responseDetailDto = _mapper.Map<IEnumerable<VotesDto>>(response);
                return new SuccessDataResult<IEnumerable<VotesDto>>(responseDetailDto, Messages.Listed);
            }
        }

        public async Task<IDataResult<VoteUpdateDto>> UpdateAsync(VoteUpdateDto voteUpdateDto)
        {
            var getVote = await _voteRepository.GetAsync(x => x.Id == voteUpdateDto.Id);

            var vote = _mapper.Map<Vote>(voteUpdateDto);


            vote.UpdatedDate = DateTime.Now;
            vote.UpdatedBy = 1;


            var voteUpdate = await _voteRepository.UpdateAsync(vote);
            var resultUpdateDto = _mapper.Map<VoteUpdateDto>(vote);

            return new SuccessDataResult<VoteUpdateDto>(resultUpdateDto, Messages.Updated);
        }
    }
}
