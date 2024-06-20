using MimeKit;
using System;
using System.Collections.Generic;
using System.Linq;
using MailKit.Net.Smtp;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentInvoice.Email
{
    public class EmailSender : IEmailSender
    {
        private readonly EmailConfiguration _emailConfiguration;
        public EmailSender(EmailConfiguration emailConfiguration)
        {
            _emailConfiguration = emailConfiguration;
        }
        public void SendEmail(Message message)
        {
            var emailMessage = CreateEmailMessage(message);
            Send(emailMessage);
        }

        public async Task SendEmailAsync(Message message)
        {
            var emailMessage = CreateEmailMessage(message);
            await SendAsync(emailMessage);
        }
        public MimeMessage CreateEmailMessage(Message message)
        {
            var emailMessage = new MimeMessage();
            emailMessage.From.Add(new MailboxAddress("email", _emailConfiguration.From));
            emailMessage.To.AddRange(message.To);
            emailMessage.Subject = message.Subject;
            emailMessage.Body = new TextPart(MimeKit.Text.TextFormat.Html) { Text = string.Format("<h1 style = 'color:blue'>{0}</h1>", message.Content) };
            return emailMessage;
        }
        public void Send(MimeMessage mailMessage)
        {
            using(var client = new SmtpClient()) 
            {
                try
                {
                    client.Connect(_emailConfiguration.SmtpServer, _emailConfiguration.Port, true);
                    client.AuthenticationMechanisms.Remove("XOAUTH2");
                    client.AuthenticateAsync(_emailConfiguration.UserName, _emailConfiguration.Password);
                    client.Send(mailMessage);
                }
                catch
                {
                    throw;
                }
                finally
                {
                    client.Disconnect(true);
                    client.Dispose();
                }
            }
        }
        public async Task SendAsync(MimeMessage mailMessage)
        {
            using(var client = new SmtpClient())
            {
                try
                {
                    await client.ConnectAsync(_emailConfiguration.SmtpServer, _emailConfiguration.Port, true);
                    client.AuthenticationMechanisms.Remove("XOAUTH2");
                    await client.AuthenticateAsync(_emailConfiguration.UserName, _emailConfiguration.Password);
                    await client.SendAsync(mailMessage);
                }
                catch
                {
                    throw;
                }
                finally
                {
                    await client.DisconnectAsync(true);
                    client.Dispose();
                }
            }
        }
    }
}
