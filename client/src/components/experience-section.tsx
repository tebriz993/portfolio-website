import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Full Stack Software Engineer",
    company: "Motorola Solutions (Remote)",
    location: "Chicago, USA",
    period: "05/2025 - Present",
    description:
      "Working on enterprise-level software solutions using C#, .NET, and Microservices architecture for mission-critical applications.",
    technologies: ["C#", ".NET", "Microservices"],
    current: true,
  },
  {
    title: "Full Stack Software Team Lead",
    company: "DendClub (Hybrid)",
    location: "Azerbaijan",
    period: "10/2024 - 05/2025",
    description:
      "Led a full-stack development team, implementing scalable solutions using C#, .NET, Docker, Kubernetes, and React.js.",
    technologies: ["Team Leadership", "Docker", "Kubernetes", "React.js"],
    current: false,
  },
  {
    title: "Back-end Instructor",
    company: "Software Village & CodeWorld.az",
    location: "Azerbaijan",
    period: "03/2024 - Present",
    description:
      "Teaching advanced C# and .NET concepts to aspiring developers, focusing on clean code principles and best practices.",
    technologies: ["C#", ".NET", "Teaching", "Mentoring"],
    current: true,
  },
  {
    title: "Full Stack Software Developer",
    company: "TIC (Remote)",
    location: "USA",
    period: "09/2023 - 12/2024",
    description:
      "Developed and maintained full-stack applications using modern web technologies and cloud services.",
    technologies: ["Full Stack", "Cloud Services", "Web Development"],
    current: false,
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="section-padding bg-muted/50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Work Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className={`${
                  exp.current ? "border-l-4 border-l-primary" : ""
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                      <p className="text-muted-foreground">{exp.location}</p>
                    </div>
                    <Badge
                      variant={exp.current ? "default" : "secondary"}
                      className="mt-2 md:mt-0"
                    >
                      {exp.period}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
