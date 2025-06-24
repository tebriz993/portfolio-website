import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Software engineering workspace"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                As a Full Stack Software Engineer with 2+ years of experience,
                I specialize in building scalable web applications using modern
                technologies like C#, .NET, React.js, and cloud services.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Currently working at Motorola Solutions, I lead development
                teams and architect microservice solutions. My experience spans
                from backend API development to frontend user interfaces, with a
                strong focus on clean code and efficient architectures.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-accent mb-2">2+ Years</h4>
                    <p className="text-sm text-muted-foreground">
                      Professional Experience
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-accent mb-2">Team Lead</h4>
                    <p className="text-sm text-muted-foreground">At DendClub</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-accent mb-2">
                      Full Stack
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      C# & React.js
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-accent mb-2">Published</h4>
                    <p className="text-sm text-muted-foreground">
                      Research Articles
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
