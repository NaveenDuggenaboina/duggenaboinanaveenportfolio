import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, School, Award, Calendar, MapPin } from "lucide-react";

const AboutSection = () => {
  const education = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      degree: "B.Tech, Electronics and Communication Engineering",
      institution: "Sri Indu College of Engineering and Technology",
      location: "Hyderabad",
      period: "2020–2024",
      type: "primary",
      description: "Specialized in modern electronics, communication systems, and full-stack development"
    },
    {
      icon: <School className="w-6 h-6" />,
      degree: "Intermediate (MPC)",
      institution: "SR Junior College",
      location: "Hyderabad",
      period: "2018–2020",
      type: "secondary",
      description: "Mathematics, Physics, and Chemistry with strong analytical foundation"
    },
    {
      icon: <Award className="w-6 h-6" />,
      degree: "Secondary School Certificate",
      institution: "Telangana Model School",
      location: "Nalgonda",
      period: "2017–2018",
      type: "secondary",
      description: "Strong academic foundation with focus on STEM subjects"
    }
  ];

  const highlights = [
    { number: "4+", label: "Years of Study" },
    { number: "10+", label: "Technologies Learned" },
    { number: "2+", label: "Major Projects" },
    { number: "∞", label: "Passion for Learning" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-accent relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-32 h-32 bg-primary/5 rounded-full"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-accent/10 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <Badge className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20">
            About Me
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Designing Solutions, Not{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Just Visuals
            </span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            I believe in creating technology that makes a real difference. Every line of code, 
            every design decision, and every solution is crafted with purpose and passion.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {highlights.map((stat, index) => (
            <Card key={index} className="text-center bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <p className="text-muted-foreground text-sm">
                  {stat.label}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Bio */}
          <div className="space-y-8">
            <Card className="bg-card/80 backdrop-blur-sm border-border/50 shadow-medium">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  My Story
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I'm a recent Electronics and Communication Engineering graduate from Sri Indu College 
                    of Engineering and Technology, Hyderabad. My journey in technology began with curiosity 
                    about how things work and evolved into a passion for building solutions that matter.
                  </p>
                  <p>
                    I specialize in full stack web development and have hands-on experience with both 
                    front-end and back-end technologies. From IoT-based automation systems to machine 
                    learning models for healthcare, I've worked on diverse projects that solve real-world problems.
                  </p>
                  <p>
                    What sets me apart is my ability to bridge the gap between complex technical concepts 
                    and practical, user-friendly solutions. I thrive in collaborative environments where 
                    creativity meets innovation.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-6">
                  <Badge variant="secondary">Problem Solving</Badge>
                  <Badge variant="secondary">Team Collaboration</Badge>
                  <Badge variant="secondary">Quick Learning</Badge>
                  <Badge variant="secondary">Innovation</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center">
              <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center mr-3">
                <School className="w-5 h-5 text-accent" />
              </div>
              Educational Journey
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card 
                  key={index} 
                  className={`group transition-all duration-300 hover:shadow-medium hover:scale-105 bg-card/80 backdrop-blur-sm border-border/50 ${
                    edu.type === 'primary' ? 'ring-2 ring-primary/20' : ''
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-lg ${
                        edu.type === 'primary' 
                          ? 'bg-primary/10 text-primary' 
                          : 'bg-accent/10 text-accent'
                      }`}>
                        {edu.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {edu.degree}
                        </h4>
                        <p className="text-muted-foreground mb-2 font-medium">
                          {edu.institution}
                        </p>
                        <p className="text-sm text-muted-foreground mb-3">
                          {edu.description}
                        </p>
                        <div className="flex flex-wrap gap-4 text-sm">
                          <span className="flex items-center text-accent">
                            <Calendar className="w-4 h-4 mr-1" />
                            {edu.period}
                          </span>
                          <span className="flex items-center text-muted-foreground">
                            <MapPin className="w-4 h-4 mr-1" />
                            {edu.location}
                          </span>
                        </div>
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