using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ApartmentInvoice.DataAccess.Migrations
{
    /// <inheritdoc />
    public partial class _0013_Added_ImageCol_To_ApartmentsTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Images",
                table: "Apartments",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Images",
                table: "Apartments");
        }
    }
}
