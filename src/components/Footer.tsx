import React from 'react';
import { Heart, Mail, Linkedin, Github, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-card-border">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand & Description */}
          <div>
            <h3 className="font-bold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
              K. Pujitha
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Aspiring Software Engineer passionate about building innovative solutions 
              with AI/ML technologies. Always ready to learn and contribute to impactful projects.
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:pujithakarumuri97@gmail.com"
                className="bg-accent hover:bg-accent-hover p-2 rounded-lg transition-smooth"
                aria-label="Email"
              >
                <Mail className="h-5 w-5 text-foreground" />
              </a>
              <a 
                href="https://linkedin.com/in/k-pujitha-409b4830"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent hover:bg-accent-hover p-2 rounded-lg transition-smooth"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-foreground" />
              </a>
              <a 
                href="https://github.com/pujithakarumuri-29"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent hover:bg-accent-hover p-2 rounded-lg transition-smooth"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 text-foreground" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[
                { name: 'About', href: '#about' },
                { name: 'Skills', href: '#skills' },
                { name: 'Projects', href: '#projects' },
                { name: 'Experience', href: '#experience' },
                { name: 'Education', href: '#education' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <button
                  key={link.name}
                  onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-muted-foreground hover:text-primary transition-smooth"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Get In Touch</h4>
            <div className="space-y-3 text-muted-foreground">
              <div>
                <div className="font-medium text-foreground">Email</div>
                <a 
                  href="mailto:pujithakarumuri97@gmail.com"
                  className="hover:text-primary transition-smooth"
                >
                  pujithakarumuri97@gmail.com
                </a>
              </div>
              <div>
                <div className="font-medium text-foreground">Phone</div>
                <a 
                  href="tel:+918639500221"
                  className="hover:text-primary transition-smooth"
                >
                  +91 8639500221
                </a>
              </div>
              <div>
                <div className="font-medium text-foreground">Location</div>
                <span>Ballari, Karnataka, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-card-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-muted-foreground mb-4 md:mb-0">
            <span>© 2024 K. Pujitha. Built with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>and React</span>
          </div>
          
          <button
            onClick={scrollToTop}
            className="bg-gradient-to-r from-primary to-secondary p-3 rounded-full hover:scale-110 transition-spring shadow-card hover:shadow-glow"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5 text-white" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;