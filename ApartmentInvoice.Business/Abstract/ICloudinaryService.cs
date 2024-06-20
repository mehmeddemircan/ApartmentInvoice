using CloudinaryDotNet.Actions;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Business.Abstract
{
    public interface ICloudinaryService
    {
        Task<string> UploadImageAsync(string imagePath);

        Task<UploadResult> UploadActivityImageAsync(IFormFile file);
    }
}
