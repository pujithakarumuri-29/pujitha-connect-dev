import React, { useState } from 'react';
import { Mail, Linkedin, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('access_key', 'a5df13e0-fd7e-4357-a0ef-b967d6cd9f08');
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('subject', formData.subject);
      formDataToSend.append('message', formData.message);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        setSubmitStatus('success');
        setStatusMessage('✅ Thank you! Your message has been sent.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setSubmitStatus('error');
      setStatusMessage('❌ Sorry, there was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
      // Clear status message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
        setStatusMessage('');
      }, 5000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'pujithakarumuri97@gmail.com',
      href: 'mailto:pujithakarumuri97@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8639500221',
      href: 'tel:+918639500221'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/k-pujitha-409b4830',
      href: 'https://linkedin.com/in/k-pujitha-409b4830'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Ballari, Karnataka, India',
      href: null
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-subtle">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Let's <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate or discuss opportunities? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Get In Touch</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I'm always open to discussing new opportunities, collaborating on interesting projects, 
              or simply connecting with fellow developers and industry professionals.
            </p>

            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-card border border-card-border rounded-lg hover-lift transition-smooth">
                  <div className="bg-gradient-to-br from-primary to-secondary p-3 rounded-lg">
                    <info.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{info.label}</div>
                    {info.href ? (
                      <a 
                        href={info.href}
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="font-medium text-foreground hover:text-primary transition-smooth"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="font-medium text-foreground">{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Connect */}
            <div className="flex space-x-4">
              <a 
                href="mailto:pujithakarumuri97@gmail.com"
                className="btn-secondary flex-1 text-center"
              >
                <Mail className="inline-block mr-2 h-5 w-5" />
                Send Email
              </a>
              <a 
                href="https://linkedin.com/in/k-pujitha-409b4830"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline flex-1 text-center"
              >
                <Linkedin className="inline-block mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-scale-in">
            <form onSubmit={handleSubmit} className="card-professional space-y-6">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Send Message</h3>
              
              <input type="hidden" name="access_key" value="a5df13e0-fd7e-4357-a0ef-b967d6cd9f08" />
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="form-textarea"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              {/* Status Message */}
              {submitStatus !== 'idle' && (
                <div className={`flex items-center space-x-2 p-4 rounded-lg ${
                  submitStatus === 'success' 
                    ? 'bg-green-100 text-green-700 border border-green-200' 
                    : 'bg-red-100 text-red-700 border border-red-200'
                }`}>
                  {submitStatus === 'success' ? (
                    <CheckCircle className="h-5 w-5" />
                  ) : (
                    <AlertCircle className="h-5 w-5" />
                  )}
                  <span>{statusMessage}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-hero w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="inline-block animate-spin mr-2">⏳</div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="inline-block mr-2 h-5 w-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;