import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer id="contact" className="py-16 relative">
      <div className="container mx-auto px-6">
        {/* Contact Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Connect</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            I'm always interested in new opportunities and collaborations. 
            Feel free to reach out if you'd like to work together!
          </p>
          
          <a 
            href="mailto:your.email@example.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
          >
            <FaEnvelope />
            Get In Touch
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-12">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-slate-800/50 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-purple-600 transition-all duration-300 transform hover:scale-110 border border-purple-500/20 hover:border-purple-400/50"
          >
            <FaGithub className="text-xl" />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-slate-800/50 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 border border-purple-500/20 hover:border-blue-400/50"
          >
            <FaLinkedin className="text-xl" />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-slate-800/50 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-sky-500 transition-all duration-300 transform hover:scale-110 border border-purple-500/20 hover:border-sky-400/50"
          >
            <FaTwitter className="text-xl" />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="w-12 h-12 bg-slate-800/50 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-red-600 transition-all duration-300 transform hover:scale-110 border border-purple-500/20 hover:border-red-400/50"
          >
            <FaEnvelope className="text-xl" />
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-purple-500/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 José Verbakel. All rights reserved.
            </div>
            
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>Made with</span>
              <FaHeart className="text-red-500 animate-pulse" />
              <span>using React & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
    </footer>
  )
}

export default Footer