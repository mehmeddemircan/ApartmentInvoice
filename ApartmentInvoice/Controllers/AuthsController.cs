using ApartmentInvoice.Business.Abstract;
using ApartmentInvoice.Entity.Concrete;
using ApartmentInvoice.Entity.DTOs.AuthDtos;
using ApartmentInvoice.Email;
using Castle.Core.Smtp;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ApartmentInvocie.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthsController : ControllerBase
    {


        private IAuthService _authService;
        private ApartmentInvoice.Email.IEmailSender _emailSender;
        public AuthsController(IAuthService authService, ApartmentInvoice.Email.IEmailSender emailSender)
        {
            _authService = authService;
            _emailSender = emailSender;
        }
        /// <summary>
        /// Kullanici giris yapan API 
        /// </summary>
        /// <param name="email"></param>>
        /// <param name="Password"></param>>
     
        /// <returns></returns>

        [HttpPost]
        [Route("[action]")]
        public ActionResult Login(UserForLoginDto userForLoginDto)
        {
            var userToLogin = _authService.Login(userForLoginDto);
            if (!userToLogin.Success)
            {
                return BadRequest(userToLogin.Message);
            }

            var result = _authService.CreateAccessToken(userToLogin.Data);
            if (result.Success)
            {
                return Ok(result.Data);
            }

            return BadRequest(result.Message);
        }

        [HttpGet("sendEmailAsync")]
        public async Task<IActionResult> SendEmailAsync(string email)
        {
            var message = new ApartmentInvoice.Email.Message(new string[] { email }, "Doğrulama maili", "http://localhost:3000/verified/" + email);
            await _emailSender.SendEmailAsync(message);
            return Ok();
        }


        /// <summary>
        ///  Kullanici Kaydı 
        ///  Şifre database de hashlenerek tutulur 
        /// </summary>
        /// <param name="FirstName"></param>
        /// <param name="LastName"></param>
        /// <param name="Email"></param>
        /// <param name="Password"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("[action]")]
        public ActionResult Register(UserForRegisterDto userForRegisterDto)
        {
            var userExists = _authService.UserExists(userForRegisterDto.Email);
            if (!userExists.Success)
            {
                return BadRequest(userExists.Message);
            }

            var registerResult = _authService.Register(userForRegisterDto, userForRegisterDto.Password);
            var result = _authService.CreateAccessToken(registerResult.Data);

            if (result.Success)
            {
                return Ok(result.Data);
            }

            return BadRequest(result.Message);
        }
    }
}
