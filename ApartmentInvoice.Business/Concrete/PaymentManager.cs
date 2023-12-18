using ApartmentInvoice.Business.Abstract;
using ApartmentInvoice.Business.Constants;
using ApartmentInvoice.Core.Utilities.Results;
using Stripe;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Business.Concrete
{
    public class PaymentManager : IPaymentService
    {
        public async Task<IDataResult<string>> CreatePaymentIntentAsync(int amount)
        {
            var options = new PaymentIntentCreateOptions
            {
                Amount = amount * 100,
                Currency = "try",
                Description = "Payment for your service"
            };

            var service = new PaymentIntentService();
            var paymentIntent = await service.CreateAsync(options);

            return new SuccessDataResult<string>(paymentIntent.ClientSecret,Messages.Payed);
        }
    }
}
