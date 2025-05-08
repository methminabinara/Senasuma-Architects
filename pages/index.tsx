'use client';

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Send, Mail, MessageSquare, User, Phone, MapPin, Building, ArrowRight, ChevronDown } from 'lucide-react';
import { ChevronUp } from 'lucide-react';
import { useEffect} from 'react';

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

  useEffect(() => {
    const handleScroll = () => {
      // Show button when user scrolls down 300px
      setShowScrollTop(window.scrollY > 300);
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <Head>
        <title>Senasuma Architects | Innovative & Sustainable Architecture</title>
        <meta name="description" content="Senasuma Architects - Innovative and Sustainable Architecture blending modern design with traditional Sri Lankan elements." />
        <meta name="keywords" content="architects, Sri Lanka, sustainable design, modern architecture" />
      </Head>

      {/* Enhanced Hero Section */}
      <section id="home" className="relative flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-center px-4 py-12 mt-10 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'0.2\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")', backgroundSize: '30px 30px' }}></div>
        </div>

        <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 text-left md:text-left z-10">
            <span className="inline-block px-4 py-1 rounded-full bg-gray-900/10 text-gray-800 font-medium text-sm mb-6">SENASUMA ARCHITECTS</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Designing <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">Spaces</span>, Shaping Dreams
            </h1>
            <p className="text-gray-700 text-lg md:text-xl mb-8 max-w-xl">
              We craft innovative and sustainable architectural solutions that transform ideas into reality.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#projects" className="inline-flex items-center bg-[#1B3044] text-white px-8 py-3 rounded-full text-lg hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:translate-y-[-2px]">
                View Our Work <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="#contact" className="inline-flex items-center bg-white text-gray-900 border-2 border-gray-900 px-8 py-3 rounded-full text-lg hover:bg-gray-50 transition-all">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center md:justify-end perspective-[1200px] z-10">
            <div className="relative transform transition-all duration-500 hover:scale-[1.03] hover:-rotate-2 hover:translate-y-[-5px]">
              <Image
                src="/images/img2.png"
                alt="Modern Architecture Design"
                width={600}
                height={450}
                className="rounded-lg object-cover h-auto max-h-[450px] z-10 relative shadow-xl"
                priority
              />
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-gray-900/10 rounded-lg -z-10 blur-[2px]"></div>
              <div className="absolute -bottom-7 -right-7 w-full h-full bg-gray-900/5 rounded-lg -z-20 blur-[4px]"></div>
              <div className="absolute top-0 left-0 w-full h-full rounded-lg shadow-inner pointer-events-none z-20"></div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-8">
          <Link href="#about" className="animate-bounce bg-white p-2 rounded-full shadow-lg">
            <ChevronDown className="h-6 w-6 text-gray-700" />
          </Link>
        </div>
        <div className="absolute -bottom-1 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center min-h-[90vh]"> 
        <div className="relative">
          <div className="absolute -top-5 -left-5 w-20 h-20 bg-gray-900/5 rounded-lg -z-10"></div>
          <Image
            src="/images/about.png"
            alt="Our Studio"
            width={600}
            height={400}
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
          <div className="absolute -bottom-5 -right-5 w-20 h-20 bg-gray-900/5 rounded-lg -z-10"></div>
        </div>
        <div>
          <span className="inline-block px-4 py-1 rounded-full bg-gray-900/10 text-gray-800 font-medium text-sm mb-4">OUR STORY</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Who We Are
          </h2>
          <p className="text-lg text-gray-700 mb-6 text-justify">
            <strong>Senasuma Architects</strong> proudly continues the legacy of the <em>Epa family</em>. Beginning with the visionary <strong>K. Abraham Epa</strong>, the practice is now led by <strong>K. A. Bandula Epa</strong>, a certified architect with over <strong>30 years of experience</strong> in designing inspiring spaces.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            We blend <strong>modern architectural styles</strong> with timeless <strong>traditional Sri Lankan design elements</strong>, ensuring every project reflects innovation, heritage, and functionality.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-100 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-700">We embrace cutting-edge architectural approaches</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-100 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Heritage</h3>
              <p className="text-gray-700">We honor traditional Sri Lankan design elements</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section id="projects" className="mx-auto px-4 py-20 bg-gradient-to-b from-gray-50 to-gray-100 min-h-[90vh]">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-gray-900/10 text-gray-800 font-medium text-sm mb-4">OUR PORTFOLIO</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-6">
            <span className="inline-block relative">
              Our Projects
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full"></div>
            </span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Explore our diverse portfolio of architectural excellence, where innovation meets functionality.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto items-center grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Project 1 */}
          <div className="bg-white rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-2xl shadow-lg group perspective-800">
            <div className="relative">
              <Image
                src="/images/project1.jpg"
                alt="Modern Villa"
                width={400}
                height={300}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
              <div className="absolute top-4 left-4 bg-gray-900/80 text-white text-xs px-2 py-1 rounded">Residential</div>
            </div>
            <div className="p-6 relative">
              <div className="absolute -top-3 left-4 right-4 h-2 bg-gradient-to-r from-gray-100 to-white blur-md"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Modern Villa
              </h3>
              <p className="text-gray-700 mb-4">
                A luxurious modern villa blending nature and architecture.
              </p>
              <div className="flex justify-end">
                <span className="text-sm font-medium text-gray-800 px-3 py-1 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors cursor-pointer flex items-center">Details <ArrowRight className="h-4 w-4 ml-1" /></span>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-2xl shadow-lg group perspective-800">
            <div className="relative">
              <Image
                src="/images/project2.jpg"
                alt="Urban Office"
                width={400}
                height={300}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
              <div className="absolute top-4 left-4 bg-gray-900/80 text-white text-xs px-2 py-1 rounded">Commercial</div>
            </div>
            <div className="p-6 relative">
              <div className="absolute -top-3 left-4 right-4 h-2 bg-gradient-to-r from-gray-100 to-white blur-md"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Urban Office
              </h3>
              <p className="text-gray-700 mb-4">
                A sleek commercial space designed for productivity and comfort.
              </p>
              <div className="flex justify-end">
                <span className="text-sm font-medium text-gray-800 px-3 py-1 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors cursor-pointer flex items-center">Details <ArrowRight className="h-4 w-4 ml-1" /></span>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-white rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-2xl shadow-lg group perspective-800">
            <div className="relative">
              <Image
                src="/images/project3.jpg"
                alt="Lake House"
                width={400}
                height={300}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
              <div className="absolute top-4 left-4 bg-gray-900/80 text-white text-xs px-2 py-1 rounded">Residential</div>
            </div>
            <div className="p-6 relative">
              <div className="absolute -top-3 left-4 right-4 h-2 bg-gradient-to-r from-gray-100 to-white blur-md"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Lake House
              </h3>
              <p className="text-gray-700 mb-4">
                A serene lakeside retreat that embraces minimalism and light.
              </p>
              <div className="flex justify-end">
                <span className="text-sm font-medium text-gray-800 px-3 py-1 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors cursor-pointer flex items-center">Details <ArrowRight className="h-4 w-4 ml-1" /></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="max-w-6xl mx-auto px-4 py-20 min-h-[90vh]">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <span className="inline-block px-4 py-1 rounded-full bg-gray-900/10 text-gray-800 font-medium text-sm mb-4">GET IN TOUCH</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Contact Us</h2>
            <p className="text-lg text-gray-700 mb-8">
              We&apos;d love to discuss your next project. Reach out to us today for a consultation!
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-gray-100 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-gray-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                  <p className="text-gray-700">Senasuma Architects, Maraggoda, Porawagama, Elpitiya</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-gray-100 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-gray-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                  <a href="tel:+94724501104" className="text-gray-700 hover:text-gray-900 transition-colors">
                    +94 72 450 1104
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-gray-100 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-gray-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <a href="mailto:bandulaepa@gmail.com" className="text-gray-700 hover:text-gray-900 transition-colors">
                    bandulaepa@gmail.com
                  </a>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <Building className="h-5 w-5 mr-2" /> Office Hours
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
          
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <MessageSquare className="h-6 w-6 mr-2 text-gray-700" />
              Send us a message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
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
                    className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition-all duration-200 text-gray-900"
                    placeholder="yourname@example.com"
                    style={{caretColor: "#111827"}}
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
                    className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition-all duration-200 text-gray-900"
                    placeholder="How can we help you?"
                    style={{caretColor: "#111827"}}
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition-all duration-200 text-gray-900"
                  placeholder="Tell us about your project or inquiry..."
                  style={{caretColor: "#111827"}}
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full flex items-center justify-center bg-gray-900 text-white py-3 px-4 rounded-lg hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 transition-all duration-200 font-medium"
              >
                <Send size={18} className="mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 p-3 rounded-full bg-gray-900 text-white shadow-lg z-50 transition-all duration-300 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ChevronUp className="h-6 w-6" />
      </button>
    </>
  );
}