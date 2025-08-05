import React, { useState, useRef } from "react";
import { Mail, Phone, MapPin, Send, Check, Loader2 } from "lucide-react";
import emailjs from '@emailjs/browser';
import Card from "../components/UI/Card";
import Button from "../components/UI/Button";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (form.current) {
      setIsLoading(true);
      emailjs
        .sendForm('service_9v06blm', 'template_z9va2a9', form.current, {
          publicKey: 'apK5Rx28LxN1bKxDz',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            setIsSubmitted(true);
            form.current?.reset();
            setTimeout(() => setIsSubmitted(false), 3000);
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        )
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "hello@ascquabay.com",
      description: "Send us an email anytime",
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+233 (555) 123-4567",
      description: "Mon-Fri from 9am to 6pm",
    },
    {
      icon: MapPin,
      title: "Office",
      details: "Accra, Ghana",
      description: "Come visit our office",
    },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-slide-up">
            <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 dark:text-white mb-6">
              Get In{" "}
              <span className=" bg-primary-600 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              Ready to start your project? We'd love to hear from you. Send us a message and we'll respond as soon as
              possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-up">
              <Card padding="lg">
                <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-8">Send us a message</h2>

                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-success-100 dark:bg-success-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="h-8 w-8 text-success-600 dark:text-success-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">Message Sent!</h3>
                    <p className="text-neutral-600 dark:text-neutral-300">
                      Thank you for your message. We'll get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                        >
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                        >
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white"
                        placeholder="Your Subject"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      icon={isLoading ? Loader2 : Send} 
                      iconPosition="right" 
                      className={`w-full ${isLoading ? 'animate-spin' : ''}`}
                      disabled={isLoading}
                    >
                      {isLoading ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                )}
              </Card>
            </div>

            {/* Contact Information */}
            <div className="animate-slide-up">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
                    Let's start a conversation
                  </h2>
                  <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    We're here to help and answer any question you might have. We look forward to hearing from you.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-1">{info.title}</h3>
                          <p className="text-primary-600 dark:text-primary-400 font-medium mb-1">{info.details}</p>
                          <p className="text-neutral-600 dark:text-neutral-300 text-sm">{info.description}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

              </div>
            </div>
          </div>
          
          {/* Map */}
          <div className="mt-12">
            <Card className="overflow-hidden p-0">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31766.00236720213!2d-0.20664530876878606!3d5.603856890117464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9b001e82c869%3A0x82f94c1540a5f24!2sAirport%20Residential%20Area%2C%20Accra!5e0!3m2!1sen!2sgh!4v1752322758632!5m2!1sen!2sgh" 
                className="w-full h-80" 
                style={{border: 0}} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
              Find answers to common questions about our services and process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "How long does a typical project take?",
                answer:
                  "Project timelines vary depending on complexity, but most websites take 4-8 weeks from start to finish.",
              },
              {
                question: "Do you provide ongoing support?",
                answer: "Yes! We offer maintenance packages and ongoing support to keep your website running smoothly.",
              },
              {
                question: "What is your design process?",
                answer:
                  "We start with discovery, create wireframes, design mockups, and iterate based on your feedback.",
              },
              {
                question: "Do you work with small businesses?",
                answer: "Absolutely! We work with businesses of all sizes, from startups to enterprise companies.",
              },
            ].map((faq, index) => (
              <Card key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">{faq.question}</h3>
                <p className="text-neutral-600 dark:text-neutral-300">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
