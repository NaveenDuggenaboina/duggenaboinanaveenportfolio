import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Database, 
  Globe, 
  Settings, 
  Brain, 
  Users 
} from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Front-End",
      icon: <Globe className="w-6 h-6" />,
      skills: ["HTML", "CSS", "JavaScript", "React.js"],
      color: "primary"
    },
    {
      title: "Back-End & Frameworks",
      icon: <Code className="w-6 h-6" />,
      skills: ["Python", "Django"],
      color: "accent"
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      skills: ["SQL", "MySQL", "Oracle"],
      color: "success"
    },
    {
      title: "Tools & Technologies",
      icon: <Settings className="w-6 h-6" />,
      skills: ["Git", "GitHub", "AWS", "MS Excel"],
      color: "secondary"
    },
    {
      title: "Libraries & Frameworks",
      icon: <Brain className="w-6 h-6" />,
      skills: ["NumPy", "Pandas"],
      color: "primary"
    },
    {
      title: "Soft Skills",
      icon: <Users className="w-6 h-6" />,
      skills: ["Problem-solving", "Teamwork", "Communication", "Leadership"],
      color: "accent"
    }
  ];

  const getIconBgColor = (color: string) => {
    switch (color) {
      case 'primary': return 'bg-primary/10 text-primary';
      case 'accent': return 'bg-accent/10 text-accent';
      case 'success': return 'bg-success/10 text-success';
      case 'secondary': return 'bg-secondary/10 text-secondary';
      default: return 'bg-primary/10 text-primary';
    }
  };

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit of technical and soft skills that enable me to build 
            robust, scalable solutions and work effectively in diverse teams.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-medium transition-all duration-300 hover:scale-105 border-border/50 bg-gradient-card"
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`p-2 rounded-lg ${getIconBgColor(category.color)}`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="hover:scale-110 transition-transform duration-200 cursor-pointer"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills Highlight */}
        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-hero text-primary-foreground">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                What Makes Me Stand Out?
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold mb-2">3+</div>
                  <p className="text-sm opacity-90">Programming Languages</p>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">10+</div>
                  <p className="text-sm opacity-90">Technologies & Tools</p>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">∞</div>
                  <p className="text-sm opacity-90">Willingness to Learn</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;