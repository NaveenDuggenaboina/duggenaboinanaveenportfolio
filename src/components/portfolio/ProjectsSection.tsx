import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Lightbulb, 
  Brain, 
  Github, 
  ExternalLink,
  ArrowRight,
  Zap,
  Heart
} from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Automatic Street Light Control System",
      description: "Built a smart IoT-based system using LDR sensors and Arduino to automatically control street lights based on ambient lighting conditions, significantly improving energy efficiency and reducing manual intervention.",
      icon: <Lightbulb className="w-8 h-8" />,
      technologies: ["Arduino", "LDR Sensors", "IoT", "C++", "Circuit Design"],
      features: [
        "Automatic light detection and control",
        "Energy efficient operation",
        "Weather-resistant design",
        "Cost-effective implementation"
      ],
      type: "Hardware/IoT",
      color: "accent"
    },
    {
      title: "Stroke Disease Detection using Machine Learning",
      description: "Developed a machine learning model to predict stroke risk using medical data. Applied cross-validation techniques and feature importance analysis to achieve high accuracy in identifying high-risk patients.",
      icon: <Brain className="w-8 h-8" />,
      technologies: ["Python", "Machine Learning", "Scikit-learn", "Pandas", "NumPy"],
      features: [
        "Cross-validation for model reliability",
        "Feature importance analysis",
        "High accuracy prediction",
        "Healthcare data processing"
      ],
      type: "Machine Learning",
      color: "success"
    }
  ];

  const getIconBgColor = (color: string) => {
    switch (color) {
      case 'accent': return 'bg-accent/10 text-accent';
      case 'success': return 'bg-success/10 text-success';
      default: return 'bg-primary/10 text-primary';
    }
  };

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Showcase of innovative projects that demonstrate my technical skills and 
            problem-solving approach across different domains.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-strong transition-all duration-500 hover:scale-105 border-border/50 bg-gradient-card overflow-hidden"
            >
              <CardContent className="p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-xl ${getIconBgColor(project.color)}`}>
                      {project.icon}
                    </div>
                    <div>
                      <Badge variant="outline" className="mb-2">
                        {project.type}
                      </Badge>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3 flex items-center">
                    <Zap className="w-4 h-4 mr-2 text-accent" />
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex} 
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <ArrowRight className="w-3 h-3 mr-2 text-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary"
                        className="hover:scale-110 transition-transform duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t border-border/50">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 group/btn"
                  >
                    <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                    View Code
                  </Button>
                  <Button 
                    variant="default" 
                    size="sm" 
                    className="flex-1 group/btn"
                  >
                    <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:translate-x-1 transition-transform" />
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Coming Soon Section */}
        <Card className="bg-gradient-to-r from-muted/50 to-muted/30 border-dashed border-2 border-muted-foreground/30">
          <CardContent className="p-12 text-center">
            <div className="max-w-md mx-auto">
              <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-6">
                <Heart className="w-8 h-8 text-primary animate-pulse" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                More Exciting Projects Coming Soon!
              </h3>
              <p className="text-muted-foreground mb-6">
                I'm constantly working on new innovative projects. Stay tuned for updates 
                on cutting-edge solutions in web development, AI, and automation.
              </p>
              <Button variant="outline" className="group">
                Get Notified
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProjectsSection;