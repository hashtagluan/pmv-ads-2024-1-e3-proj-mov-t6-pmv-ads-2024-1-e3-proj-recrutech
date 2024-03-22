using Microsoft.EntityFrameworkCore;

namespace Recrutech_api.Model
{
    public class recrutechDbContext : DbContext
    {
        public recrutechDbContext()
        {
        }

        public recrutechDbContext(DbContextOptions<recrutechDbContext> options)
            : base(options)
        {
        }
        public virtual DbSet<Curriculum> Cvs { get; set; } = null!;

        public virtual DbSet<User> Users { get; set; } = null!;

        public virtual DbSet<Vacancy> Vacancies { get; set; } = null!;



    }
}
