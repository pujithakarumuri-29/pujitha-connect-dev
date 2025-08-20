import React from 'react';
import { Trophy, Medal, Award, Star, Users, BookOpen, Calendar, Target } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: 'State-Level Hackathon Participant',
      organization: 'GM University, Davangere',
      date: 'December 2024',
      icon: Trophy,
      category: 'Competition',
      description: 'Successfully participated in a competitive 24-hour hackathon, demonstrating ability to innovate and collaborate under pressure.',
      impact: 'Gained valuable experience in rapid prototyping and team collaboration'
    },
    {
      title: 'Kriya Tech Event - Quadruple Victory',
      organization: 'BITM College',
      date: 'December 2023',
      icon: Medal,
      category: 'Competition',
      description: 'Achieved unprecedented success by securing 1st place in four different categories at the premier tech event.',
      impact: 'Demonstrated versatility across multiple technical disciplines',
      awards: [
        '🏆 1st Place - Competitive Coding',
        '🏆 1st Place - Debugging Challenge', 
        '🏆 1st Place - Innovative Idea Pitching',
        '🏆 1st Place - Problem-Solving Hunt'
      ]
    },
    {
      title: 'HTML & CSS Workshop Completion',
      organization: 'BITM College',
      date: 'November 2024',
      icon: BookOpen,
      category: 'Learning',
      description: 'Successfully completed intensive workshop on modern web development techniques and responsive design principles.',
      impact: 'Enhanced front-end development skills and design sensibility'
    }
  ];

  const certifications = [
    {
      title: 'Enterprise Grade AI',
      issuer: 'IBM',
      date: 'July 2024',
      icon: Star,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Data Structures & Algorithms',
      issuer: 'Infosys Springboard',
      date: 'March 2024',
      icon: Target,
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Python Programming',
      issuer: 'EZTS',
      date: 'May 2024',
      icon: Award,
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'HTML & CSS',
      issuer: 'BITM',
      date: 'November 2024',
      icon: BookOpen,
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section id="achievements" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Achievements & <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Recognition</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognition for excellence in competitions, learning achievements, and professional certifications
          </p>
        </div>

        {/* Major Achievements */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Major Achievements</h3>
          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="card-professional hover-lift animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-6">
                  {/* Icon & Category */}
                  <div className="flex items-center lg:flex-col lg:items-center space-x-4 lg:space-x-0 lg:space-y-3 mb-6 lg:mb-0">
                    <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-full">
                      <achievement.icon className="h-8 w-8 text-white" />
                    </div>
                    <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium border border-primary/30">
                      {achievement.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-foreground mb-2">{achievement.title}</h4>
                        <p className="text-lg text-primary font-medium mb-2">{achievement.organization}</p>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{achievement.date}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {achievement.description}
                    </p>

                    {achievement.awards && (
                      <div className="mb-4">
                        <h5 className="font-medium text-foreground mb-3">Awards Won:</h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {achievement.awards.map((award, awardIndex) => (
                            <div key={awardIndex} className="bg-gradient-to-r from-primary/10 to-secondary/10 px-3 py-2 rounded-lg text-sm font-medium text-foreground border border-primary/20">
                              {award}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="bg-accent/50 p-3 rounded-lg">
                      <div className="flex items-start space-x-2">
                        <Star className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-foreground"><strong>Impact:</strong> {achievement.impact}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="animate-fade-in">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Professional Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="card-skill group hover-glow" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-center">
                  <div className={`bg-gradient-to-br ${cert.color} p-4 rounded-full w-fit mx-auto mb-4 group-hover:scale-110 transition-smooth`}>
                    <cert.icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{cert.title}</h4>
                  <p className="text-primary font-medium mb-2">{cert.issuer}</p>
                  <div className="flex items-center justify-center text-sm text-muted-foreground space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span>{cert.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="grid md:grid-cols-4 gap-6 mt-16 animate-scale-in">
          <div className="text-center card-professional">
            <div className="text-3xl font-bold text-primary mb-2">4</div>
            <div className="text-sm text-muted-foreground">First Place Wins</div>
          </div>
          <div className="text-center card-professional">
            <div className="text-3xl font-bold text-secondary mb-2">4</div>
            <div className="text-sm text-muted-foreground">Certifications</div>
          </div>
          <div className="text-center card-professional">
            <div className="text-3xl font-bold text-primary mb-2">3</div>
            <div className="text-sm text-muted-foreground">Major Events</div>
          </div>
          <div className="text-center card-professional">
            <div className="text-3xl font-bold text-secondary mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;