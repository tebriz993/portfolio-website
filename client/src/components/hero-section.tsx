import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import tabrizPhoto from "@assets/MyPC3_1750782360229.png";

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-24 pb-16 gradient-bg">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <img
              src={tabrizPhoto}
              alt="Tabriz Latifov"
              className="rounded-2xl shadow-2xl mx-auto w-32 h-32 object-cover border-4 border-background"
            />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-foreground">Tabriz</span>{" "}
            <span className="text-gradient">Latifov</span>
          </h1>

          <Badge variant="secondary" className="mb-4 text-lg px-4 py-2">
            Full Stack Software Engineer
          </Badge>

          <p className="text-lg mb-8 max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            Hi, I am Tabriz Latifov, a responsible and hardworking Full Stack Software Engineer with strong algorithmic thinking and problem-solving skills. I'm passionate about building scalable solutions and currently leading development teams at Motorola Solutions while sharing my knowledge as an instructor.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button onClick={scrollToContact} size="lg" className="px-8">
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/tebriz993"
              className="text-muted-foreground hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/tabriz-latifov-544307260"
              className="text-muted-foreground hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:latifovtebriz@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
