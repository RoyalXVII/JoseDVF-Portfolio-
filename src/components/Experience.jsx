import React from 'react'
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      position: "Junior Programmer / UX UI Designer",
      company: "Freelance",
      location: "Remote",
      period: "2023 - Present",
      description: "Developed a WordPress website for HandiHow's applications, focusing on improving user experience and simplifying navigation. Worked closely with a client from Mallorca, Spain, to create a functional WordPress website. Designed user-friendly websites primarily featuring contact information and options for users to select and send PDF files to mail addresses.",
      technologies: ["WordPress", "HTML5", "CSS3", "JavaScript", "UX/UI Design"]
    },
    {
      id: 2,
      position: "UX Designer",
      company: "Various Projects",
      location: "Remote",
      period: "2022 - 2023",
      description: "Developed interactive design prototypes and optimized user flow for various applications. Worked extensively with Figma to create high-fidelity prototypes and mock-ups of applications that could solve specific problems. Created databases using MongoDB and SQL Azure to host mock-up projects.",
      technologies: ["Figma", "Adobe XD", "Adobe Photoshop", "MongoDB", "SQL Azure", "Prototyping"]
    },
    {
      id: 3,
      position: "Web Developer",
      company: "School Projects & Freelance",
      location: "Sweden/Netherlands",
      period: "2020 - 2022",
      description: "Designed multiple websites using CSS and HTML with light Java. Worked extensively with Adobe Photoshop and XD to create logos and designs for mock-up projects and assignments. Worked in collaborative teamwork environments while both programming and UX designing. Completed projects involving budgeting and thinking about both investors and company budgets.",
      technologies: ["HTML5", "CSS3", "Java", "Adobe Photoshop", "Adobe XD", "Team Collaboration"]
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