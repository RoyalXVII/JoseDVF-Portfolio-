import React from 'react'
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      position: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      location: "San Francisco, CA",
      period: "2023 - Present",
      description: "Led the development of responsive web applications using React and TypeScript. Collaborated with cross-functional teams to deliver high-quality user experiences and improved application performance by 40%.",
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"]
    },
    {
      id: 2,
      position: "Full Stack Developer",
      company: "Digital Innovations Co.",
      location: "New York, NY",
      period: "2021 - 2023",
      description: "Developed and maintained full-stack web applications using modern technologies. Implemented RESTful APIs and database solutions, resulting in improved system reliability and user satisfaction.",
      technologies: ["React", "Node.js", "MongoDB", "Express.js"]
    },
    {
      id: 3,
      position: "Frontend Developer",
      company: "Creative Web Studio",
      location: "Los Angeles, CA",
      period: "2019 - 2021",
      description: "Created engaging user interfaces and interactive web experiences. Worked closely with designers to implement pixel-perfect designs and ensure cross-browser compatibility.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Vue.js"]
    },
    {
      id: 4,
      position: "Junior Web Developer",
      company: "StartUp Hub",
      location: "Austin, TX",
      period: "2018 - 2019",
      description: "Assisted in developing web applications and learned modern development practices. Participated in code reviews and contributed to improving development workflows and documentation.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"]
    }
  ]

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Experience</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            My professional journey in web development and the experiences that shaped my skills
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-6 top-20 w-0.5 h-full bg-gradient-to-b from-purple-400 to-transparent opacity-30"></div>
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-4 top-6 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full border-4 border-slate-900 z-10"></div>
              
              {/* Content card */}
              <div className="ml-16 group">
                <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-[1.02]">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors duration-300">
                        {exp.position}
                      </h3>
                      <div className="flex items-center gap-4 text-purple-400 text-sm">
                        <div className="flex items-center gap-1">
                          <FaBriefcase className="text-xs" />
                          <span>{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FaMapMarkerAlt className="text-xs" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-gray-400 text-sm mt-2 md:mt-0">
                      <FaCalendarAlt className="text-xs" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs bg-purple-600/20 text-purple-300 rounded-full border border-purple-500/30 hover:border-purple-400/50 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10 blur-xl ml-16"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse-soft"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse-soft" style={{animationDelay: '2s'}}></div>
    </section>
  )
}

export default Experience