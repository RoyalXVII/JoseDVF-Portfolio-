import React from 'react'

const Header = () => {
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
              href="#skills" 
              className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
            >
              Skills
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
          
          {/* Mobile menu button - you can add mobile menu functionality later */}
          <div className="md:hidden">
            <button className="text-gray-300 hover:text-purple-400 transition-colors duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header