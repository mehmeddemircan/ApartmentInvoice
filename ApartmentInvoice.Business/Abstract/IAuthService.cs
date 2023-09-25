using ApartmentInvoice.Core.Entities.Concrete.Auth;
using ApartmentInvoice.Core.Utilities.Results;
using ApartmentInvoice.Core.Utilities.Security.JWT;
using ApartmentInvoice.Entity.DTOs.AuthDtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Business.Abstract
{
    public interface IAuthService
    {
        IDataResult<User> Register(UserForRegisterDto userForRegisterDto, string password);
        IDataResult<User> Login(UserForLoginDto userForLoginDto);
        IResult UserExists(string email);
        IDataResult<AccessToken> CreateAccessToken(User user);
    }
}
