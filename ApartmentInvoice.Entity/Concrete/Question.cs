using ApartmentInvoice.Core.Entities.Concrete;

namespace ApartmentInvoice.Entity.Concrete
{
    public class Question : AuditableEntity
    {
        public int SurveyId  { get; set; }

        public virtual Survey Survey  { get; set; }
        public string Content { get; set; }




    }

}
