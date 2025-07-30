import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="hover:shadow-medium transition-all duration-300 hover:scale-105 border-primary/20 bg-gradient-card">
            <CardContent className="p-8">
              <div className="flex items-start space-x-6">
                {/* Company Icon */}
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Building className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        Python Programming Intern
                      </h3>
                      <p className="text-accent font-semibold">Internshala</p>
                    </div>
                    <Badge variant="outline" className="w-fit mt-2 sm:mt-0">
                      <Calendar className="w-4 h-4 mr-1" />
                      Completed in 2024
                    </Badge>
                  </div>

                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Gained comprehensive knowledge in core and advanced Python programming concepts. 
                      Applied learned skills to develop small-scale automation projects, enhancing 
                      problem-solving capabilities and practical programming experience.
                    </p>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground">Key Achievements:</h4>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                        <li>Mastered core Python concepts including OOP, data structures, and algorithms</li>
                        <li>Developed automation scripts for process optimization</li>
                        <li>Applied Python libraries for data manipulation and analysis</li>
                        <li>Built small-scale projects demonstrating practical application of concepts</li>
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      <Badge variant="secondary">Python</Badge>
                      <Badge variant="secondary">Data Structures</Badge>
                      <Badge variant="secondary">Algorithms</Badge>
                      <Badge variant="secondary">Automation</Badge>
                      <Badge variant="secondary">Problem Solving</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;