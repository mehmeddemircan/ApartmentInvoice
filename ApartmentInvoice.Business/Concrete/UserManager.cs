using ApartmentInvoice.Business.Abstract;
using ApartmentInvoice.Business.BusinessAspects.Autofac;
using ApartmentInvoice.Business.Constants;
using ApartmentInvoice.Core.Entities.Concrete.Auth;
using ApartmentInvoice.Core.Utilities.Results;
using ApartmentInvoice.DataAccess.Abstract;
using ApartmentInvoice.Entity.DTOs.UsersDtos;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Business.Concrete
{
    public class UserManager : IUserService
    {
        IUserRepository _userRepository;
        //IOperationClaimRepository _operationClaimRepository;
        IMapper _mapper;
        public UserManager(IUserRepository userRepository, IMapper mapper)
        {
            _userRepository = userRepository;
            _mapper = mapper;
           
        }

        public List<OperationClaim> GetClaims(User user)
        {
            return _userRepository.GetClaims(user);
        }

        public void Add(User user)
        {

            _userRepository.AddAsync(user);
        }

        public User GetByMail(string email)
        {
            return _userRepository.Get(u => u.Email == email);
        }

        [SecuredOperation("admin")]
        //[CacheAspect(10)]
        public async Task<IDataResult<IEnumerable<UserDetailDto>>> GetListAsync(Expression<Func<User, bool>> filter = null)
        {
            if (filter == null)
            {

                var response = await _userRepository.GetListAsync();
                var responseUserDetailDto = _mapper.Map<IEnumerable<UserDetailDto>>(response);
                return new SuccessDataResult<IEnumerable<UserDetailDto>>(responseUserDetailDto, Messages.Listed);
            }
            else
            {
                var response = await _userRepository.GetListAsync(filter);
                var responseUserDetailDto = _mapper.Map<IEnumerable<UserDetailDto>>(response);
                return new SuccessDataResult<IEnumerable<UserDetailDto>>(responseUserDetailDto, Messages.Listed);
            }
        }

        public async Task<IDataResult<UsersDto>> GetAsync(Expression<Func<User, bool>> filter)
        {
            var user = await _userRepository.GetAsync(filter);
            if (user != null)
            {
                var UsersDto = _mapper.Map<UsersDto>(user);
                return new SuccessDataResult<UsersDto>(UsersDto, Messages.Listed);
            }

            return new ErrorDataResult<UsersDto>(null, Messages.NotListed);
        }

        public async Task<IDataResult<UsersDto>> GetByIdAsync(int id)
        {
            var user = await _userRepository.GetAsync(x => x.Id == id);
            if (user != null)
            {
                var UsersDto = _mapper.Map<UsersDto>(user);
                return new SuccessDataResult<UsersDto>(UsersDto, Messages.Listed);
            }
            return new ErrorDataResult<UsersDto>(null, Messages.NotListed);

        }

        public async Task<IDataResult<bool>> DeleteAsync(int id)
        {


            var isDelete = await _userRepository.DeleteAsync(id);
            return new SuccessDataResult<bool>(isDelete, Messages.Deleted);



        }

        public async Task<IDataResult<UserUpdateDto>> UpdateAsync(UserUpdateDto userUpdateDto)
        {
            var getUser = await _userRepository.GetAsync(x => x.Id == userUpdateDto.Id);

            var user = _mapper.Map<User>(userUpdateDto);

            user.PasswordHash = getUser.PasswordHash;
            user.PasswordSalt = getUser.PasswordSalt;
            user.UpdatedDate = DateTime.Now;
            user.UpdatedBy = 1;


            var userUpdate = await _userRepository.UpdateAsync(user);
            var resultUpdate = _mapper.Map<UserUpdateDto>(userUpdate);

            return new SuccessDataResult<UserUpdateDto>(resultUpdate, Messages.Updated);
        }
        //private async Task<UsersDto> AssignOperationClaimDetails(User user, int operationClaimId)
        //{
        //    var operationClaim = await _operationClaimRepository.GetAsync(x => x.Id == operationClaimId);


        //    if (operationClaim == null)
        //    {
        //        return null;
        //    }

        //    user.OperationClaim = operationClaim;


        //    var UsersDto = _mapper.Map<UsersDto>(user);
        //    return UsersDto;
        //}

    }
}
