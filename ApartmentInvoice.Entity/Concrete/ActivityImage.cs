﻿using ApartmentInvoice.Core.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Entity.Concrete
{
    public class ActivityImage : AuditableEntity
    {
        public int ActivityId { get; set; }
        public string? PublicId { get; set; }
        public string Url { get; set; }
    }
}
