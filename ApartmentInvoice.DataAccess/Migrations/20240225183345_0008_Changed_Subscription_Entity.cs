using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ApartmentInvoice.DataAccess.Migrations
{
    /// <inheritdoc />
    public partial class _0008_Changed_Subscription_Entity : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Month",
                table: "Subscriptions");

            migrationBuilder.DropColumn(
                name: "Year",
                table: "Subscriptions");

            migrationBuilder.AddColumn<DateTime>(
                name: "SubscriptionDate",
                table: "Subscriptions",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "SubscriptionDate",
                table: "Subscriptions");

            migrationBuilder.AddColumn<int>(
                name: "Month",
                table: "Subscriptions",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Year",
                table: "Subscriptions",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
