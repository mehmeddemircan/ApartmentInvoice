using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Core.Entities.Abstract
{
    public interface IEntity
    {
        [Key]
        public int Id { get; set; }
    }
}
