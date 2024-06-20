using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ApartmentInvoice.DataAccess.Migrations
{
    /// <inheritdoc />
    public partial class _0012_Added_CityId_TO_Apartment : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "CityId",
                table: "Apartments",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CityId",
                table: "Apartments");
        }
    }
}
