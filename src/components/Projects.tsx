import React from 'react';
import { ExternalLink, Github, Calendar, Layers, Dumbbell } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Flashcards – A Learning Web App',
      description: 'An interactive platform for creating, reviewing, and sharing flashcards with smooth animations and batch card creation functionality.',
      technologies: ['Python', 'Streamlit'],
      period: '10/2024 – 01/2025',
      icon: Layers,
      features: [
        'Interactive flashcard creation and review system',
        'Smooth animations and user-friendly interface',
        'Batch card creation for efficient study sessions',
        'Sharing capabilities for collaborative learning'
      ]
    },
    {
      title: 'Custom Workout Planning App',
      description: 'A personalized workout planner with database integration, routine tracking, and an intuitive UI for multiple exercise sessions.',
      technologies: ['Python', 'Streamlit'],
      period: '12/2023 – 02/2024',
      icon: Dumbbell,
      features: [
        'Personalized workout plan generation',
        'Database integration for user data',
        'Exercise routine tracking and progress monitoring',
        'Intuitive UI for managing multiple workout sessions'
      ]
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gradient-subtle">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Featured <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing my practical experience in building web applications and solving real-world problems
          </p>
        </div>

        <div className="grid gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="card-project animate-slide-up group" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-br from-primary to-secondary p-3 rounded-lg group-hover:scale-110 transition-smooth">
                      <project.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                      <div className="flex items-center text-sm text-muted-foreground space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{project.period}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button className="bg-accent hover:bg-accent-hover p-2 rounded-lg transition-smooth">
                      <Github className="h-5 w-5 text-foreground" />
                    </button>
                    <button className="bg-primary hover:bg-primary-dark p-2 rounded-lg transition-smooth">
                      <ExternalLink className="h-5 w-5 text-white" />
                    </button>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="font-medium text-foreground mb-3">Key Features:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-gradient-to-r from-primary/10 to-secondary/10 text-primary px-3 py-1 rounded-full text-sm font-medium border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 animate-fade-in">
          <p className="text-muted-foreground mb-6">Want to see more of my work?</p>
          <a 
            href="https://github.com/pujithakarumuri-29"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <Github className="inline-block mr-2 h-5 w-5" />
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;