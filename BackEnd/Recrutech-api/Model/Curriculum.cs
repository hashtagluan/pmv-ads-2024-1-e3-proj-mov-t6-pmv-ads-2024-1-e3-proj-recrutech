namespace Recrutech_api.Model
{
    public class Curriculum
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
        public List<Vacancy> Vacancies { get; set; } = null;
    }
}
