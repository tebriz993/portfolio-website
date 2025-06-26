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
                As a Full Stack Software Engineer with 3+ years of experience, I specialize in building scalable web applications for a diverse range of clients and projects using C#, .NET, React.js, and cloud services.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                I have a proven track record of leading development teams and architecting robust microservice solutions. My expertise spans from backend API development to intuitive frontend interfaces, with a strong focus on clean code and efficient, modular architectures.
              </p>

              {/* Yenilənmiş Kartlar Bölməsi */}
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-4 text-center">
                    <h4 className="text-lg font-bold text-primary">15+</h4>
                    <p className="text-sm text-muted-foreground">
                      Completed Projects
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <h4 className="text-lg font-bold text-primary">AI & ML</h4>
                    <p className="text-sm text-muted-foreground">
                      Continuous Learning
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <h4 className="text-lg font-bold text-primary">5+</h4>
                    <p className="text-sm text-muted-foreground">
                      Global Conferences
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <h4 className="text-lg font-bold text-primary">3</h4>
                    <p className="text-sm text-muted-foreground">
                      Published Articles
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