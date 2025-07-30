import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, School, Award } from "lucide-react";

const AboutSection = () => {
  const education = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      degree: "B.Tech, Electronics and Communication Engineering",
      institution: "Sri Indu College of Engineering and Technology, Hyderabad",
      period: "2020–2024",
      type: "primary"
    },
    {
      icon: <School className="w-6 h-6" />,
      degree: "Intermediate (MPC)",
      institution: "SR Junior College, Hyderabad",
      period: "2018–2020",
      type: "secondary"
    },
    {
      icon: <Award className="w-6 h-6" />,
      degree: "Secondary School Certificate",
      institution: "Telangana Model School, Nalgonda",
      period: "2017–2018",
      type: "secondary"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Bio */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Personal Bio
            </h3>
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
              <p className="mb-4">
                I'm a recent Electronics and Communication Engineering graduate from Sri Indu College of Engineering and Technology, Hyderabad. I specialize in full stack web development and have hands-on experience with both front-end and back-end technologies.
              </p>
              <p className="mb-4">
                I've worked on innovative projects ranging from IoT-based automation systems to machine learning models for healthcare. I'm known for my problem-solving abilities, teamwork, and ability to learn new technologies quickly.
              </p>
              <p>
                I thrive in environments where creativity, innovation, and learning are encouraged. My passion lies in building smart solutions that make a real difference in people's lives.
              </p>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Educational Background
            </h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card 
                  key={index} 
                  className={`transition-all duration-300 hover:shadow-medium hover:scale-105 ${
                    edu.type === 'primary' ? 'border-primary/20 bg-gradient-card' : ''
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`p-2 rounded-lg ${
                        edu.type === 'primary' 
                          ? 'bg-primary/10 text-primary' 
                          : 'bg-accent/10 text-accent'
                      }`}>
                        {edu.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">
                          {edu.degree}
                        </h4>
                        <p className="text-muted-foreground mb-2">
                          {edu.institution}
                        </p>
                        <span className="text-sm text-accent font-medium">
                          {edu.period}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;