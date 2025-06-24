import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { TypeAnimation } from 'react-type-animation';
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
          <div className="mb-12 animate-fade-in-up">
            <div className="relative mx-auto w-56 h-56 md:w-64 md:h-64 hero-profile">
              <img
                src={tabrizPhoto}
                alt="Tabriz Latifov"
                className="rounded-full w-full h-full object-cover border-4 border-background relative z-10"
              />
            </div>
          </div>

          <div className="mb-6 h-16">
            <TypeAnimation
              sequence={[
                'Hello', // Types 'Hello'
                1000,    // Waits 1s
                'I am Tabriz Latifov', // Types 'I am Tabriz Latifov'
                1500,    // Waits 1.5s
                'Full Stack Software Engineer', // Types 'Full Stack Software Engineer'
                1500,    // Waits 1.5s
                'Building Scalable Solutions', // Types 'Building Scalable Solutions'
                2000,    // Waits 2s
              ]}
              wrapper="span"
              speed={50}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient"
              repeat={Infinity}
            />
          </div>

          <div className="mb-8 space-y-4">
            <Badge variant="secondary" className="text-lg px-6 py-3 bg-primary/10 text-primary border-primary/20">
              Full Stack Software Engineer
            </Badge>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="outline" className="text-sm">Motorola Solutions</Badge>
              <Badge variant="outline" className="text-sm">Team Leader</Badge>
              <Badge variant="outline" className="text-sm">Instructor</Badge>
            </div>
          </div>

          <p className="text-lg mb-8 max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            Passionate about architecting enterprise solutions and mentoring the next generation of developers. Currently leading development teams at Motorola Solutions while delivering cutting-edge microservices architecture.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button onClick={scrollToContact} size="lg" className="px-8 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg">
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" className="px-8 border-primary/30 hover:bg-primary/10">
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
