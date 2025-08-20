import React from 'react';
import { Trophy, Users, Calendar, MapPin, Award, Code2 } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'State-Level Hackathon',
      organization: 'GM University, Davangere',
      type: 'Competition',
      date: 'December 2024',
      location: 'Davangere',
      icon: Code2,
      description: 'Collaborated in a 24-hour hackathon, building innovative solutions under tight deadlines and working effectively in a team environment.',
      highlights: [
        'Developed innovative solutions under pressure',
        'Collaborated with diverse team members',
        'Applied problem-solving skills in real-time',
        'Demonstrated ability to work under tight deadlines'
      ]
    },
    {
      title: 'Kriya Tech Event - Multiple Victories',
      organization: 'BITM College',
      type: 'Competition',
      date: 'December 2023',
      location: 'BITM',
      icon: Trophy,
      description: 'Achieved 1st place in multiple technical competitions including Competitive Coding, Debugging, Innovative Idea Pitching, and Problem-Solving Hunt.',
      highlights: [
        '1st Place - Competitive Coding',
        '1st Place - Debugging Challenge',
        '1st Place - Innovative Idea Pitching',
        '1st Place - Problem-Solving Hunt'
      ]
    },
    {
      title: 'HTML & CSS Workshop',
      organization: 'BITM College',
      type: 'Workshop',
      date: 'November 2024',
      location: 'BITM',
      icon: Users,
      description: 'Gained hands-on experience in responsive web design and modern styling techniques through intensive workshop sessions.',
      highlights: [
        'Learned responsive web design principles',
        'Mastered modern CSS techniques',
        'Built practical web projects',
        'Enhanced front-end development skills'
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Experience & <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Events</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey through hackathons, competitions, and learning experiences
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <div key={index} className="relative animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
              {/* Timeline Line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-6 top-20 w-0.5 h-24 bg-gradient-to-b from-primary to-secondary opacity-50"></div>
              )}
              
              <div className="flex items-start space-x-6 mb-12">
                {/* Icon */}
                <div className="bg-gradient-to-br from-primary to-secondary p-3 rounded-full flex-shrink-0 hover-glow">
                  <experience.icon className="h-6 w-6 text-white" />
                </div>

                {/* Content */}
                <div className="card-professional flex-1 hover-lift">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{experience.title}</h3>
                      <p className="text-lg text-primary font-medium mb-2">{experience.organization}</p>
                    </div>
                    
                    <div className="flex flex-col md:items-end space-y-1">
                      <div className="flex items-center text-sm text-muted-foreground space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{experience.date}</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground space-x-2">
                        <MapPin className="h-4 w-4" />
                        <span>{experience.location}</span>
                      </div>
                      <span className="bg-secondary/20 text-secondary px-2 py-1 rounded-full text-xs font-medium">
                        {experience.type}
                      </span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {experience.description}
                  </p>

                  {/* Highlights */}
                  <div>
                    <h4 className="font-medium text-foreground mb-3 flex items-center">
                      <Award className="h-4 w-4 mr-2 text-primary" />
                      Key Achievements:
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {experience.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;