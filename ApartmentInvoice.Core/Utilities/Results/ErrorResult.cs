
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Core.Utilities.Results
{
    public class ErrorResult : Result
    {

        public ErrorResult(string message, bool success = false) : base(message, success)
        {
        }
        public ErrorResult(string message) : base(false, message)
        {
        }

        public ErrorResult() : base(false)
        {
        }
    }

}
