using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ApartmentInvoice.DataAccess.Migrations
{
    /// <inheritdoc />
    public partial class _0005_Updated_User_Table : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "OperationClaimId",
                table: "Users",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Users_OperationClaimId",
                table: "Users",
                column: "OperationClaimId");

            migrationBuilder.AddForeignKey(
                name: "FK_Users_OperationClaims_OperationClaimId",
                table: "Users",
                column: "OperationClaimId",
                principalTable: "OperationClaims",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Users_OperationClaims_OperationClaimId",
                table: "Users");

            migrationBuilder.DropIndex(
                name: "IX_Users_OperationClaimId",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "OperationClaimId",
                table: "Users");
        }
    }
}
