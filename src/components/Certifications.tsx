import React, { useState } from 'react';
import { Award, Calendar, ExternalLink, X, ZoomIn } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const certificates = [
  {
    id: 'html-css',
    title: 'Comprehensive Workshop on HTML and CSS',
    issuer: 'BITM (Ballari Institute of Technology and Management)',
    date: 'November 2024',
    image: '/certificates/html-css-certificate.png',
    description: 'Gained hands-on experience in responsive web design and styling techniques.',
    category: 'Web Development'
  },
  {
    id: 'dsa',
    title: 'Data Structures and Algorithms',
    issuer: 'Infosys Springboard',
    date: 'March 2024',
    image: '/certificates/dsa-certificate.png',
    description: 'Comprehensive course completion in fundamental algorithms and data structures.',
    category: 'Programming'
  },
  {
    id: 'enterprise-ai',
    title: 'Getting Started with Enterprise-grade AI',
    issuer: 'IBM',
    date: 'July 2024',
    image: '/certificates/ibm-certificate.png',
    description: 'Professional excellence in enterprise-level artificial intelligence applications.',
    category: 'Artificial Intelligence'
  },
  {
    id: 'python',
    title: 'Python Programming',
    issuer: 'EZTS',
    date: 'May 2024',
    image: null,
    description: 'Comprehensive Python programming certification covering core concepts and applications.',
    category: 'Programming'
  }
];

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<any>(null);

  const openModal = (cert: any) => {
    setSelectedCert(cert);
  };

  const closeModal = () => {
    setSelectedCert(null);
  };

  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <Award className="h-8 w-8 text-primary mr-2" />
            <h2 className="text-4xl font-bold text-foreground">Professional Certifications</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development through industry-recognized certifications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <Card 
              key={cert.id} 
              className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-card border-card-border overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                {cert.image ? (
                  <div className="relative overflow-hidden bg-muted h-64">
                    <img 
                      src={cert.image} 
                      alt={`${cert.title} Certificate`}
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button
                        onClick={() => openModal(cert)}
                        className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center space-x-2"
                      >
                        <ZoomIn className="h-4 w-4" />
                        <span>View Certificate</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="h-64 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <div className="text-center">
                      <Award className="h-16 w-16 text-primary mx-auto mb-4" />
                      <p className="text-muted-foreground font-medium">Certificate Available</p>
                    </div>
                  </div>
                )}
                
                <div className="p-6">
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      {cert.category}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-primary font-semibold mb-2">{cert.issuer}</p>
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{cert.date}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certification Stats */}
        <div className="grid md:grid-cols-4 gap-6 mt-16 animate-scale-in">
          <div className="text-center card-professional">
            <div className="text-3xl font-bold text-primary mb-2">4</div>
            <div className="text-sm text-muted-foreground">Certifications Earned</div>
          </div>
          <div className="text-center card-professional">
            <div className="text-3xl font-bold text-secondary mb-2">3</div>
            <div className="text-sm text-muted-foreground">Industry Partners</div>
          </div>
          <div className="text-center card-professional">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Completion Rate</div>
          </div>
          <div className="text-center card-professional">
            <div className="text-3xl font-bold text-secondary mb-2">2024</div>
            <div className="text-sm text-muted-foreground">Active Year</div>
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="relative max-w-4xl max-h-[90vh] bg-white rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
            <img 
              src={selectedCert.image} 
              alt={`${selectedCert.title} Certificate`}
              className="w-full h-full object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
              <h3 className="text-xl font-bold mb-2">{selectedCert.title}</h3>
              <p className="text-sm opacity-90">{selectedCert.issuer} • {selectedCert.date}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;