using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ApartmentInvoice.DataAccess.Migrations
{
    /// <inheritdoc />
    public partial class _0009_Changed_Subscription_Entity : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "SubscriptionDate",
                table: "Subscriptions",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldType: "datetime2");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "SubscriptionDate",
                table: "Subscriptions",
                type: "datetime2",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");
        }
    }
}
