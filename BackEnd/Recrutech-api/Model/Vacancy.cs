namespace Recrutech_api.Model
{
    public class Vacancy
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Remuneration { get; set; }
        public string Enterprise { get; set; }
        public string Location { get; set; }
        public string Content { get; set; }
        public string[] Requirements { get; set; }
        public string[] Benefits { get; set; }
        public string Link { get; set; }
        public EContract Contract { get; set; }
        public List<User> Users { get; set; } = null;
        public List<Curriculum> Cvs { get; set; } = null;
    }

    public enum EContract
    {
       InOffice = 0,
       Remote = 1,
       Hibryd = 2
    }
}
