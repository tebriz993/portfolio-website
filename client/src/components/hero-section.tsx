// client/src/components/hero-section.tsx

// 1. Lazımi komponentləri və kitabxananı import edirik
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { TypeAnimation } from "react-type-animation"; // YENİ IMPORT
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
              className="rounded-full mx-auto w-64 h-64 object-cover border-4 border-background"
            />
          </div>

          {/* --- DƏYİŞİKLİK BURADADIR --- */}
          {/* 2. Köhnə <Badge> komponentini silib, yerinə <TypeAnimation> əlavə edirik */}
          {/* Mətn dəyişdikcə səhifənin "atlamaması" üçün ona bir min-height veririk */}
          <div className="mb-4 text-xl md:text-2xl font-semibold min-h-[64px] flex items-center justify-center">
            <TypeAnimation
              sequence={[
                'Hi, I\'m Tabriz.',
                1000,
                'Full Stack Software Engineer.',
                1000,
                'I build modern web applications.',
                1000,
                'And architect scalable cloud solutions.',
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
          {/* --- DƏYİŞİKLİK BİTDİ --- */}


          <p className="text-lg mb-8 max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            Responsible, hardworking, and creative engineer with strong
            algorithmic thinking and problem-solving skills. Currently leading
            teams and building microservices at Motorola Solutions.
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
