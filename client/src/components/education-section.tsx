import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, BookOpen } from "lucide-react";

const education = [
  {
    title: "Advanced Back-end Development",
    institution: "Uniser IT Academy",
    description: "C#, .NET and Microservice Architecture",
    period: "11/2023 - 04/2024",
    badge: "100% Scholarship",
  },
  {
    title: "Full Stack Development",
    institution: "Software Village",
    description: "C#, .NET",
    period: "07/2023 - 11/2023",
  },
  {
    title: "Computer Engineering",
    institution: "Baku Engineering University",
    description: "Bachelor's Degree (English)",
    period: "Azerbaijan, Baku",
  },
];

const achievements = [
  {
    title: "Climate Change Hackathon COP29",
    description: "2nd Place Winner",
    organization: "Azerbaijan Republic Youth Fund",
    period: "09/2024",
    type: "award",
  },
  {
    title: "Advanced Front-end Development",
    description: "Certificate",
    organization: "MyMentorship and Development Agency",
    period: "06/2024 - 09/2024",
    type: "certificate",
  },
  {
    title: "Published Research",
    description:
      '"The role of Software Architectures in Programming" - Sydney, Australia',
    organization: "IAC Astronautical Federation Conference 2025",
    period: "2025",
    type: "publication",
  },
  {
    title: "Algorithms & Data Structures",
    description: "Sorting, Searching, Divide and Conquer",
    organization: "Stanford University (Coursera)",
    period: "Completed",
    type: "certificate",
  },
];

export function EducationSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Education & Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <div>
              <div className="flex items-center mb-6">
                <BookOpen className="h-6 w-6 text-primary mr-2" />
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-bold">{edu.title}</h4>
                        {edu.badge && (
                          <Badge variant="default">{edu.badge}</Badge>
                        )}
                      </div>
                      <p className="text-primary font-medium">
                        {edu.institution}
                      </p>
                      <p className="text-muted-foreground">{edu.description}</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        {edu.period}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Certifications & Achievements */}
            <div>
              <div className="flex items-center mb-6">
                <Award className="h-6 w-6 text-accent mr-2" />
                <h3 className="text-2xl font-bold">Certifications & Achievements</h3>
              </div>
              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-bold">
                          {achievement.title}
                        </h4>
                        <Badge
                          variant={
                            achievement.type === "award"
                              ? "default"
                              : achievement.type === "publication"
                              ? "secondary"
                              : "outline"
                          }
                        >
                          {achievement.type === "award"
                            ? "Award"
                            : achievement.type === "publication"
                            ? "Publication"
                            : "Certificate"}
                        </Badge>
                      </div>
                      <p className="text-accent font-medium">
                        {achievement.description}
                      </p>
                      <p className="text-muted-foreground">
                        {achievement.organization}
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        {achievement.period}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
