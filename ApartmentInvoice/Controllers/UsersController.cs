﻿using ApartmentInvoice.Business.Abstract;
using ApartmentInvoice.Entity.DTOs.UsersDtos;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ApartmentInvocie.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {

        IUserService _userService; 
        public UsersController(IUserService userService)
        {
            _userService = userService;
        }
        /// <summary>
        /// Bütün kullanıcıları çeken api 
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("[action]")]
        public async Task<IActionResult> GetUsers()
        {
            var result = await _userService.GetListAsync();
            if (result != null)
            {
                return Ok(result);
            }

            return BadRequest();

        }

        /// <summary>
        /// Tek bir kullanıcı profilini çeken api 
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("[action]/{userId:int}")]
        public async Task<IActionResult> GetUserById(int userId)
        {
            var result = await _userService.GetByIdAsync(userId);
            if (result != null)
            {
                return Ok(result);
            }
            return BadRequest();
        }


        /// <summary>
        /// Kullanıcıyi silen api 
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>

        [HttpDelete]
        [Route("[action]")]

        public async Task<IActionResult> DeleteUser(int userId)
        {
            var result = await _userService.DeleteAsync(userId);
            if (result.Success)
            {
                return Ok(result.Message);
            }
            return BadRequest();
        }
        /// <summary>
        /// Kullanıcıyı güncelleyen api 
        /// </summary>
        /// <param name="userUpdateDto"></param>
        /// <returns></returns>
        [HttpPut]
        [Route("[action]")]
        public async Task<IActionResult> UpdateUser([FromBody] UserUpdateDto userUpdateDto)
        {
            var result = await _userService.UpdateAsync(userUpdateDto);
            if (result != null)
            {
                return Ok(result);
            }
            return BadRequest();
        }

    }
}
