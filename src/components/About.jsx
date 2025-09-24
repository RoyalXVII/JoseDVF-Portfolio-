import React from 'react'
import { FaGlobe, FaBrain, FaUsers, FaLightbulb } from 'react-icons/fa'

const About = () => {
  const qualities = [
    {
      icon: FaGlobe,
      title: "Multilingual",
      description: "I can speak five fluent languages (Spanish, Swedish, German, Dutch, and English)."
    },
    {
      icon: FaBrain,
      title: "Problem Solver", 
      description: "I love problem-solving and learning new things that make my life and job easier."
    },
    {
      icon: FaUsers,
      title: "People Person",
      description: "I enjoy meeting new people because everyone has something unique to offer!"
    },
    {
      icon: FaLightbulb,
      title: "Team Player",
      description: "I like collaborating with others and teaching them things I know; I always try to include everyone because we are all a team when working together."
    }
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get to know more about my background, personality, and what drives me
          </p>
        </div>

        {/* Personal Profile */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20 hover:border-green-400/50 transition-all duration-300">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Personal Profile</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Experienced in handling customers and working efficiently under pressure. I have strong 
                problem-solving skills and excel at collaborating in teams to create smooth workflows 
                and positive customer experiences. My diverse educational background in both technical 
                programming and UX/UI design, combined with business knowledge, allows me to bridge 
                the gap between technical implementation and user needs.
              </p>
            </div>
          </div>
        </div>

        {/* Key Qualities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {qualities.map((quality, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-green-500/20 hover:border-green-400/50 transition-all duration-300 hover:scale-105 text-center h-full">
                <div className="flex justify-center mb-4">
                  <quality.icon className="text-4xl text-green-400 group-hover:text-green-300 transition-colors duration-300" />
                </div>
                
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors duration-300">
                  {quality.title}
                </h4>
                
                <p className="text-gray-300 text-sm leading-relaxed">
                  {quality.description}
                </p>
              </div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-400 to-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10 blur-xl"></div>
            </div>
          ))}
        </div>

        {/* Contact Information Highlight */}
        <div className="max-w-3xl mx-auto mt-16">
          <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl p-8 border border-green-400/30 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Let's Connect</h3>
            <p className="text-gray-300 mb-6">
              Ready to collaborate and bring innovative ideas to life? I'm always excited to work 
              with new people and teams to create amazing digital experiences.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <span>Available for new opportunities</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                <span>Remote work friendly</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                <span>Team collaboration focused</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse-soft"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse-soft" style={{animationDelay: '4s'}}></div>
    </section>
  )
}

export default About