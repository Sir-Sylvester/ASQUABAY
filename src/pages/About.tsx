import React from "react";
import { Users, Target, Award, Heart } from "lucide-react";
import Card from "../components/UI/Card";

const About: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "We stay ahead of the curve with cutting-edge technologies and creative solutions.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work closely with our clients to understand their needs and exceed expectations.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for perfection in every project, delivering quality that speaks for itself.",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "We love what we do, and it shows in the dedication we bring to every project.",
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Creative Director",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      name: "Michael Chen",
      role: "Lead Developer",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      name: "Emily Rodriguez",
      role: "UX Designer",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 dark:text-white mb-6">
              About{" "}
              <span className=" bg-primary-600 bg-clip-text text-transparent">
                ASCQUABAY
              </span>
            </h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              We're a passionate team of designers and developers dedicated to creating exceptional digital experiences
              that help businesses thrive in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold text-neutral-900 dark:text-white mb-6">Our Story</h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed">
                Founded in 2020, ASCQUABAY emerged from a simple belief: that great design and development should be
                accessible to businesses of all sizes. What started as a small team of passionate creators has grown
                into a full-service digital agency.
              </p>
              <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
                Today, we've helped over 500 businesses transform their digital presence, from startups looking to make
                their mark to established companies ready to evolve for the digital future.
              </p>
            </div>
            <div className="animate-slide-up">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team working together"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4">Our Values</h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
              These core principles guide everything we do and shape how we work with our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                hover
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-primary-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">{value.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-300">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4">Meet Our Team</h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
              The talented individuals behind every successful project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                hover
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">{member.name}</h3>
                <p className="text-primary-600 dark:text-primary-400 font-medium">{member.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
