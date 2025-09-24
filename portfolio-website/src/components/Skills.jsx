import React, { useState } from 'react'
import { 
  FaReact, 
  FaJsSquare, 
  FaNodeJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaGitAlt,
  FaDocker
} from 'react-icons/fa'
import { 
  SiTypescript, 
  SiTailwindcss, 
  SiMongodb, 
  SiFirebase,
  SiRedis,
  SiBulma,
  SiAngular,
  SiAdobexd,
  SiFigma,
  SiAdobephotoshop
} from 'react-icons/si'

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null)

  const skills = [
    { name: 'JavaScript', icon: FaJsSquare, color: 'text-yellow-400', level: '90%' },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-400', level: '85%' },
    { name: 'React', icon: FaReact, color: 'text-blue-400', level: '95%' },
    { name: 'Bulma', icon: SiBulma, color: 'text-teal-500', level: '80%' },
    { name: 'Node.js', icon: FaNodeJs, color: 'text-green-400', level: '85%' },
    { name: 'Angular', icon: SiAngular, color: 'text-red-500', level: '75%' },
    { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500', level: '95%' },
    { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-500', level: '90%' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-teal-400', level: '90%' },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500', level: '80%' },
    { name: 'Adobe XD', icon: SiAdobexd, color: 'text-pink-600', level: '75%' },
    { name: 'Figma', icon: SiFigma, color: 'text-purple-500', level: '70%' },
    { name: 'Git', icon: FaGitAlt, color: 'text-orange-600', level: '85%' },
    { name: 'Docker', icon: FaDocker, color: 'text-blue-500', level: '70%' },
    { name: 'Photoshop', icon: SiAdobephotoshop, color: 'text-blue-600', level: '65%' },
    { name: 'Firebase', icon: SiFirebase, color: 'text-yellow-500', level: '75%' }
  ]

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 mb-16">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 h-32 flex flex-col items-center justify-center border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-110 hover:bg-slate-700/50">
                <skill.icon 
                  className={`text-4xl ${skill.color} mb-2 transition-all duration-300 ${
                    hoveredSkill === skill.name ? 'animate-float scale-110' : ''
                  }`}
                />
                <span className="text-white text-sm font-medium text-center">
                  {skill.name}
                </span>
                
                {/* Skill level indicator */}
                {hoveredSkill === skill.name && (
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white text-xs px-2 py-1 rounded-md border border-purple-400/30 animate-float">
                    {skill.level}
                  </div>
                )}
              </div>
              
              {/* Glow effect */}
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10 blur-xl`}></div>
            </div>
          ))}
        </div>

        {/* Skill categories */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
            <h3 className="text-xl font-bold text-purple-400 mb-4">Frontend</h3>
            <p className="text-gray-300">
              Creating responsive and interactive user interfaces with modern frameworks and best practices.
            </p>
          </div>
          
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
            <h3 className="text-xl font-bold text-purple-400 mb-4">Backend</h3>
            <p className="text-gray-300">
              Building robust server-side applications, APIs, and database management systems.
            </p>
          </div>
          
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
            <h3 className="text-xl font-bold text-purple-400 mb-4">DevOps</h3>
            <p className="text-gray-300">
              Deployment, containerization, and cloud services for scalable applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills