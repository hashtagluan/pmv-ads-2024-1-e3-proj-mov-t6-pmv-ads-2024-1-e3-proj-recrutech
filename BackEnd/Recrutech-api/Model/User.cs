namespace Recrutech_api.Model
{
    public class User
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public bool IsRecruiter { get; set; }
        public string[] Tecnologies { get; set; } = null;
        public List<Vacancy> Vacancies { get; set; } = null;
        public long? CurriculumId { get; set; }
        public Curriculum Curriculum { get; set; } = null;
        public string Linkedin { get; set; } = null;
        public string Github { get; set; } = null;
        public string Cep { get; set; }

    }
}


