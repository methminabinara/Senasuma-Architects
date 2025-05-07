import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-4">
        <Link href="/" className="text-2xl font-bold text-gray-900">
          Senasuma Architects
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-700 hover:text-gray-900">Home</Link>
          <Link href="/about" className="text-gray-700 hover:text-gray-900">About</Link>
          <Link href="/projects" className="text-gray-700 hover:text-gray-900">Projects</Link>
          <Link href="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4">
          <Link href="/" className="block py-2 text-gray-700 hover:text-gray-900">Home</Link>
          <Link href="/about" className="block py-2 text-gray-700 hover:text-gray-900">About</Link>
          <Link href="/projects" className="block py-2 text-gray-700 hover:text-gray-900">Projects</Link>
          <Link href="/contact" className="block py-2 text-gray-700 hover:text-gray-900">Contact</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
