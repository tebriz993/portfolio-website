import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import tabrizPhoto from "@assets/MyPC3_1750782360229.png";

export function HeroSection() {
  const [displayedText, setDisplayedText] = useState("");
  const [currentPhase, setCurrentPhase] = useState(0);
  
  const textPhases = [
    "Hi",
    "I am Tabriz Latifov",
    "I am Full Stack Software Engineer"
  ];

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const typeText = () => {
      const currentText = textPhases[currentPhase];
      const currentLength = displayedText.length;
      
      if (currentLength < currentText.length) {
        // Typing phase
        setDisplayedText(currentText.slice(0, currentLength + 1));
        timeoutId = setTimeout(typeText, 100);
      } else {
        // Pause before next phase or restart
        timeoutId = setTimeout(() => {
          if (currentPhase < textPhases.length - 1) {
            setCurrentPhase(prev => prev + 1);
            setDisplayedText("");
          } else {
            // Restart animation
            setCurrentPhase(0);
            setDisplayedText("");
          }
        }, 2000);
      }
    };

    typeText();
    
    return () => clearTimeout(timeoutId);
  }, [currentPhase, displayedText]);

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
          <div className="mb-8 animate-fade-in-up">
            <div className="relative mx-auto w-40 h-40 hero-profile">
              <img
                src={tabrizPhoto}
                alt="Tabriz Latifov"
                className="rounded-full shadow-2xl w-full h-full object-cover border-4 border-background relative z-10"
              />
            </div>
          </div>

          <div className="mb-6">
            <h1 className="text-5xl md:text-6xl font-bold h-20 flex items-center justify-center">
              <span className="text-gradient typing-text">
                {displayedText}
                <span className="animate-pulse">|</span>
              </span>
            </h1>
          </div>

          <Badge variant="secondary" className="mb-8 text-lg px-6 py-3 bg-primary/10 text-primary border-primary/20">
            Full Stack Software Engineer
          </Badge>

          <p className="text-lg mb-8 max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            Passionate about building scalable solutions and currently leading development teams at Motorola Solutions while sharing knowledge as an instructor. Strong background in algorithmic thinking and problem-solving.
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
