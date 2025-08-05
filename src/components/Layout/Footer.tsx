import React from "react";
import { Link } from "react-router-dom";
import { Zap, Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 dark:bg-neutral-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2">
              <div className="p-2  bg-primary-500  rounded-lg">
                <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <span className="text-lg sm:text-xl font-bold">ASCQUABAY</span>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Professional web development and design services that help businesses create stunning digital experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors duration-200">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Services",  "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-neutral-400 hover:text-primary-400 transition-colors duration-200 text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              {["Web Development", "UI/UX Design", "Mobile Apps", "E-commerce", "Consulting"].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-neutral-400 hover:text-primary-400 transition-colors duration-200 text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-semibold">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary-400 flex-shrink-0" />
                <span className="text-neutral-400 text-sm">hello@ascquabay.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary-400 flex-shrink-0" />
                <span className="text-neutral-400 text-sm">+233 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary-400 flex-shrink-0" />
                <span className="text-neutral-400 text-sm">Accra, Ghana</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-neutral-400 text-sm text-center sm:text-left">© 2024 ASCQUABAY. All rights reserved.</p>
            <div className="flex space-x-4 sm:space-x-6">
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors duration-200 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors duration-200 text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
