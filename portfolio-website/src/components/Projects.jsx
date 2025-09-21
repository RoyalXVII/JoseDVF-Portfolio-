import React, { useState } from 'react'
import { FaExternalLinkAlt, FaGithub, FaReact, FaNodeJs } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiTypescript } from 'react-icons/si'

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null)

  // Sample projects - you can replace these with your actual projects
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with user authentication, payment integration, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      liveUrl: "https://ecommerce-demo.com",
      githubUrl: "https://github.com/yourusername/ecommerce-platform",
      technologies: [
        { name: 'React', icon: FaReact, color: 'text-blue-400' },
        { name: 'Node.js', icon: FaNodeJs, color: 'text-green-400' },
        { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-teal-400' }
      ],
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      liveUrl: "https://taskmanager-demo.com",
      githubUrl: "https://github.com/yourusername/task-manager",
      technologies: [
        { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
        { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-400' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-teal-400' }
      ],
      featured: false
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather dashboard with location-based forecasts and interactive maps.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      liveUrl: "https://weather-dashboard-demo.com",
      githubUrl: "https://github.com/yourusername/weather-dashboard",
      technologies: [
        { name: 'React', icon: FaReact, color: 'text-blue-400' },
        { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-400' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-teal-400' }
      ],
      featured: false
    },
    {
      id: 4,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with data visualization and scheduling features.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      liveUrl: "https://social-dashboard-demo.com",
      githubUrl: "https://github.com/yourusername/social-dashboard",
      technologies: [
        { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
        { name: 'Node.js', icon: FaNodeJs, color: 'text-green-400' },
        { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' }
      ],
      featured: true
    }
  ]

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A collection of projects I've built, showcasing different technologies and solutions
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-purple-400 mb-8 text-center">Featured Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.filter(project => project.featured).map((project) => (
              <div
                key={project.id}
                className="group relative bg-slate-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-[1.02]"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold text-white mb-3">{project.title}</h4>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <div key={tech.name} className="flex items-center gap-1 bg-slate-700/50 px-3 py-1 rounded-full">
                        <tech.icon className={`text-sm ${tech.color}`} />
                        <span className="text-xs text-gray-300">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-sm font-medium"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-purple-400 text-purple-400 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 text-sm font-medium"
                    >
                      <FaGithub />
                      Code
                    </a>
                  </div>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10"></div>
              </div>
            ))}
          </div>
        </div>

        {/* All Projects */}
        <div>
          <h3 className="text-2xl font-bold text-purple-400 mb-8 text-center">Other Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(project => !project.featured).map((project) => (
              <div
                key={project.id}
                className="group relative bg-slate-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-[1.02]"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                
                <div className="p-4">
                  <h4 className="text-lg font-bold text-white mb-2">{project.title}</h4>
                  <p className="text-gray-300 text-sm mb-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.map((tech) => (
                      <div key={tech.name} className="flex items-center gap-1 bg-slate-700/50 px-2 py-1 rounded-full">
                        <tech.icon className={`text-xs ${tech.color}`} />
                        <span className="text-xs text-gray-300">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-md hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-xs font-medium"
                    >
                      <FaExternalLinkAlt />
                      Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-1 border border-purple-400 text-purple-400 rounded-md hover:bg-purple-400 hover:text-white transition-all duration-300 text-xs font-medium"
                    >
                      <FaGithub />
                      Code
                    </a>
                  </div>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects