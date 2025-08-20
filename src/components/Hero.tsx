import React from 'react';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import heroBackground from '@/assets/hero-bg.jpg';

const Hero = () => {
  const handleDownloadResume = () => {
    // Create a download link for resume
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // You'll need to add the resume PDF to public folder
    link.download = 'K_Pujitha_Resume.pdf';
    link.click();
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-secondary/80"></div>
      </div>

      {/* Animated Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-secondary/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-primary/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-secondary/30 rounded-full animate-bounce"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            K. <span className="bg-gradient-to-r from-secondary-light to-white bg-clip-text text-transparent">Pujitha</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-white/90 mb-4 font-medium">
            Aspiring Software Engineer | AI & ML Enthusiast
          </h2>
          
          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Building impactful solutions with code, creativity, and continuous learning.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <button 
              onClick={handleDownloadResume}
              className="btn-hero group"
            >
              <Download className="inline-block mr-2 h-5 w-5 group-hover:animate-bounce" />
              Download Resume
            </button>
            
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-xl font-semibold hover:bg-white/20 hover:scale-105 transition-spring"
            >
              Let's Connect
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a 
              href="mailto:pujithakarumuri97@gmail.com"
              className="bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 hover:scale-110 transition-spring text-white"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com/in/k-pujitha-409b4830"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 hover:scale-110 transition-spring text-white"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="https://github.com/pujithakarumuri-29"
              target="_blank"
              rel="noopener noreferrer" 
              className="bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 hover:scale-110 transition-spring text-white"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;