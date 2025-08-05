import React from "react";
import {
  ArrowRight,
  Code,
  Palette,
  Smartphone,
  Zap,
  Star,
  Users,
  Award,
  CheckCircle,
  TrendingUp,
  Shield,
  Clock,
  Globe,
  Lightbulb,
} from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../components/UI/Button";
import Card from "../components/UI/Card";

const Home: React.FC = () => {
  const features = [
    {
      icon: Code,
      title: "Web Development",
      description: "Modern, responsive websites built with cutting-edge technologies and best practices.",
      gradient: "from-primary-500 to-primary-600",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that enhance user experience and drive conversions.",
      gradient: "from-secondary-500 to-secondary-600",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications that deliver exceptional performance.",
      gradient: "from-accent-500 to-accent-600",
    },
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients", description: "Satisfied customers worldwide" },
    { icon: Code, value: "1000+", label: "Projects Completed", description: "Successful deliveries" },
    { icon: Award, value: "50+", label: "Awards Won", description: "Industry recognition" },
    { icon: Star, value: "5.0", label: "Average Rating", description: "Client satisfaction score" },
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Boost Your Growth",
      description: "Our solutions are designed to scale with your business and drive measurable results.",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security and 99.9% uptime guarantee for peace of mind.",
    },
    {
      icon: Clock,
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising on quality or attention to detail.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Solutions built for international markets with multi-language support.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      content:
        "ASCQUABAY transformed our digital presence completely. The team delivered beyond our expectations with exceptional attention to detail.",
      image: "img/image (5).png",
      rating: 5,
    },
    {
      name: "Michael Chen",
      content:
        "Working with ASCQUABAY was a game-changer. Their expertise in modern web technologies helped us achieve our ambitious goals.",
      image: "img/image (6).png",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      content:
        "The design and development quality exceeded our expectations. Our conversion rates increased by 150% after the launch.",
      image: "img/image (7).png",
      rating: 5,
    },
  ];

  const process = [
    { step: "01", title: "Discovery", description: "We dive deep into your business goals and requirements" },
    { step: "02", title: "Strategy", description: "We create a comprehensive plan tailored to your needs" },
    { step: "03", title: "Design", description: "We craft beautiful, user-centered designs" },
    { step: "04", title: "Development", description: "We build with cutting-edge technologies" },
    { step: "05", title: "Launch", description: "We deploy and ensure everything runs perfectly" },
    { step: "06", title: "Support", description: "We provide ongoing maintenance and support" },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-800"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/10 via-transparent to-secondary-600/10"></div>

        {/* Animated background elements */}
        <div className="absolute top-20 left-4 sm:left-10 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full opacity-20 animate-float"></div>
        <div
          className="absolute bottom-20 right-4 sm:right-10 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-r from-secondary-400 to-accent-400 rounded-full opacity-20 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-accent-400 to-primary-500 rounded-full opacity-15 animate-float"
          style={{ animationDelay: "4s" }}
        ></div>

        <div className="relative max-w-7xl mx-auto text-center">
          <div className="animate-slide-up">
            <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-700 dark:text-primary-300 text-xs sm:text-sm font-medium mb-6 sm:mb-8 animate-pulse-glow">
              <Lightbulb className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
              Trusted by businesses worldwide
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-neutral-900 dark:text-white mb-6 sm:mb-8 leading-tight">
              Build the{" "}
              <span className=" bg-primary-500  bg-clip-text text-transparent animate-pulse-glow">
                Future
              </span>
              <br />
              of Digital
            </h1>

            <p className="text-base sm:text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
              We create stunning digital experiences that help businesses grow, engage customers, and achieve their
              ambitious goals in the modern digital landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 px-4">
              <Link to="/contact">
                <Button
                  size="lg"
                  icon={ArrowRight}
                  iconPosition="right"
                  className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 shadow-glow hover:shadow-glow-lg w-full sm:w-auto"
                >
                  Start Your Project
                </Button>
              </Link>
              <Link to="/services">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
                >
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-neutral-50 dark:bg-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-slide-up">
            <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-700 dark:text-primary-300 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              What We Do Best
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-4 sm:mb-6">
              Our Core Services
            </h2>
            <p className="text-base sm:text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              We specialize in creating digital solutions that make a real difference for your business and customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                hover
                className="text-center group animate-slide-up border-0 shadow-medium hover:shadow-large"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div
                  className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 sm:mb-8 group-hover:scale-110 transition-transform duration-300 shadow-glow`}
                >
                  <feature.icon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900 dark:text-white mb-3 sm:mb-4">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300 text-base sm:text-lg leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-slide-right order-2 lg:order-1">
              <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-700 dark:text-primary-300 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                Why Choose Us
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-6 sm:mb-8">
                Built for Success
              </h2>
              <p className="text-base sm:text-xl text-neutral-600 dark:text-neutral-300 mb-8 sm:mb-12 leading-relaxed">
                We don't just build websites and apps – we create digital experiences that drive real business results
                and help you stay ahead of the competition.
              </p>

              <div className="space-y-4 sm:space-y-6">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 sm:space-x-4 animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 shadow-glow">
                      <benefit.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 dark:text-white mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed text-sm sm:text-base">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-slide-left order-1 lg:order-2">
              <div className="relative">
                <img
                  src="/img/IMG_2718.jpg"
                  alt="Team collaboration"
                  className="rounded-2xl sm:rounded-3xl shadow-large w-full"
                />
                <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white dark:bg-neutral-800 p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-large">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-success-500 to-success-600 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white">99.9%</div>
                      <div className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">Success Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">Our Tech Stack</h2>
            <p className="text-base sm:text-xl text-primary-100 max-w-2xl mx-auto">
              Cutting-edge technologies and tools we use to build exceptional digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
            {[
              { name: "Flutter", description: "Mobile App Development", icon: Smartphone },
              { name: "React Native", description: "Cross-Platform Apps", icon: Code },
              { name: "Next.js", description: "Website Development", icon: Globe },
              { name: "Node.js", description: "Backend Development", icon: Zap },
              { name: "Figma", description: "UI/UX Design", icon: Palette },
            ].map((tech, index) => (
              <div
                key={index}
                className="text-center text-white animate-scale-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <tech.icon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                </div>
                <div className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">{tech.name}</div>
                <div className="text-xs sm:text-sm text-primary-200">{tech.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-neutral-50 dark:bg-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-slide-up">
            <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-700 dark:text-primary-300 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              Our Process
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-4 sm:mb-6">
              How We Work
            </h2>
            <p className="text-base sm:text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              Our proven 6-step process ensures every project is delivered on time, within budget, and exceeds
              expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {process.map((item, index) => (
              <div key={index} className="animate-slide-up group" style={{ animationDelay: `${index * 0.1}s` }}>
                <Card hover className="h-full border-0 shadow-medium hover:shadow-large">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg sm:rounded-xl flex items-center justify-center text-white font-bold text-base sm:text-lg flex-shrink-0 shadow-glow group-hover:scale-110 transition-transform duration-300">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 dark:text-white mb-2 sm:mb-3">
                        {item.title}
                      </h3>
                      <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed text-sm sm:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-slide-up">
            <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-700 dark:text-primary-300 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              Client Success Stories
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-4 sm:mb-6">
              What Our Clients Say
            </h2>
            <p className="text-base sm:text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it – hear from the businesses we've helped transform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                hover
                className="animate-slide-up border-0 shadow-medium hover:shadow-large"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center space-x-1 mb-4 sm:mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-neutral-600 dark:text-neutral-300 mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-neutral-900 dark:text-white text-sm sm:text-base">
                      {testimonial.name}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-base sm:text-xl text-primary-100 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
              Join hundreds of successful businesses who have already transformed their digital presence with our expert
              solutions. Let's create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <Link to="/contact">
                <Button
                  variant="ghost"
                  size="lg"
                  icon={Zap}
                  iconPosition="right"
                  className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 bg-white text-primary-600 hover:bg-neutral-50 shadow-glow-lg w-full sm:w-auto"
                >
                  Start Your Project Today
                </Button>
              </Link>
              <Link to="/services">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 border-white text-white hover:bg-transparent hover:text-primary-600 w-full sm:w-auto"
                >
                  View Our Services
                </Button>
              </Link>
            </div>

            <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-8 text-primary-100">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="text-sm sm:text-base">100% Satisfaction Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
