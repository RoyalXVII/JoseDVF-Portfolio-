import React from 'react'
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaMedal } from 'react-icons/fa'

const Education = () => {
  const education = [
    {
      id: 1,
      degree: "EC Utbildning - Yrkeshögskolan (2 Years)",
      school: "EC Utbildning - Yrkeshögskolan",
      location: "Sweden",
      period: "2022 - 2024",
      gpa: "Excellent",
      achievements: [
        "Programming Specialization",
        "Front-End Developer Focus",
        "Full-Stack Development Skills"
      ],
      coursework: ["JavaScript", "React", "Node.js", "Database Management", "Web Development", "Software Architecture"]
    },
    {
      id: 2,
      degree: "KYH Utbildning - Yrkeshögskolan (2 Years)",
      school: "KYH Utbildning - Yrkeshögskolan",
      location: "Sweden",
      period: "2020 - 2022",
      gpa: "Excellent",
      achievements: [
        "UX/UI Designer Specialization",
        "Design Thinking Methodology",
        "User-Centered Design Approach"
      ],
      coursework: ["User Experience Design", "User Interface Design", "Prototyping", "Figma", "Adobe Creative Suite", "User Research"]
    },
    {
      id: 3,
      degree: "Economics with Marketing Specialization",
      school: "Thoren Business School - Gymnasium",
      location: "Sweden",
      period: "2016 - 2020",
      gpa: "Very Good",
      achievements: [
        "4-Year Business Program",
        "Marketing Specialization",
        "Business Administration Focus"
      ],
      coursework: ["Economics", "Marketing", "Business Administration", "Financial Management", "Project Management", "Statistics"]
    }
  ]

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Education</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Academic foundation and continuous learning that drives my passion for technology
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid gap-8 md:grid-cols-1">
            {education.map((edu, index) => (
              <div
                key={edu.id}
                className="group relative"
              >
                <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 hover:border-blue-400/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20">
                  {/* Header Section */}
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <FaGraduationCap className="text-white text-lg" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                            {edu.degree}
                          </h3>
                          <div className="flex flex-col sm:flex-row gap-4 text-blue-400 text-sm">
                            <div className="flex items-center gap-2">
                              <FaGraduationCap className="text-xs" />
                              <span className="font-medium">{edu.school}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <FaMapMarkerAlt className="text-xs" />
                              <span>{edu.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-end gap-2 text-right">
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <FaCalendarAlt className="text-xs" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm border border-blue-500/30">
                        GPA: {edu.gpa}
                      </div>
                    </div>
                  </div>

                  {/* Content Grid */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Achievements */}
                    <div>
                      <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                        <FaMedal className="text-yellow-400 text-sm" />
                        Achievements
                      </h4>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-gray-300 text-sm flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Key Coursework */}
                    <div>
                      <h4 className="text-white font-semibold mb-3">Key Coursework</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, courseIndex) => (
                          <span
                            key={courseIndex}
                            className="px-3 py-1 text-xs bg-blue-600/20 text-blue-300 rounded-full border border-blue-500/30 hover:border-blue-400/50 transition-colors duration-300"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-5 transition-opacity duration-500 -z-10 blur-xl"></div>
                
                {/* Side decoration */}
                <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-1 h-16 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse-soft"></div>
      <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse-soft" style={{animationDelay: '3s'}}></div>
    </section>
  )
}

export default Education