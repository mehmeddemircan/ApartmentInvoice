using ApartmentInvoice.Business.Abstract;
using ApartmentInvoice.Business.Constants;
using ApartmentInvoice.Core.Utilities.Results;
using ApartmentInvoice.DataAccess.Abstract;
using ApartmentInvoice.DataAccess.Concrete.EntityFramework;
using ApartmentInvoice.Entity.Concrete;
using ApartmentInvoice.Entity.DTOs.BlockDtos;
using ApartmentInvoice.Entity.DTOs.CategoryDtos;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Business.Concrete
{
    public class BlockManager : IBlockService
    {
        IBlockRepository _blockRepository;
        IMapper _mapper; 
        public BlockManager(IBlockRepository blockRepository, IMapper mapper)
        {
            _blockRepository = blockRepository;
            _mapper = mapper;
        }
        public async Task<IResult> AddAsync(BlockAddDto entity)
        {
            var newBlock = _mapper.Map<Block>(entity);

            await _blockRepository.AddAsync(newBlock);


            return new SuccessResult(Messages.Added);
        }

        public async Task<IDataResult<bool>> DeleteAsync(int id)
        {
            var isDelete = await   _blockRepository.DeleteAsync(id);
            return new SuccessDataResult<bool>(isDelete,Messages.Deleted);
        }

        public async Task<IDataResult<BlockDetailDto>> GetAsync(Expression<Func<Block, bool>> filter)
        {
            var block = await _blockRepository.GetAsync(filter);
            if (block != null)
            {
                var blockDetailDto = _mapper.Map<BlockDetailDto>(block);
                return new SuccessDataResult<BlockDetailDto>(blockDetailDto, Messages.Listed);

            }
            return new ErrorDataResult<BlockDetailDto>(null, Messages.NotListed);
        }

        public async Task<IDataResult<BlockDetailDto>> GetByIdAsync(int id)
        {
            var block = await _blockRepository.GetAsync(x => x.Id == id);
            if (block != null)
            {
                var blockDetailDto = _mapper.Map<BlockDetailDto>(block);
                return new SuccessDataResult<BlockDetailDto>(blockDetailDto, Messages.Listed);

            }
            return new ErrorDataResult<BlockDetailDto>(null, Messages.NotListed);
        }

        public async Task<IDataResult<IEnumerable<BlocksDto>>> GetListAsync(Expression<Func<Block, bool>> filter = null)
        {
            if (filter == null)
            {
                // Exception 
                //throw new UnauthorizedAccessException("UnAuthorized"); 
                var response = await _blockRepository.GetListAsync();
                var responseDetailDto = _mapper.Map<IEnumerable<BlocksDto>>(response);
                return new SuccessDataResult<IEnumerable<BlocksDto>>(responseDetailDto, Messages.Listed);
            }
            else
            {
                var response = await _blockRepository.GetListAsync(filter);
                var responseDetailDto = _mapper.Map<IEnumerable<BlocksDto>>(response);
                return new SuccessDataResult<IEnumerable<BlocksDto>>(responseDetailDto, Messages.Listed);
            }
        }

        public async Task<IDataResult<BlockUpdateDto>> UpdateAsync(BlockUpdateDto blockUpdateDto)
        {
            var getBlock = await _blockRepository.GetAsync(x => x.Id == blockUpdateDto.Id);

            var block = _mapper.Map<Block>(blockUpdateDto);


            block.UpdatedDate = DateTime.Now;
            block.UpdatedBy = 1;


            var blockUpdate = await _blockRepository.UpdateAsync(block);
            var resultUpdateDto = _mapper.Map<BlockUpdateDto>(blockUpdate);

            return new SuccessDataResult<BlockUpdateDto>(resultUpdateDto, Messages.Updated);
        }
    }
}
