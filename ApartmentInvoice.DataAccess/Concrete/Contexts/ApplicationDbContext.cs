﻿using ApartmentInvoice.Core.Entities.Concrete.Auth;
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

        public DbSet<Activity> Activities { get; set; }
  
        public DbSet<ActivityComment> ActivityComments { get; set; }

        public DbSet<UserActivity> UserActivities { get; set; }

        public DbSet<Post> Posts { get; set; }
        public DbSet<PostComment> PostComments { get; set; }
        public DbSet<Announcement> Announcements { get; set; }
        public DbSet<Survey> Surveys { get; set; }
        public DbSet<Question> Questions { get; set; }
        public DbSet<Vote> Votes { get; set; }

        public DbSet<Order> Orders { get; set; }

        public DbSet<Apartment> Apartments { get; set; }
    }
}
