import React, { useState, useEffect } from 'react';
import { Users } from 'lucide-react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 text-brand-700">
          <Users className="w-6 h-6" />
          <h1 className="font-bold text-lg md:text-xl tracking-tight">BizConnect 2025</h1>
        </div>
        
        <a 
          href="https://www.kokuchpro.com/event/0479625ebb799019894fbe8ad09b88ad/"
          target="_blank"
          rel="noopener noreferrer"
          className={`hidden md:inline-flex items-center justify-center px-5 py-2 text-sm font-bold text-white transition-all rounded-full bg-brand-600 hover:bg-brand-700 hover:shadow-lg ${
            scrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          参加申込
        </a>
      </div>
    </header>
  );
};

export default Header;