import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Download, ExternalLink, Sparkles, Code, Zap } from "lucide-react";
import profileImage from "@/assets/naveen-passport.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-primary/10 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-accent/30 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-20 right-40 w-8 h-8 bg-primary/20 rounded-full animate-bounce delay-1000"></div>
        
        {/* Decorative shapes */}
        <div className="absolute top-1/4 left-1/4 w-1 h-20 bg-accent/30 rotate-45 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-16 bg-primary/30 rotate-12 animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="animate-fade-in">
              {/* Badge */}
              <Badge className="mb-6 px-4 py-2 bg-accent/10 text-accent border-accent/20 text-sm font-medium">
                <Sparkles className="w-4 h-4 mr-2" />
                Available for new opportunities
              </Badge>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Hello, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-300">
                  Naveen
                </span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl text-white/90 mb-4 font-medium">
                Full Stack Developer
              </h2>
              
              <p className="text-xl text-white/80 mb-8 leading-relaxed max-w-xl">
                Building smart solutions with passion and precision. I create digital experiences 
                that make a difference through innovative technology and clean code.
              </p>

              {/* Skills badges */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10">
                <Badge variant="secondary" className="bg-white/10 text-white border-white/20 backdrop-blur-sm">
                  <Code className="w-3 h-3 mr-1" />
                  Problem Solver
                </Badge>
                <Badge variant="secondary" className="bg-white/10 text-white border-white/20 backdrop-blur-sm">
                  <Zap className="w-3 h-3 mr-1" />
                  Tech Enthusiast
                </Badge>
                <Badge variant="secondary" className="bg-white/10 text-white border-white/20 backdrop-blur-sm">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Fast Learner
                </Badge>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                variant="default" 
                size="xl"
                onClick={() => scrollToSection('contact')}
                className="group bg-accent hover:bg-accent/90 text-white shadow-accent hover:shadow-accent/50 transform hover:scale-105"
              >
                <Mail className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Let's Work Together
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                className="group border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
              >
                <Download className="w-5 h-5 mr-2 group-hover:translate-y-1 transition-transform" />
                Download Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-4">
              <Button 
                variant="ghost" 
                size="icon"
                asChild
                className="hover:text-accent text-white/80 hover:bg-white/10 backdrop-blur-sm border border-white/20"
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
                className="hover:text-accent text-white/80 hover:bg-white/10 backdrop-blur-sm border border-white/20"
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
                className="hover:text-accent text-white/80 hover:bg-white/10 backdrop-blur-sm border border-white/20"
                aria-label="Contact"
              >
                <ExternalLink className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center order-1 lg:order-2 relative">
            <div className="relative">
              {/* Main image container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                {/* Background decorative circle */}
                <div className="absolute inset-0 bg-gradient-secondary rounded-full opacity-20 scale-110 animate-pulse"></div>
                
                {/* Image container with border */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm shadow-strong">
                  <img
                    src={profileImage}
                    alt="Naveen - Full Stack Developer"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Floating badges */}
                <div className="absolute -top-6 -right-6 bg-accent text-white px-4 py-2 rounded-full shadow-accent text-sm font-semibold animate-bounce">
                  Full Stack Dev
                </div>
                <div className="absolute -bottom-4 -left-6 bg-white/90 text-primary px-4 py-2 rounded-full shadow-medium text-sm font-semibold animate-pulse delay-500">
                  Available
                </div>
              </div>

              {/* Floating tech icons */}
              <div className="absolute -top-8 left-1/4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20 animate-float">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -bottom-8 right-1/4 w-12 h-12 bg-accent/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-accent/30 animate-float delay-300">
                <Zap className="w-6 h-6 text-accent" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-20 fill-background">
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;