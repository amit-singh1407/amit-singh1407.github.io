import { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi'; // Install react-icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'about.py', href: '#about' },
    { name: 'skills.sql', href: '#skills' },
    { name: 'projects.ipynb', href: '#projects' },
    { name: 'contact.sh', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-[#0d1117] border-b border-gray-800 font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo / Terminal Path */}
          <div className="shrink-0 flex items-center">
            <span className="text-blue-400 font-bold tracking-tighter">
              <span className="text-green-500">➜</span> ~/root
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 rounded-t-md text-sm font-medium text-gray-400 hover:bg-[#161b22] hover:text-blue-400 transition-colors duration-200 border-b-2 border-transparent hover:border-blue-400"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
            >
              {isOpen ? <HiX className="h-6 w-6" /> : <HiMenuAlt3 className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0d1117] border-b border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-blue-400 hover:bg-[#161b22]"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="p-3">
               <button className="w-full text-left text-xs text-green-500 opacity-50">
                 $ run --contact-me
               </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;