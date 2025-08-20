import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, BookOpen } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: 'B.E. in Artificial Intelligence & Machine Learning',
      institution: 'Ballari Institute of Technology and Management, Ballari',
      grade: 'CGPA: 7.81',
      period: 'Present',
      status: 'Current',
      icon: GraduationCap,
      description: 'Pursuing comprehensive education in AI/ML with focus on practical applications and cutting-edge technologies.',
      coursework: [
        'Data Structures & Algorithms',
        'Machine Learning Fundamentals',
        'Artificial Intelligence',
        'Database Management Systems',
        'Software Engineering',
        'Python Programming'
      ]
    },
    {
      degree: 'MPC (Class XII)',
      institution: 'Narayana Junior College, Anantapuramu',
      grade: '63.6%',
      period: '2020 – 2022',
      status: 'Completed',
      icon: BookOpen,
      description: 'Completed higher secondary education with Mathematics, Physics, and Chemistry, building strong analytical foundations.',
      coursework: [
        'Mathematics',
        'Physics',
        'Chemistry',
        'English',
        'Analytical Reasoning'
      ]
    }
  ];

  return (
    <section id="education" className="section-padding bg-gradient-subtle">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Educational <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic foundation in technology and continuous learning path
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {educationData.map((edu, index) => (
            <div key={index} className="card-professional hover-lift animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-6">
                {/* Icon & Status */}
                <div className="flex items-center lg:flex-col lg:items-center space-x-4 lg:space-x-0 lg:space-y-3 mb-6 lg:mb-0">
                  <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-full">
                    <edu.icon className="h-8 w-8 text-white" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    edu.status === 'Current' 
                      ? 'bg-primary/20 text-primary border border-primary/30' 
                      : 'bg-secondary/20 text-secondary border border-secondary/30'
                  }`}>
                    {edu.status}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{edu.degree}</h3>
                      <p className="text-lg text-primary font-medium mb-2">{edu.institution}</p>
                    </div>
                    
                    <div className="flex flex-col md:items-end space-y-2">
                      <div className="flex items-center text-sm text-muted-foreground space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Award className="h-4 w-4 text-primary" />
                        <span className="font-semibold text-foreground">{edu.grade}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {edu.description}
                  </p>

                  {/* Coursework */}
                  <div>
                    <h4 className="font-medium text-foreground mb-3">Key Coursework:</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {edu.coursework.map((course, courseIndex) => (
                        <div key={courseIndex} className="bg-accent/50 px-3 py-2 rounded-lg text-sm text-foreground hover:bg-accent transition-smooth">
                          {course}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Academic Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 animate-fade-in">
          <div className="text-center card-professional">
            <div className="text-3xl font-bold text-primary mb-2">7.81</div>
            <div className="text-muted-foreground">Current CGPA</div>
          </div>
          <div className="text-center card-professional">
            <div className="text-3xl font-bold text-secondary mb-2">AI/ML</div>
            <div className="text-muted-foreground">Specialization</div>
          </div>
          <div className="text-center card-professional">
            <div className="text-3xl font-bold text-primary mb-2">4+</div>
            <div className="text-muted-foreground">Certifications</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;