import React from 'react';
import { Code, Database, Brain, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Backend Development',
      description: 'Experienced in Python, C, and SQL with strong DSA fundamentals'
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Skilled in database integration and REST API development'
    },
    {
      icon: Brain,
      title: 'AI & ML Focus',
      description: 'Specialized in Artificial Intelligence and Machine Learning'
    },
    {
      icon: Zap,
      title: 'Problem Solving',
      description: 'Passionate about building solutions for real-world challenges'
    }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-subtle">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Aspiring Software Engineer with a Passion for Innovation
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm an aspiring software engineer with hands-on experience in backend development and 
              data structures & algorithms (DSA). My expertise lies in Python, C, and SQL, with 
              foundational knowledge of REST APIs and database management.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              What drives me is the opportunity to build AI-driven solutions that solve real-world 
              challenges. I believe in the power of continuous learning and am constantly exploring 
              new technologies to expand my skill set and create meaningful impact through code.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">7.81</div>
                <div className="text-sm text-muted-foreground">CGPA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid gap-6 animate-scale-in">
            {highlights.map((highlight, index) => (
              <div key={index} className="card-professional hover-glow">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-primary to-secondary p-3 rounded-lg">
                    <highlight.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{highlight.title}</h4>
                    <p className="text-muted-foreground text-sm">{highlight.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;