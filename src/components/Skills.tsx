import React from 'react';
import { Code, Globe, Database, Settings, FileCode, Terminal } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming',
      icon: Code,
      skills: ['Python', 'C', 'SQL', 'DSA']
    },
    {
      title: 'Web Development',
      icon: Globe,
      skills: ['HTML', 'CSS', 'Streamlit']
    },
    {
      title: 'Tools',
      icon: Settings,
      skills: ['VS Code', 'Jupyter Notebook', 'GitHub']
    },
    {
      title: 'Environments',
      icon: Terminal,
      skills: ['Windows']
    }
  ];

  const certifications = [
    'Enterprise Grade AI - IBM',
    'Data Structures & Algorithms - Infosys',
    'Python Programming - EZTS',
    'HTML & CSS - BITM'
  ];

  return (
    <section id="skills" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Skills & <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and professional certifications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="card-skill animate-scale-in group" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-center mb-4">
                <div className="bg-gradient-to-br from-primary to-secondary p-3 rounded-full w-fit mx-auto mb-3 group-hover:scale-110 transition-smooth">
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-foreground">{category.title}</h3>
              </div>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="bg-accent/50 px-3 py-2 rounded-lg text-center text-sm font-medium text-foreground hover:bg-accent transition-smooth">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="animate-slide-up">
          <h3 className="text-2xl font-semibold text-center text-foreground mb-8">
            Professional Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="card-professional hover-lift">
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-br from-secondary to-primary p-2 rounded-lg">
                    <FileCode className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-medium text-foreground">{cert}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;