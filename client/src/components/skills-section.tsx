import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Server, Code, Cloud, Database } from "lucide-react";
import { 
  SiSharp, SiDotnet, SiReact, SiJavascript, SiTypescript, 
  SiTailwindcss, SiDocker, SiKubernetes, SiAmazon, 
  SiPostgresql, SiMongodb, SiOracle, SiMysql,
  SiRabbitmq, SiRedis, SiGraphql, SiSwagger, SiPostman,
  SiTerraform, SiPrometheus, SiGrafana
} from "react-icons/si";

const skillCategories = [
  {
    title: "Backend Development",
    icon: Server,
    skills: [
      { name: "C# & .NET", level: 95 },
      { name: "ASP.NET Core", level: 90 },
      { name: "Microservices", level: 85 },
      { name: "Entity Framework", level: 88 },
      { name: "RabbitMQ", level: 75 },
      { name: "Redis", level: 70 },
      { name: "GraphQL/Swagger/Postman", level: 90 },
    ],
  },
  {
    title: "Frontend Development",
    icon: Code,
    skills: [
      { name: "React.js", level: 85 },
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "TypeScript", level: 80 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    skills: [
      { name: "Docker", level: 85 },
      { name: "Kubernetes", level: 75 },
      { name: "AWS", level: 70 },
      { name: "CI/CD Pipelines", level: 80 },
      { name: "Terraform", level: 75 },
      { name: "Prometheus & Grafana", level: 70 },
      { name: "Azure", level: 75 },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MS SQL Server", level: 90 },
      { name: "MongoDB", level: 80 },
      { name: "Oracle", level: 75 },
    ],
  },
];

const technologies = [
  { name: "C#", icon: SiSharp, color: "text-purple-600" },
  { name: ".NET", icon: SiDotnet, color: "text-blue-600" },
  { name: "React", icon: SiReact, color: "text-blue-500" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "Docker", icon: SiDocker, color: "text-blue-400" },
  { name: "Kubernetes", icon: SiKubernetes, color: "text-blue-500" },
  { name: "AWS", icon: SiAmazon, color: "text-orange-500" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-700" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
  { name: "RabbitMQ", icon: SiRabbitmq, color: "text-orange-600" },
  { name: "Redis", icon: SiRedis, color: "text-red-600" },
  { name: "GraphQL", icon: SiGraphql, color: "text-pink-600" },
  { name: "Swagger", icon: SiSwagger, color: "text-green-500" },
  { name: "Terraform", icon: SiTerraform, color: "text-purple-600" },
  { name: "Grafana", icon: SiGrafana, color: "text-orange-500" },
];

export function SkillsSection() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {skillCategories.map((category, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <category.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>
                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">
                            {skill.name}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <h3 className="text-xl font-bold mb-8">Technologies I Work With</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center group"
                >
                  <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <tech.icon className={`text-2xl ${tech.color}`} />
                  </div>
                  <span className="text-sm mt-2">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
