import React from 'react'

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-16 min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <div className="mb-8">
            <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-1">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center text-4xl font-bold text-white">
                  JV
                </div>
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-float">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              José Verbakel
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl">
            Full Stack Developer passionate about creating beautiful, functional, 
            and user-friendly applications with modern technologies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#projects" 
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
      
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-soft"></div>
        <div className="absolute top-3/4 right-1/4 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-soft" style={{animationDelay: '2s'}}></div>
      </div>
    </section>
  )
}

export default Hero