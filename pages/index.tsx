'use client';

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import {
  Send,
  Mail,
  MessageSquare,
  User,
  Phone,
  MapPin,
  Building,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Menu,
  X,
  Instagram,
  Facebook,
  Linkedin
} from 'lucide-react';

export default function Home() {
  const [form, setForm] = useState({
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:bandulaepa@gmail.com?subject=${encodeURIComponent(
      form.subject
    )}&body=${encodeURIComponent(`From: ${form.email}\n\n${form.message}`)}`;
    window.location.href = mailtoLink;
  };

  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolling, setIsScrolling] = useState(false);
  const [offsetY, setOffsetY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.pageYOffset);
      setShowScrollTop(window.scrollY > 300);
      
      // Determine active section
      const sections = ['home', 'about', 'projects', 'services', 'contact'];
      let current = 'home';
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
          }
        }
      });
      
      setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to scroll to top
  const scrollToTop = () => {
    setIsScrolling(true);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  };

  // Function to handle smooth scroll for navigation
  const scrollToSection = (sectionId) => {
    setIsScrolling(true);
    setIsMenuOpen(false);
    
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetPosition = element.offsetTop - 80;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    
    setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  };

  const services = [
    {
      icon: <Building className="h-8 w-8 mb-4 text-blue-600" />,
      title: "Architectural Design",
      description: "From concept to completion, we craft spaces that merge aesthetics with functionality."
    },
    {
      icon: <MapPin className="h-8 w-8 mb-4 text-blue-600" />,
      title: "Urban Planning",
      description: "Creating sustainable urban environments that enhance community living."
    },
    {
      icon: <User className="h-8 w-8 mb-4 text-blue-600" />,
      title: "Interior Design",
      description: "Crafting interiors that reflect your vision while maximizing spatial efficiency."
    },
    {
      icon: <Building className="h-8 w-8 mb-4 text-blue-600" />,
      title: "Restoration",
      description: "Breathing new life into historical buildings while preserving their heritage."
    }
  ];

  const featuredProjects = [
    {
      title: "Modern Villa",
      category: "Residential",
      image: "/images/project1.jpg",
      description: "A luxurious modern villa blending nature and architecture.",
      details: "Completed in 2023, this 4500 sq. ft. residence features sustainable materials and panoramic views."
    },
    {
      title: "Urban Office",
      category: "Commercial",
      image: "/images/project2.jpg",
      description: "A sleek commercial space designed for productivity and comfort.",
      details: "An award-winning office space with flexible work zones and natural lighting solutions."
    },
    {
      title: "Lake House",
      category: "Residential",
      image: "/images/project3.jpg",
      description: "A serene lakeside retreat that embraces minimalism and light.",
      details: "This minimalist retreat features floor-to-ceiling windows and sustainable energy systems."
    }
  ];

  return (
    <>
      <Head>
        <title>Senasuma Architects | Professional Architecture & Design</title>
        <meta name="description" content="Senasuma Architects - Professional architectural design solutions blending modern approaches with traditional Sri Lankan elements." />
        <meta name="keywords" content="architects, Sri Lanka, sustainable design, modern architecture" />
      </Head>

      {/* Navigation */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${offsetY > 50 ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <span className={`font-medium text-xl ${offsetY > 50 ? 'text-gray-900' : 'text-white'}`}>
                SENASUMA ARCHITECTS
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {['home', 'about', 'services', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-sm font-medium ${
                    activeSection === item 
                      ? offsetY > 50 
                        ? 'text-blue-600' 
                        : 'text-blue-400'
                      : offsetY > 50 
                        ? 'text-gray-700 hover:text-blue-600' 
                        : 'text-white hover:text-blue-200'
                  } transition-colors duration-300`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </nav>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-md ${offsetY > 50 ? 'text-gray-900' : 'text-white'}`}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-2 pt-2 pb-4 space-y-1">
              {['home', 'about', 'services', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block w-full text-left px-3 py-2 text-base font-medium ${
                    activeSection === item 
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-gray-900 hover:bg-gray-50 hover:text-blue-600'
                  } rounded-md transition-colors duration-300`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section 
        id="home" 
        className="relative flex items-center justify-center min-h-screen bg-gray-900 text-white px-4 py-12 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 opacity-80"></div>
        
        <Image
          src="/images/img2.png"
          alt="Modern Architecture"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 opacity-50"
          priority
        />
        
        <div className="max-w-7xl w-full mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Innovative <span className="text-blue-400">Architecture</span>
              <br />Timeless Design
            </h1>
            <p className="text-gray-300 text-lg mb-8 max-w-xl">
              We craft innovative and sustainable architectural solutions that transform ideas into reality.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded text-lg hover:bg-blue-700 transition-all"
              >
                Our Projects <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center bg-transparent text-white border border-white px-6 py-3 rounded text-lg hover:bg-white/10 transition-all"
              >
                Contact Us
              </button>
            </div>
          </div>
          
          <div className="hidden md:block"></div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-8">
          <button 
            onClick={() => scrollToSection('about')}
            className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
            aria-label="Scroll to About section"
          >
            <ChevronDown className="h-6 w-6 text-white" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image
              src="/images/about.png"
              alt="Our Studio"
              width={600}
              height={400}
              className="rounded shadow-lg w-full h-auto object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Who We Are
            </h2>
            <div className="w-20 h-1 bg-blue-600 mb-8"></div>
            <p className="text-gray-700 mb-6">
              <strong>Senasuma Architects</strong> proudly continues the legacy of the <em>Epa family</em>. Beginning with the visionary <strong>K. Abraham Epa</strong>, the practice is now led by <strong>K. A. Bandula Epa</strong>, a certified architect with over <strong>30 years of experience</strong> in designing inspiring spaces.
            </p>
            <p className="text-gray-700 mb-8">
              We blend <strong>modern architectural styles</strong> with timeless <strong>traditional Sri Lankan design elements</strong>, ensuring every project reflects innovation, heritage, and functionality.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-5 bg-gray-50 rounded border-l-4 border-blue-600">
                <h3 className="font-semibold text-gray-900 mb-2">Innovation</h3>
                <p className="text-gray-700">We embrace cutting-edge architectural approaches</p>
              </div>
              <div className="p-5 bg-gray-50 rounded border-l-4 border-blue-600">
                <h3 className="font-semibold text-gray-900 mb-2">Heritage</h3>
                <p className="text-gray-700">We honor traditional Sri Lankan design elements</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Services
            </h2>
            <div className="mx-auto w-20 h-1 bg-blue-600 mb-8"></div>
            <p className="text-gray-700 max-w-2xl mx-auto">
              We deliver comprehensive architectural services tailored to your unique vision and needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded shadow-md border-t-4 border-blue-600"
              >
                {service.icon}
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Featured Projects
            </h2>
            <div className="mx-auto w-20 h-1 bg-blue-600 mb-8"></div>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Explore our diverse portfolio of architectural excellence, where innovation meets functionality.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <div 
                key={index}
                className="group bg-white rounded shadow-md overflow-hidden"
              >
                <div className="aspect-w-4 aspect-h-3 relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-3 py-1 font-medium">
                    {project.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600">
                      {project.details}
                    </p>
                  </div>
                  
                  <div className="flex justify-end mt-4">
                    <span className="text-sm font-medium text-blue-600 flex items-center cursor-pointer hover:text-blue-800 transition-colors">
                      View Details <ArrowRight className="h-4 w-4 ml-1" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
              <div className="w-20 h-1 bg-blue-600 mb-8"></div>
              <p className="text-gray-700 mb-8">
                We'd love to discuss your next project. Reach out to us today for a consultation!
              </p>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
                    <p className="text-gray-700">Senasuma Architects, Maraggoda, Porawagama, Elpitiya</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                    <a href="tel:+94724501104" className="text-gray-700 hover:text-blue-600 transition-colors">
                      +94 72 450 1104
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                    <a href="mailto:bandulaepa@gmail.com" className="text-gray-700 hover:text-blue-600 transition-colors">
                      bandulaepa@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-white rounded shadow-md border-l-4 border-blue-600">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <Building className="h-5 w-5 mr-2 text-blue-600" /> Office Hours
                </h3>
                <div className="grid grid-cols-2 gap-2 text-gray-700">
                  <p>Monday - Friday:</p>
                  <p>2:30 PM - 9:00 PM</p>
                  <p>Saturday:</p>
                  <p>8:00 AM - 5:00 PM</p>
                  <p>Sunday:</p>
                  <p>8:00 AM - 5:00 PM</p>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-gray-100 p-2 rounded text-gray-700 hover:bg-blue-600 hover:text-white transition-colors">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-gray-100 p-2 rounded text-gray-700 hover:bg-blue-600 hover:text-white transition-colors">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-gray-100 p-2 rounded text-gray-700 hover:bg-blue-600 hover:text-white transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white p-8 rounded shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Send us a message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                      Your Email
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User size={18} className="text-gray-500" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="yourname@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-700">
                      Subject
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MessageSquare size={18} className="text-gray-500" />
                      </div>
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        value={form.subject}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="How can we help you?"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Tell us about your project or inquiry..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 transition-all font-medium"
                  >
                    <Send size={18} className="mr-2" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">
                SENASUMA ARCHITECTS
              </h3>
              <p className="text-gray-300 mb-4">Crafting innovative architectural solutions that transform ideas into reality since 1980.</p>
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-800 p-2 rounded text-gray-300 hover:bg-blue-600 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="bg-gray-800 p-2 rounded text-gray-300 hover:bg-blue-600 hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="bg-gray-800 p-2 rounded text-gray-300 hover:bg-blue-600 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item, index) => (
                  <li key={index}>
                    <button 
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Senasuma Architects, Maraggoda, Porawagama, Elpitiya</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                  <a href="tel:+94724501104" className="text-gray-300 hover:text-blue-400 transition-colors">
                    +94 72 450 1104
                  </a>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                  <a href="mailto:bandulaepa@gmail.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                    bandulaepa@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Senasuma Architects. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 p-3 rounded-full bg-blue-600 text-white shadow-md z-50 transition-all duration-300 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ChevronUp className="h-6 w-6" />
      </button>
    </>
  );
}