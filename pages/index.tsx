'use client';

import Head from 'next/head';
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
  ExternalLink,
  Coffee
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  const [form, setForm] = useState({
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:bandulaepa@gmail.com?subject=${encodeURIComponent(
      form.subject
    )}&body=${encodeURIComponent(`From: ${form.email}\n\n${form.message}`)}`;
    window.location.href = mailtoLink;
  };

  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  // Using isScrolling in scrollToSection and scrollToTop functions
  const [_isScrolling, setIsScrolling] = useState(false);

  // Parallax effect states
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
  const scrollToSection = (sectionId: string) => {
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
      icon: <Building className="h-12 w-12 mb-4 text-amber-500" />,
      title: "Architectural Design",
      description: "From concept to completion, we craft spaces that merge aesthetics with functionality."
    },
    {
      icon: <MapPin className="h-12 w-12 mb-4 text-amber-500" />,
      title: "Urban Planning",
      description: "Creating sustainable urban environments that enhance community living."
    },
    {
      icon: <Coffee className="h-12 w-12 mb-4 text-amber-500" />,
      title: "Interior Design",
      description: "Crafting interiors that reflect your vision while maximizing spatial efficiency."
    },
    {
      icon: <ExternalLink className="h-12 w-12 mb-4 text-amber-500" />,
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
        <title>Senasuma Architects | Innovative & Sustainable Architecture</title>
        <meta name="description" content="Senasuma Architects - Innovative and Sustainable Architecture blending modern design with traditional Sri Lankan elements." />
        <meta name="keywords" content="architects, Sri Lanka, sustainable design, modern architecture" />
      </Head>

      {/* Fixed Navigation */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${offsetY > 50 ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-4 md:py-6">
            <div className="flex items-center">
              <span className={`font-bold text-xl md:text-2xl ${offsetY > 50 ? 'text-gray-900' : 'text-white'}`}>
                SENASUMA ARCHITECTS<span className="text-amber-500">.</span>
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {['home', 'about', 'services', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-sm uppercase tracking-wider font-medium ${
                    activeSection === item 
                      ? offsetY > 50 
                        ? 'text-amber-600 border-b-2 border-amber-500' 
                        : 'text-amber-400 border-b-2 border-amber-400'
                      : offsetY > 50 
                        ? 'text-gray-900 hover:text-amber-600' 
                        : 'text-white hover:text-amber-300'
                  } transition-colors duration-300`}
                >
                  {item}
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
          <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg">
            <div className="px-2 pt-2 pb-4 space-y-1">
              {['home', 'about', 'services', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block w-full text-left px-3 py-2 text-base font-medium ${
                    activeSection === item 
                      ? 'text-amber-600 bg-amber-50' 
                      : 'text-gray-900 hover:bg-gray-50 hover:text-amber-600'
                  } rounded-md transition-colors duration-300`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Enhanced Hero Section */}
      <section 
        id="home" 
        className="relative flex items-center justify-center min-h-screen bg-gray-900 text-white px-4 py-12 overflow-hidden"
      >
        {/* Architectural floor plan background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-700 via-gray-900 to-gray-700">
          {/* Multiple house plan drawings */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
              <defs>
                <pattern id="architectural-plans" patternUnits="userSpaceOnUse" width="500" height="500">
                  {/* Modern house plan 1 - Top left */}
                  <g transform="translate(0,0)" opacity="0.7">
                    {/* Outer walls */}
                    <rect x="20" y="20" width="200" height="180" fill="none" stroke="rgba(251, 191, 36, 0.8)" strokeWidth="2" />
                    
                    {/* Interior walls */}
                    <line x1="20" y1="100" x2="100" y2="100" stroke="rgba(251, 191, 36, 0.7)" strokeWidth="2" />
                    <line x1="100" y1="20" x2="100" y2="180" stroke="rgba(251, 191, 36, 0.7)" strokeWidth="2" />
                    <line x1="100" y1="140" x2="220" y2="140" stroke="rgba(251, 191, 36, 0.7)" strokeWidth="2" />
                    
                    {/* Windows */}
                    <line x1="40" y1="20" x2="80" y2="20" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="3" />
                    <line x1="140" y1="20" x2="180" y2="20" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="3" />
                    <line x1="220" y1="40" x2="220" y2="80" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="3" />
                    
                    {/* Door */}
                    <path d="M20,60 A40,40 0 0,0 60,60" fill="none" stroke="rgba(251, 191, 36, 0.9)" strokeWidth="1" />
                    
                    {/* Furniture */}
                    <rect x="120" y="40" width="80" height="40" fill="none" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1" />
                    <rect x="40" y="120" width="40" height="40" fill="none" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1" />
                    <circle cx="180" cy="110" r="15" fill="none" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1" />
                  </g>
                  
                  {/* Modern house plan 2 - Bottom right */}
                  <g transform="translate(250, 250)" opacity="0.7">
                    {/* L-shaped house */}
                    <path d="M20,20 h180 v100 h-100 v80 h-80 z" fill="none" stroke="rgba(251, 191, 36, 0.8)" strokeWidth="2" />
                    
                    {/* Interior walls */}
                    <line x1="20" y1="80" x2="100" y2="80" stroke="rgba(251, 191, 36, 0.7)" strokeWidth="2" />
                    <line x1="100" y1="20" x2="100" y2="120" stroke="rgba(251, 191, 36, 0.7)" strokeWidth="2" />
                    <line x1="150" y1="20" x2="150" y2="80" stroke="rgba(251, 191, 36, 0.7)" strokeWidth="2" />
                    
                    {/* Windows */}
                    <line x1="50" y1="20" x2="80" y2="20" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="3" />
                    <line x1="170" y1="20" x2="200" y2="20" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="3" />
                    <line x1="20" y1="40" x2="20" y2="60" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="3" />
                    <line x1="20" y1="140" x2="20" y2="180" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="3" />
                    
                    {/* Door */}
                    <path d="M120,120 A40,40 0 0,0 120,160" fill="none" stroke="rgba(251, 191, 36, 0.9)" strokeWidth="1" />
                    
                    {/* Furniture and fixtures */}
                    <rect x="30" y="30" width="50" height="30" fill="none" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1" />
                    <rect x="40" y="130" width="60" height="40" fill="none" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1" />
                    <circle cx="175" cy="50" r="15" fill="none" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1" />
                  </g>
                  
                  {/* Modern house plan 3 - Top right, partially visible */}
                  <g transform="translate(300, 50)" opacity="0.5">
                    {/* Open concept house */}
                    <rect x="0" y="0" width="150" height="120" fill="none" stroke="rgba(251, 191, 36, 0.6)" strokeWidth="2" />
                    
                    {/* Kitchen island */}
                    <rect x="50" y="40" width="40" height="20" fill="none" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1" />
                    
                    {/* Windows */}
                    <line x1="0" y1="30" x2="0" y2="80" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="3" />
                    <line x1="30" y1="0" x2="120" y2="0" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="3" />
                  </g>
                  
                  {/* Modern house plan 4 - Bottom left, partially visible */}
                  <g transform="translate(80, 300)" opacity="0.6">
                    {/* Circular elements */}
                    <circle cx="60" cy="60" r="60" fill="none" stroke="rgba(251, 191, 36, 0.7)" strokeWidth="2" />
                    <circle cx="60" cy="60" r="30" fill="none" stroke="rgba(251, 191, 36, 0.7)" strokeWidth="2" />
                    
                    {/* Radial lines */}
                    <line x1="60" y1="0" x2="60" y2="120" stroke="rgba(251, 191, 36, 0.5)" strokeWidth="1" />
                    <line x1="0" y1="60" x2="120" y2="60" stroke="rgba(251, 191, 36, 0.5)" strokeWidth="1" />
                    <line x1="17" y1="17" x2="103" y2="103" stroke="rgba(251, 191, 36, 0.5)" strokeWidth="1" />
                    <line x1="103" y1="17" x2="17" y2="103" stroke="rgba(251, 191, 36, 0.5)" strokeWidth="1" />
                  </g>
                </pattern>
              </defs>
              <rect width="1000" height="1000" fill="url(#architectural-plans)" />
            </svg>
          </div>
          
          {/* Dimension lines and measurements */}
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
              {/* Horizontal measurement lines */}
              <g transform="translate(100, 50)">
                <line x1="0" y1="0" x2="800" y2="0" stroke="rgba(251, 191, 36, 0.8)" strokeWidth="1" strokeDasharray="10,5" />
                <line x1="0" y1="-10" x2="0" y2="10" stroke="rgba(251, 191, 36, 0.8)" strokeWidth="1" />
                <line x1="800" y1="-10" x2="800" y2="10" stroke="rgba(251, 191, 36, 0.8)" strokeWidth="1" />
                <text x="400" y="-20" textAnchor="middle" fill="rgba(251, 191, 36, 0.8)" fontSize="16">24.0 m</text>
              </g>
              
              {/* Vertical measurement lines */}
              <g transform="translate(50, 100)">
                <line x1="0" y1="0" x2="0" y2="800" stroke="rgba(251, 191, 36, 0.8)" strokeWidth="1" strokeDasharray="10,5" />
                <line x1="-10" y1="0" x2="10" y2="0" stroke="rgba(251, 191, 36, 0.8)" strokeWidth="1" />
                <line x1="-10" y1="800" x2="10" y2="800" stroke="rgba(251, 191, 36, 0.8)" strokeWidth="1" />
                <text x="-20" y="400" textAnchor="middle" fill="rgba(251, 191, 36, 0.8)" fontSize="16" transform="rotate(-90, -20, 400)">18.0 m</text>
              </g>
              
              {/* Diagonal measurement */}
              <g transform="translate(800, 800)">
                <line x1="0" y1="0" x2="-100" y2="-100" stroke="rgba(251, 191, 36, 0.8)" strokeWidth="1" strokeDasharray="5,5" />
                <text x="-50" y="-70" textAnchor="middle" fill="rgba(251, 191, 36, 0.8)" fontSize="12" transform="rotate(-45, -50, -50)">8.5 m</text>
              </g>
            </svg>
          </div>
        </div>

        <div className="max-w-7xl w-full mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div 
            className="text-left md:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* <span 
              className="inline-block px-4 py-1 rounded-full bg-amber-500/20 text-amber-300 font-medium text-sm mb-6"
              style={{ transform: `translateY(${offsetY * 0.1}px)` }}
            >
              SENASUMA ARCHITECTS
            </span> */}
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              style={{ transform: `translateY(${offsetY * 0.05}px)` }}
            >
              Designing <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600">Spaces</span>, 
              <br />Shaping <span className="italic">Dreams</span>
            </h1>
            <p 
              className="text-gray-300 text-lg md:text-xl mb-8 max-w-xl"
              style={{ transform: `translateY(${offsetY * 0.02}px)` }}
            >
              We craft innovative and sustainable architectural solutions that transform ideas into timeless reality.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center bg-amber-500 text-gray-900 px-8 py-3 rounded-md text-lg hover:bg-amber-400 transition-all shadow-lg hover:shadow-xl hover:translate-y-[-2px]"
              >
                View Our Work <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center bg-transparent text-white border-2 border-white px-8 py-3 rounded-md text-lg hover:bg-white/10 transition-all"
              >
                Contact Us
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            className="hidden md:flex justify-center md:justify-end perspective-[1200px]"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ transform: `translateY(${offsetY * -0.08}px)` }}
          >
            <div className="relative w-full max-w-lg transform transition-all duration-500 hover:scale-[1.03] hover:-rotate-2 hover:translate-y-[-5px]">
              {/* 3D isometric building model */}
              <div className="absolute -top-8 -left-8 w-full h-full border-t-2 border-l-2 border-amber-500/50"></div>
              
              <div className="relative z-10">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-sm"></div>
                <Image
                  src="/images/img2.png"
                  alt="Modern Architecture Design"
                  width={600}
                  height={450}
                  className="rounded-sm object-cover h-auto max-h-[450px] shadow-2xl"
                  priority
                />
              </div>
              
              <div className="absolute -bottom-8 -right-8 w-full h-full border-b-2 border-r-2 border-amber-500/50"></div>
              
              {/* Floating blueprint elements */}
              <svg className="absolute -bottom-16 -right-16 w-32 h-32 text-amber-500/30" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1" />
                <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="1" />
                <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="1" />
              </svg>
              
              <svg className="absolute -top-16 -left-16 w-24 h-24 text-amber-500/30" viewBox="0 0 100 100">
                <rect x="20" y="20" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="1" />
                <line x1="20" y1="40" x2="80" y2="40" stroke="currentColor" strokeWidth="0.5" />
                <line x1="20" y1="60" x2="80" y2="60" stroke="currentColor" strokeWidth="0.5" />
                <line x1="40" y1="20" x2="40" y2="80" stroke="currentColor" strokeWidth="0.5" />
                <line x1="60" y1="20" x2="60" y2="80" stroke="currentColor" strokeWidth="0.5" />
              </svg>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-8">
          <button 
            onClick={() => scrollToSection('about')}
            className="animate-bounce bg-white/10 hover:bg-white/20 p-3 rounded-full border border-white/30 transition-colors"
          >
            <ChevronDown className="h-6 w-6 text-white" />
          </button>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="bg-white py-24 relative overflow-hidden">
        {/* Abstract architectural element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-amber-50 -skew-x-12 transform origin-top-right z-0"></div>
        
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-amber-500"></div>
            <Image
              src="/images/about.png"
              alt="Our Studio"
              width={600}
              height={400}
              className="rounded-sm shadow-xl w-full h-auto object-cover"
            />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-amber-500"></div>
          </div>
          <div>
            <span className="inline-block px-4 py-1 rounded-full bg-amber-500/10 text-amber-700 font-medium text-sm mb-4">OUR STORY</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Who We Are
            </h2>
            <div className="w-20 h-1 bg-amber-500 mb-8"></div>
            <p className="text-lg text-gray-700 mb-6">
              <strong>Senasuma Architects</strong> proudly continues the legacy of the <em>Epa family</em>. Beginning with the visionary <strong>K. Abraham Epa</strong>, the practice is now led by <strong>K. A. Bandula Epa</strong>, a certified architect with over <strong>30 years of experience</strong> in designing inspiring spaces.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              We blend <strong>modern architectural styles</strong> with timeless <strong>traditional Sri Lankan design elements</strong>, ensuring every project reflects innovation, heritage, and functionality.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-5 bg-gray-50 rounded-sm border-l-4 border-amber-500 shadow-md transform transition-all hover:-translate-y-1 hover:shadow-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Innovation</h3>
                <p className="text-gray-700">We embrace cutting-edge architectural approaches</p>
              </div>
              <div className="p-5 bg-gray-50 rounded-sm border-l-4 border-amber-500 shadow-md transform transition-all hover:-translate-y-1 hover:shadow-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Heritage</h3>
                <p className="text-gray-700">We honor traditional Sri Lankan design elements</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Services Section */}
      <section id="services" className="py-24 bg-[#1B1B1E] text-white relative overflow-hidden">
        {/* Diagonal line element */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-0 right-0 w-1/2 h-full border-l border-amber-500/30 -skew-x-12 transform origin-top-right"></div>
            <div className="absolute bottom-0 left-1/4 w-1/2 h-1/2 border-t border-amber-500/30 -skew-x-12 transform origin-bottom-left"></div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-amber-500/20 text-amber-300 font-medium text-sm mb-4">WHAT WE DO</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Services
            </h2>
            <div className="mx-auto w-24 h-1 bg-amber-500 mb-8"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              We deliver comprehensive architectural services tailored to your unique vision and needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-sm border-b-2 border-amber-500 shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {service.icon}
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section id="projects" className="py-24 bg-gray-50 relative overflow-hidden">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="h-full w-full" 
            style={{ 
              backgroundImage: 'linear-gradient(#1B1B1E 1px, transparent 1px), linear-gradient(90deg, #1B1B1E 1px, transparent 1px)',
              backgroundSize: '50px 50px',
              opacity: '0.05'
            }}>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-amber-500/10 text-amber-700 font-medium text-sm mb-4">OUR PORTFOLIO</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Featured Projects
            </h2>
            <div className="mx-auto w-24 h-1 bg-amber-500 mb-8"></div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Explore our diverse portfolio of architectural excellence, where innovation meets functionality.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden bg-white rounded-sm shadow-xl"
              >
                <div className="aspect-w-4 aspect-h-3 relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 left-4 bg-amber-500 text-gray-900 text-xs px-3 py-1 font-medium">
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
                  
                  <div className="overflow-hidden h-0 group-hover:h-auto group-hover:mt-4 transition-all duration-300">
                    <p className="text-sm text-gray-600 border-t border-gray-200 pt-4">
                      {project.details}
                    </p>
                  </div>
                  
                  <div className="flex justify-end mt-4">
                    <span className="text-sm font-medium text-amber-600 flex items-center cursor-pointer group-hover:text-amber-500 transition-colors">
                      View Project <ArrowRight className="h-4 w-4 ml-1" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-24 bg-white relative overflow-hidden">
        {/* Abstract architectural element */}
        <div className="absolute left-0 top-0 w-1/3 h-full bg-amber-50 skew-x-12 transform origin-top-left z-0"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <span className="inline-block px-4 py-1 rounded-full bg-amber-500/10 text-amber-700 font-medium text-sm mb-4">GET IN TOUCH</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Contact Us</h2>
              <div className="w-20 h-1 bg-amber-500 mb-8"></div>
              <p className="text-lg text-gray-700 mb-8">
                We&apos;d love to discuss your next project. Reach out to us today for a consultation!
              </p>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start space-x-6">
                  <div className="bg-amber-500/10 p-4 rounded-sm">
                    <MapPin className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
                    <p className="text-gray-700">Senasuma Architects, Maraggoda, Porawagama, Elpitiya</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="bg-amber-500/10 p-4 rounded-sm">
                    <Phone className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                    <a href="tel:+94724501104" className="text-gray-700 hover:text-amber-600 transition-colors">
                      +94 72 450 1104
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="bg-amber-500/10 p-4 rounded-sm">
                    <Mail className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                    <a href="mailto:bandulaepa@gmail.com" className="text-gray-700 hover:text-amber-600 transition-colors">
                      bandulaepa@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-sm border-l-4 border-amber-500 shadow-md">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <Building className="h-5 w-5 mr-2 text-amber-600" /> Office Hours
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
            </div>
            
            <div>
              <div className="bg-white p-8 rounded-sm shadow-xl border-t-4 border-amber-500">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <MessageSquare className="h-6 w-6 mr-2 text-amber-500" />
                  Send us a message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative">
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
                        className="w-full pl-10 pr-3 py-3 border-b-2 border-gray-200 focus:border-amber-500 bg-transparent shadow-none focus:outline-none transition-all duration-200 text-gray-900"
                        placeholder="yourname@example.com"
                        style={{caretColor: "#D97706"}}
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
                        className="w-full pl-10 pr-3 py-3 border-b-2 border-gray-200 focus:border-amber-500 bg-transparent shadow-none focus:outline-none transition-all duration-200 text-gray-900"
                        placeholder="How can we help you?"
                        style={{caretColor: "#D97706"}}
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
                      className="w-full px-4 py-3 border-b-2 border-gray-200 focus:border-amber-500 bg-transparent shadow-none focus:outline-none transition-all duration-200 text-gray-900"
                      placeholder="Tell us about your project or inquiry..."
                      style={{caretColor: "#D97706"}}
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center bg-amber-500 text-white py-3 px-6 rounded-sm hover:bg-amber-600 focus:ring-2 focus:ring-amber-300 transition-all duration-200 font-medium shadow-md"
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
      <footer className="bg-[#1B1B1E] text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">
                SENASUMA ARCHITECTS<span className="text-amber-500">.</span>
              </h3>
              <p className="text-gray-300 mb-6">Crafting innovative architectural solutions that transform ideas into reality since 1980.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-6 border-b border-gray-700 pb-2">Quick Links</h3>
              <ul className="space-y-3">
                {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item, index) => (
                  <li key={index}>
                    <button 
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="text-gray-300 hover:text-amber-400 transition-colors flex items-center"
                    >
                      <ArrowRight className="h-4 w-4 mr-2 text-amber-500" /> {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-6 border-b border-gray-700 pb-2">Contact Info</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-amber-500 mt-1" />
                  <span className="text-gray-300">Senasuma Architects, Maraggoda, Porawagama, Elpitiya</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-amber-500" />
                  <a href="tel:+94724501104" className="text-gray-300 hover:text-amber-400 transition-colors">
                    +94 72 450 1104
                  </a>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-amber-500" />
                  <a href="mailto:bandulaepa@gmail.com" className="text-gray-300 hover:text-amber-400 transition-colors">
                    bandulaepa@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Senasuma Architects. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 p-3 rounded-full bg-amber-500 text-white shadow-lg z-50 transition-all duration-300 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ChevronUp className="h-6 w-6" />
      </button>
    </>
  );
}