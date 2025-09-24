import React, { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-purple-500/20">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white">
            <span className="text-purple-400">Portfolio</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a 
              href="#home" 
              className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
            >
              Home
            </a>
            <a 
              href="#about" 
              className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
            >
              About
            </a>
            <a 
              href="#skills" 
              className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
            >
              Skills
            </a>
            <a 
              href="#experience" 
              className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
            >
              Experience
            </a>
            <a 
              href="#education" 
              className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
            >
              Education
            </a>
            <a 
              href="#projects" 
              className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
            >
              Contact
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
              aria-label="Toggle mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-purple-500/20">
            <div className="px-6 pt-2 pb-4 space-y-2">
              <a 
                href="#home" 
                className="block py-2 text-gray-300 hover:text-purple-400 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#about" 
                className="block py-2 text-gray-300 hover:text-purple-400 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#skills" 
                className="block py-2 text-gray-300 hover:text-purple-400 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </a>
              <a 
                href="#experience" 
                className="block py-2 text-gray-300 hover:text-purple-400 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Experience
              </a>
              <a 
                href="#education" 
                className="block py-2 text-gray-300 hover:text-purple-400 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Education
              </a>
              <a 
                href="#projects" 
                className="block py-2 text-gray-300 hover:text-purple-400 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </a>
              <a 
                href="#contact" 
                className="block py-2 text-gray-300 hover:text-purple-400 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header