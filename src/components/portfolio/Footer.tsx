import { Button } from "@/components/ui/button";
import { Heart, ArrowUp, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Naveen</h3>
            <p className="text-primary-foreground/80">
              Full Stack Developer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4">
            <Button 
              variant="ghost" 
              size="icon"
              asChild
              className="hover:bg-primary-foreground/10 text-primary-foreground hover:text-accent"
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
              className="hover:bg-primary-foreground/10 text-primary-foreground hover:text-accent"
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
              asChild
              className="hover:bg-primary-foreground/10 text-primary-foreground hover:text-accent"
            >
              <a 
                href="mailto:duggenaboinanaveen@gmail.com"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </Button>
          </div>

          {/* Back to Top */}
          <div className="text-center md:text-right">
            <Button 
              variant="ghost" 
              onClick={scrollToTop}
              className="group text-primary-foreground hover:text-accent hover:bg-primary-foreground/10"
            >
              <ArrowUp className="w-4 h-4 mr-2 group-hover:-translate-y-1 transition-transform" />
              Back to Top
            </Button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 my-8"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="flex items-center justify-center text-primary-foreground/80">
            © {currentYear} Naveen Duggenaboina. Made with 
            <Heart className="w-4 h-4 mx-1 text-red-400 animate-pulse" />
            and lots of ☕
          </p>
          <p className="text-sm text-primary-foreground/60 mt-2">
            Designed & Developed with modern web technologies
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;