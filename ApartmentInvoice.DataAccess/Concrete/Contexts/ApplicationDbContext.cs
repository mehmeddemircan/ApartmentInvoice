using ApartmentInvoice.Core.Entities.Concrete.Auth;
using ApartmentInvoice.Entity.Concrete;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.DataAccess.Concrete.Contexts
{
    public class ApplicationDbContext : DbContext
    {

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {

            optionsBuilder.UseSqlServer(@"Server=(localdb)\ProjectsV13;Database=ApartmentInvoice;Trusted_Connection=true");


        }
        //Todo : Controllerlada admin olanlar area admin içine atılacak 
        // Todo : UserControllerlar yazılacak 
        public DbSet<User> Users { get; set; }

        public DbSet<OperationClaim> OperationClaims { get; set; }
        public DbSet<UserOperationClaim> UserOperationClaims { get; set; }

        public DbSet<Bill> Bills { get; set; }

        public DbSet<Category> Categories { get; set; }
        public DbSet<Block> Blocks { get; set; }
        public DbSet<Flat> Flats { get; set; }
        public DbSet<Message> Messages { get; set; }
        public DbSet<Subscription> Subscriptions { get; set; }
        public DbSet<FlatSubscription> FlatSubscriptions { get; set; }
    }
}
