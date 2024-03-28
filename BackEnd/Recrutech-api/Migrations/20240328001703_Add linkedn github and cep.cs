using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Recrutech_api.Migrations
{
    public partial class Addlinkedngithubandcep : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Cep",
                table: "Users",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Github",
                table: "Users",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Linkedin",
                table: "Users",
                type: "text",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Cep",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "Github",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "Linkedin",
                table: "Users");
        }
    }
}
