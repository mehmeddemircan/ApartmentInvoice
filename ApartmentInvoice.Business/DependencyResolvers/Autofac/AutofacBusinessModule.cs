using ApartmentInvoice.Business.Abstract;
using ApartmentInvoice.Business.Concrete;
using ApartmentInvoice.Core.Utilities.Security.JWT;
using ApartmentInvoice.DataAccess.Abstract;
using ApartmentInvoice.DataAccess.Concrete.EntityFramework;
using Autofac;
using Autofac.Extras.DynamicProxy;
using ApartmentInvoice.Core.Utilities.Interceptors;
using Castle.DynamicProxy;
using Core.Utilities.Security.JWT;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ApartmentInvoice.Email;

namespace ApartmentInvoice.Business.DependencyResolvers.Autofac
{
    public class AutofacBusinessModule : Module
    {

        protected override void Load(ContainerBuilder builder)
        {


            builder.RegisterType<AuthManager>().As<IAuthService>();
            builder.RegisterType<JwtHelper>().As<ITokenHelper>();

            builder.RegisterType<UserManager>().As<IUserService>();
            builder.RegisterType<UserRepository>().As<IUserRepository>();

            builder.RegisterType<CategoryManager>().As<ICategoryService>();
            builder.RegisterType<CategoryRepository>().As<ICategoryRepository>();

            builder.RegisterType<BlockManager>().As<IBlockService>();
            builder.RegisterType<BlockRepository>().As<IBlockRepository>();

            builder.RegisterType<FlatManager>().As<IFlatService>();
            builder.RegisterType<FlatRepository>().As<IFlatRepository>();


            builder.RegisterType<SubscriptionManager>().As<ISubscriptionService>();
            builder.RegisterType<SubscriptionRepository>().As<ISubscriptionRepository>();

            builder.RegisterType<FlatSubscriptionManager>().As<IFlatSubscriptionService>();
            builder.RegisterType<FlatSubscriptionRepository>().As<IFlatSubscriptionRepository>();

            builder.RegisterType<BillManager>().As<IBillService>();
            builder.RegisterType<BillRepository>().As<IBillRepository>();


            builder.RegisterType<MessageManager>().As<IMessageService>();
            builder.RegisterType<MessageRepository>().As<IMessageRepository>();

            builder.RegisterType<OperationClaimManager>().As<IOperationClaimService>();
            builder.RegisterType<OperationClaimRepository>().As<IOperationClaimRepository>();

            builder.RegisterType<UserOperationClaimManager>().As<IUserOperationClaimService>();
            builder.RegisterType<UserOperationClaimRepository>().As<IUserOperationClaimRepository>();

            builder.RegisterType<ActivityManager>().As<IActivityService>();
            builder.RegisterType<ActivityRepository>().As<IActivityRepository>();

            builder.RegisterType<ActivityCommentManager>().As<IActivityCommentService>();
            builder.RegisterType<ActivityCommentRepository>().As<IActivityCommentRepository>();

            builder.RegisterType<UserActivityManager>().As<IUserActivityService>();
            builder.RegisterType<UserActivityRepository>().As<IUserActivityRepository>();

            builder.RegisterType<PostManager>().As<IPostService>();
            builder.RegisterType<PostRepository>().As<IPostRepository>();

            builder.RegisterType<PostCommentManager>().As<IPostCommentService>();
            builder.RegisterType<PostCommentRepository>().As<IPostCommentRepository>();

            builder.RegisterType<AnnouncementManager>().As<IAnnouncementService>();
            builder.RegisterType<AnnouncementRepository>().As<IAnnouncementRepository>();


            builder.RegisterType<SurveyManager>().As<ISurveyService>();
            builder.RegisterType<SurveyRepository>().As<ISurveyRepository>();


            builder.RegisterType<QuestionManager>().As<IQuestionService>();
            builder.RegisterType<QuestionRepository>().As<IQuestionRepository>();


            builder.RegisterType<VoteManager>().As<IVoteService>();
            builder.RegisterType<VoteRepository>().As<IVoteRepository>();

            builder.RegisterType<PaymentManager>().As<IPaymentService>();

            builder.RegisterType<EmailSender>().As<IEmailSender>();
            builder.RegisterType<CloudinaryManager>().As<ICloudinaryService>();
            builder.RegisterType<ActivityImageRepository>().As<IActivityImageRepository>();
            //builder.RegisterType<CarImageRepository>().As<ICarImageRepository>();

            var assembly = System.Reflection.Assembly.GetExecutingAssembly();

            builder.RegisterAssemblyTypes(assembly).AsImplementedInterfaces()
                .EnableInterfaceInterceptors(new ProxyGenerationOptions()
                {
                    Selector = new AspectInterceptorSelector()
                }).SingleInstance();
        }
    }
}
