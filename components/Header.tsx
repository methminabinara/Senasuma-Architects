import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">
        <Link href="/" className="flex items-center group">
          <span className="text-2xl font-bold bg-gradient-to-r from-[#1B3044] to-[#2C4A67] bg-clip-text text-transparent transition-all duration-300">
            Senasuma Architects
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {['Home', 'About', 'Projects', 'Contact'].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="relative px-4 py-2 text-gray-700 hover:text-[#1B3044] font-medium transition-colors duration-300 group"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1B3044] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          <Link 
            href="#contact" 
            className="ml-4 px-6 py-2 bg-[#1B3044] hover:bg-[#2C4A67] text-white rounded-full font-medium hover:shadow-lg transition-all duration-300"
          >
            Get in Touch
          </Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-300 text-[#1B3044]"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-xl absolute top-full left-0 w-full py-4 px-6 border-t border-gray-100 animate-fadeIn">
          {['Home', 'About', 'Projects', 'Contact'].map((item) => (
            <Link 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block py-3 text-gray-700 hover:text-[#1B3044] hover:pl-2 border-b border-gray-100 transition-all duration-200"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
          <Link 
            href="#contact" 
            className="block mt-4 px-5 py-3 bg-[#1B3044] text-white rounded-lg font-medium text-center hover:bg-[#2C4A67] hover:shadow-lg transition-all duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Get in Touch
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;