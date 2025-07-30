import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react";
import profileImage from "@/assets/naveen-profile.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Naveen
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl text-secondary mb-4">
                Full Stack Developer with a passion for building smart solutions
              </h2>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 text-muted-foreground mb-8">
                <span className="px-3 py-1 bg-muted rounded-full text-sm">Problem Solver</span>
                <span className="px-3 py-1 bg-muted rounded-full text-sm">Tech Enthusiast</span>
                <span className="px-3 py-1 bg-muted rounded-full text-sm">Fast Learner</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                variant="hero" 
                size="xl"
                onClick={() => scrollToSection('contact')}
                className="group"
              >
                <Mail className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Contact Me
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                className="group"
              >
                <Download className="w-5 h-5 mr-2 group-hover:translate-y-1 transition-transform" />
                View Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-4">
              <Button 
                variant="ghost" 
                size="icon"
                asChild
                className="hover:text-accent"
              >
                <a 
                  href="https://github.com/NaveenDuggenaboina" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                asChild
                className="hover:text-accent"
              >
                <a 
                  href="https://linkedin.com/in/duggenaboinanaveen" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => scrollToSection('contact')}
                className="hover:text-accent"
                aria-label="Contact"
              >
                <ExternalLink className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-strong bg-gradient-card p-2">
                <img
                  src={profileImage}
                  alt="Naveen - Full Stack Developer"
                  className="w-full h-full rounded-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary rounded-full animate-pulse delay-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;