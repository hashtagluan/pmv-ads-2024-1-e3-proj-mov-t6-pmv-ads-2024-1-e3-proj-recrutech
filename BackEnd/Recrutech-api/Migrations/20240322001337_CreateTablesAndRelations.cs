using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace Recrutech_api.Migrations
{
    public partial class CreateTablesAndRelations : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    UserName = table.Column<string>(type: "text", nullable: true),
                    Password = table.Column<string>(type: "text", nullable: true),
                    Email = table.Column<string>(type: "text", nullable: true),
                    IsRecruiter = table.Column<bool>(type: "boolean", nullable: false),
                    Tecnologies = table.Column<string[]>(type: "text[]", nullable: true),
                    CurriculumId = table.Column<long>(type: "bigint", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Vacancies",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Name = table.Column<string>(type: "text", nullable: true),
                    Remuneration = table.Column<string>(type: "text", nullable: true),
                    Enterprise = table.Column<string>(type: "text", nullable: true),
                    Location = table.Column<string>(type: "text", nullable: true),
                    Content = table.Column<string>(type: "text", nullable: true),
                    Requirements = table.Column<string[]>(type: "text[]", nullable: true),
                    Benefits = table.Column<string[]>(type: "text[]", nullable: true),
                    Link = table.Column<string>(type: "text", nullable: true),
                    Contract = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Vacancies", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Cvs",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Name = table.Column<string>(type: "text", nullable: true),
                    UserId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cvs", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Cvs_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "UserVacancy",
                columns: table => new
                {
                    UsersId = table.Column<int>(type: "integer", nullable: false),
                    VacanciesId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserVacancy", x => new { x.UsersId, x.VacanciesId });
                    table.ForeignKey(
                        name: "FK_UserVacancy_Users_UsersId",
                        column: x => x.UsersId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_UserVacancy_Vacancies_VacanciesId",
                        column: x => x.VacanciesId,
                        principalTable: "Vacancies",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "CurriculumVacancy",
                columns: table => new
                {
                    CvsId = table.Column<int>(type: "integer", nullable: false),
                    VacanciesId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CurriculumVacancy", x => new { x.CvsId, x.VacanciesId });
                    table.ForeignKey(
                        name: "FK_CurriculumVacancy_Cvs_CvsId",
                        column: x => x.CvsId,
                        principalTable: "Cvs",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CurriculumVacancy_Vacancies_VacanciesId",
                        column: x => x.VacanciesId,
                        principalTable: "Vacancies",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_CurriculumVacancy_VacanciesId",
                table: "CurriculumVacancy",
                column: "VacanciesId");

            migrationBuilder.CreateIndex(
                name: "IX_Cvs_UserId",
                table: "Cvs",
                column: "UserId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_UserVacancy_VacanciesId",
                table: "UserVacancy",
                column: "VacanciesId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CurriculumVacancy");

            migrationBuilder.DropTable(
                name: "UserVacancy");

            migrationBuilder.DropTable(
                name: "Cvs");

            migrationBuilder.DropTable(
                name: "Vacancies");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
