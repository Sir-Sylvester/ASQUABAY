import React from 'react';
import { Code, Palette, Smartphone, Globe, ShoppingCart, BarChart3, ArrowRight } from 'lucide-react';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies like React, Vue, and Node.js.',
      features: ['Responsive Design', 'Performance Optimization', 'SEO Friendly', 'Modern Frameworks'],
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that enhance user experience and drive conversions.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps for iOS and Android devices.',
      features: ['Native iOS/Android', 'React Native', 'Flutter', 'App Store Deployment'],
    },
    {
      icon: Globe,
      title: 'Digital Strategy',
      description: 'Comprehensive digital strategies to help your business succeed online.',
      features: ['Market Analysis', 'Competitor Research', 'Growth Planning', 'Brand Strategy'],
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Solutions',
      description: 'Complete e-commerce platforms with payment integration and inventory management.',
      features: ['Shopping Cart', 'Payment Gateway', 'Inventory Management', 'Analytics'],
    },
    {
      icon: BarChart3,
      title: 'Analytics & SEO',
      description: 'Data-driven insights and search engine optimization to improve your online presence.',
      features: ['Google Analytics', 'SEO Optimization', 'Performance Tracking', 'Reporting'],
    },
  ];

  const process = [
    { step: '01', title: 'Discovery', description: 'We learn about your business, goals, and requirements.' },
    { step: '02', title: 'Planning', description: 'We create a detailed project plan and timeline.' },
    { step: '03', title: 'Design', description: 'We craft beautiful designs that align with your brand.' },
    { step: '04', title: 'Development', description: 'We build your project using cutting-edge technologies.' },
    { step: '05', title: 'Testing', description: 'We thoroughly test everything to ensure quality.' },
    { step: '06', title: 'Launch', description: 'We deploy your project and provide ongoing support.' },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-slide-up">
            <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 dark:text-white mb-6">
              Our{' '}
              <span className=" bg-primary-600  bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              We offer comprehensive digital solutions to help your business succeed in the modern world.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                hover 
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-primary-500  rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-neutral-600 dark:text-neutral-300">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between pt-4 border-t border-neutral-200 dark:border-neutral-700">
                  <Button variant="ghost" size="sm" icon={ArrowRight} iconPosition="right">
                    Learn More
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4">
              Our Process
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
              We follow a proven process to ensure every project is delivered on time and exceeds expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <div 
                key={index} 
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and see how we can help bring your vision to life.
            </p>
            <Link to={'/contact'}>
            <Button size="lg" icon={ArrowRight} iconPosition="right">
              Start Your Project
            </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;