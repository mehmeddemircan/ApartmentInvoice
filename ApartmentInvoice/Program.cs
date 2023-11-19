using ApartmentInvoice.Business.DependencyResolvers.Autofac;
using ApartmentInvoice.Business.Mappings;
using ApartmentInvoice.Core.Utilities.Security.Encryption;
using ApartmentInvoice.Core.Utilities.Security.JWT;
using Autofac;
using Autofac.Extensions.DependencyInjection;
using AutoMapper;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();



#region AutoMapper
var mapperConfig = new MapperConfiguration(mc =>
{
    mc.AddProfile(new CategoryProfile());
    mc.AddProfile(new BlockProfile());
    mc.AddProfile(new FlatProfile());
    mc.AddProfile(new SubscriptionProfile());
    mc.AddProfile(new FlatSubscriptionProfile());
    mc.AddProfile(new BillProfile());
    mc.AddProfile(new UserProfile());
    mc.AddProfile(new MessageProfile());
    mc.AddProfile(new OperationClaimProfile());
    mc.AddProfile(new UserOperationClaimProfile());
    mc.AddProfile(new ActivityProfile());
    mc.AddProfile(new ActivityCommentProfile());
    mc.AddProfile(new UserActivityProfile());
    mc.AddProfile(new PostProfile());
    mc.AddProfile(new PostCommentProfile());
    mc.AddProfile(new AnnouncementProfile());
    mc.AddProfile(new SurveyProfile());
    mc.AddProfile(new QuestionProfile());
    mc.AddProfile(new VoteProfile());

  
});
var mapper = mapperConfig.CreateMapper();
builder.Services.AddSingleton(mapper);
#endregion

#region Autofac
builder.Host.UseServiceProviderFactory(new AutofacServiceProviderFactory());
// Register services directly with Autofac here. Don't
// call builder.Populate(), that happens in AutofacServiceProviderFactory.
builder.Host.ConfigureContainer<ContainerBuilder>(builder => builder.RegisterModule(new AutofacBusinessModule()));
#endregion



#region JWT Authentication
var provider = builder.Services.BuildServiceProvider();
var configuration = provider.GetRequiredService<IConfiguration>();
var tokenOptions = configuration.GetSection("TokenOptions").Get<TokenOptions>();

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidIssuer = tokenOptions.Issuer,
            ValidAudience = tokenOptions.Audience,
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = SecurityKeyHelper.CreateSecurityKey(tokenOptions.SecurityKey)
        };
    });
#endregion

builder.Services.AddCors(options =>
{
    var frontendURL = configuration.GetValue<string>("frontend_url");

    options.AddDefaultPolicy(builder =>
    {
        builder.WithOrigins(frontendURL).AllowAnyMethod().AllowAnyHeader();
    });

});
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthentication();

app.UseCors();
app.UseAuthorization();

app.MapControllers();

app.Run();
