import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, Database, Globe, Server } from 'lucide-react';
import Navbar from '../components/Navbar';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const projectCategories = {
    "Full-Stack": [
      {
        title: "E-Commerce Platform",
        description: "Complete online shopping solution with user authentication, payment gateway integration, inventory management, and admin dashboard with real-time analytics.",
        tech: ["React", "Node.js", "MongoDB", "Express", "Stripe API", "JWT", "Redux"],
        github: "#",
        live: "#",
        image: "bg-gradient-to-br from-blue-400 to-purple-600"
      },
      {
        title: "Social Media App",
        description: "Full-featured social platform with real-time messaging, post sharing, likes/comments system, user profiles, and image upload functionality.",
        tech: ["React", "Node.js", "MongoDB", "Express", "Socket.io", "Cloudinary", "JWT"],
        github: "#",
        live: "#",
        image: "bg-gradient-to-br from-pink-400 to-red-600"
      },
      {
        title: "Learning Management System",
        description: "Educational platform with course creation, video streaming, quiz system, progress tracking, and student-teacher interaction features.",
        tech: ["React", "Node.js", "MongoDB", "Express", "AWS S3", "Stripe", "Chart.js"],
        github: "#",
        live: "#",
        image: "bg-gradient-to-br from-green-400 to-blue-600"
      }
    ],
    "Frontend": [
      {
        title: "Portfolio Dashboard",
        description: "Interactive cryptocurrency portfolio tracker with real-time price updates, charts, portfolio analytics, and market insights using external APIs.",
        tech: ["React", "Chart.js", "Tailwind CSS", "REST APIs", "Local Storage"],
        github: "#",
        live: "#",
        image: "bg-gradient-to-br from-yellow-400 to-orange-600"
      },
      {
        title: "Weather App",
        description: "Modern weather application with location-based forecasts, interactive maps, weather alerts, and beautiful UI animations.",
        tech: ["React", "OpenWeather API", "Geolocation API", "CSS Animations", "PWA"],
        github: "#",
        live: "#",
        image: "bg-gradient-to-br from-cyan-400 to-blue-600"
      },
      {
        title: "Task Manager UI",
        description: "Intuitive task management interface with drag-and-drop functionality, filters, search, and beautiful animations using modern React patterns.",
        tech: ["React", "React DnD", "Framer Motion", "Tailwind CSS", "Context API"],
        github: "#",
        live: "#",
        image: "bg-gradient-to-br from-purple-400 to-pink-600"
      }
    ],
    "Backend": [
      {
        title: "REST API Server",
        description: "Robust RESTful API with comprehensive authentication, CRUD operations, data validation, error handling, and extensive documentation.",
        tech: ["Node.js", "Express", "MongoDB", "JWT", "Bcrypt", "Swagger", "Jest"],
        github: "#",
        live: "#",
        image: "bg-gradient-to-br from-gray-600 to-gray-800"
      },
      {
        title: "Real-time Chat API",
        description: "Scalable chat server with Socket.io, real-time messaging, rooms, user presence, message history, and file sharing capabilities.",
        tech: ["Node.js", "Socket.io", "MongoDB", "Express", "Multer", "Redis"],
        github: "#",
        live: "#",
        image: "bg-gradient-to-br from-emerald-400 to-teal-600"
      },
      {
        title: "Authentication Microservice",
        description: "Secure authentication service with OAuth integration, password reset, email verification, role-based access control, and rate limiting.",
        tech: ["Node.js", "Express", "MongoDB", "Passport.js", "Nodemailer", "Redis"],
        github: "#",
        live: "#",
        image: "bg-gradient-to-br from-red-400 to-pink-600"
      }
    ]
  };

  const [activeCategory, setActiveCategory] = useState("Full-Stack");

  const skills = [
    { name: "Frontend", icon: <Globe className="w-6 h-6" />, techs: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind"] },
    { name: "Backend", icon: <Server className="w-6 h-6" />, techs: ["Node.js", "Express", "REST APIs", "JWT"] },
    { name: "Database", icon: <Database className="w-6 h-6" />, techs: ["MongoDB", "Mongoose", "MySQL"] },
    { name: "Tools", icon: <Code className="w-6 h-6" />, techs: ["Git", "Postman", "VS Code", "npm"] }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Navigation */}
      <Navbar/>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-4xl font-bold">
              JD
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            John Developer
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed">
            Full Stack MERN Developer crafting digital experiences with modern web technologies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-blue-400 rounded-full font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Passionate full-stack developer with expertise in modern web technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-blue-400">My Journey</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                I'm a passionate Full Stack Developer specializing in the MERN stack with over 3 years of experience 
                building scalable web applications. I love turning complex problems into simple, beautiful, and intuitive solutions.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                My expertise spans across frontend and backend development, with a strong focus on creating seamless 
                user experiences and robust server-side architectures. I'm constantly learning new technologies and 
                best practices to stay current in this ever-evolving field.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="bg-slate-700/50 p-6 rounded-xl hover:bg-slate-700 transition-colors duration-300">
                  <div className="flex items-center mb-3">
                    <div className="text-blue-400 mr-3">{skill.icon}</div>
                    <h4 className="font-semibold">{skill.name}</h4>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {skill.techs.map((tech, techIndex) => (
                      <span key={techIndex} className="text-xs bg-slate-600 px-2 py-1 rounded text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              Explore my work across different areas of development, from full-stack applications to specialized frontend and backend solutions
            </p>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {Object.keys(projectCategories).map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white transform scale-105'
                      : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600 hover:text-white'
                  }`}
                >
                  {category}
                  <span className="ml-2 text-sm opacity-75">
                    ({projectCategories[category].length})
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectCategories[activeCategory].map((project, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group border border-slate-700/50 hover:border-blue-500/50">
                <div className={`h-48 ${project.image} flex items-center justify-center relative`}>
                  <div className="absolute top-4 right-4">
                    <span className="bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-white/80">
                      {activeCategory}
                    </span>
                  </div>
                  <div className="text-white/80 text-6xl font-bold group-hover:scale-110 transition-transform duration-300">
                    {project.title.charAt(0)}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-blue-400 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="text-xs bg-slate-700 px-2 py-1 rounded text-gray-300 hover:bg-slate-600 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors text-sm hover:scale-105 transform"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors text-sm hover:scale-105 transform"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {activeCategory === "Backend" ? "API Docs" : "Live Demo"}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Project Statistics */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl p-6 border border-blue-500/20">
              <div className="text-3xl font-bold text-blue-400 mb-2">
                {projectCategories["Full-Stack"].length}
              </div>
              <div className="text-gray-300">Full-Stack Projects</div>
            </div>
            <div className="text-center bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-xl p-6 border border-green-500/20">
              <div className="text-3xl font-bold text-green-400 mb-2">
                {projectCategories["Frontend"].length}
              </div>
              <div className="text-gray-300">Frontend Projects</div>
            </div>
            <div className="text-center bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-purple-500/20">
              <div className="text-3xl font-bold text-purple-400 mb-2">
                {projectCategories["Backend"].length}
              </div>
              <div className="text-gray-300">Backend Projects</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm always interested in new opportunities and exciting projects. 
            Whether you want to collaborate or just say hello, I'd love to hear from you!
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-slate-700/50 p-6 rounded-xl hover:bg-slate-700 transition-colors duration-300">
              <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Email</h3>
              <a href="mailto:john@example.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                john@example.com
              </a>
            </div>
            <div className="bg-slate-700/50 p-6 rounded-xl hover:bg-slate-700 transition-colors duration-300">
              <Linkedin className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                /in/johndeveloper
              </a>
            </div>
            <div className="bg-slate-700/50 p-6 rounded-xl hover:bg-slate-700 transition-colors duration-300">
              <Github className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">GitHub</h3>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                /johndeveloper
              </a>
            </div>
          </div>

          <a
            href="mailto:john@example.com"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            Send Me a Message
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2025 John Developer. Built with React and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;