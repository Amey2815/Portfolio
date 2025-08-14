import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, Database, Globe, Server } from 'lucide-react';
import Navbar from '../components/Navbar';
import { assets } from '../assets/assets.js'
import { PinContainer } from "../components/ui/3d-pin";
import { BackgroundBeamsWithCollision } from "../components/ui/background-beams-with-collision";

const Portfolio = ({ isDarkMode }) => {
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
    "Frontend": [
      {
        title: "Souled Store Clone",
        description: "Interactive cryptocurrency portfolio tracker with real-time price updates, charts, portfolio analytics, and market insights using external APIs.",
        tech: ["React","Tailwind CSS"],
        github: "https://github.com/Amey2815/Souled-Store",
        live: "https://souled-store-nine.vercel.app/",
        image: assets.Souled
      },
      {
        title: "Personal Portfolio",
        description: "Modern weather application with location-based forecasts, interactive maps, weather alerts, and beautiful UI animations.",
        tech: ["React", "Tailwind CSS", "Framer Motion"],
        github: "https://github.com/Amey2815/Amey-Porfolio",
        live: "https://amey-porfolio.vercel.app/",
        image: assets.Portfolio
      }
    ],
    "Full-Stack": [
      {
        title: "Store Rating Platform",
        description: "A full-stack MERN application for rating and managing stores. The platform supports three user roles: Admin, Store Owner, and Regular User.",
        tech: ["React", "Vite", "Tailwind CSS", "Axios", "React Router" , "Node.js", "Express", "MongoDB", "Mongoose", "JWT", "bcryptjs"],
        github: "https://github.com/Amey2815/Store_Rating_platform",
        video: "bg-gradient-to-br from-blue-400 to-purple-600"
      },
      {
        title: "Hospital Management System",
        description: "A full-stack hospital management system with a Node.js/Express backend and a React frontend",
        tech: ["React", "Vite", "Tailwind CSS", "Axios", "React Router" , "Node.js", "Express", "MongoDB", "Mongoose", "JWT", "bcryptjs"],
        github: "https://github.com/Amey2815/Hospital-Managment",
        video: assets.hospital
      },
    ],
    "Freelance": [
      {
        title: "QuickTalk",
        description: "QuickTalk is communication offering  Auto Text SMS After Call, Auto Whatsapp Message with media After Call , Whatsapp ChatBot  businesses website.",
        tech: ["Framer Motion", "React.js" , 'Tailwind CSS', "Lucide-react" , "React Router DOM" ],
        github: "https://github.com/Amey2815/Replica_project",
        live: "https://replica-project.vercel.app/",
        image: assets.QuickTalk
      },
      {
        title: "RegorpDigiTech",
        description: "RegorpDigiTech is a digital marketing , grafic design, web development, and mobile app development company website.",
        tech: ["Framer Motion", "React.js" , 'Tailwind CSS', "Lucide-react"],
        github: "https://github.com/Amey2815/RegoProject",
        live: "https://rego-project.vercel.app/",
        image: assets.Rego
      }
    ]
  };

  const [activeCategory, setActiveCategory] = useState("Frontend");

  const skills = [
    {
      image: assets.react, name: "react.js"
    },
    {
      image: assets.node, name: "Node.js"
    },
    {
      image: assets.nextjs, name: "Next.js"
    },
    {
      image: assets.express, name: "Express.js"
    },
    {
      image: assets.mongodb, name: "MongoDB"
    },
    {
      image: assets.mysql, name: "MySQL"
    },
    {
      image: assets.js, name: "Javascript"
    },
    {
      image: assets.java, name: "java"
    },
    {
      image: assets.Postman, name: "Postman"
    },
    {
      image: assets.Tailwind, name: "Tailwind CSS"
    },
    ,

  ];



  return (
    <div className={`min-h-screen  ${isDarkMode ? "bg-black" : "bg-white"} `}>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <BackgroundBeamsWithCollision  >
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className={` ${isDarkMode ? "text-white" : "text-black"} text-4xl md:text-5xl font-bold mb-6 `}>
            🖐️Hey there! I'm
            <br />
            <span className='bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent text-5xl md:text-7xl' >Amey Powar</span>
          </h1>
          <p className={`text-xl md:text-2xl mb-8 ${isDarkMode ? "text-gray-300" : "text-gray-700"} leading-relaxed`}>
            Full Stack MERN Developer crafting digital experiences with modern web technologies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('projects')}
              className={`px-8 py-3 ${isDarkMode ? "text-gray-100" : "text-gray-900"} bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105`}
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`px-8 py-3 border-2 ${isDarkMode ? "text-gray-100" : "text-gray-900"} border-blue-400 rounded-full font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300`}
            >
              Get In Touch
            </button>
          </div>
        </div>
        </BackgroundBeamsWithCollision>
        
      </section>

      {/* About Section */}
      <section id="about" className="py-10 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-12 items-center">
            <div>
              <div className='md:my-15 my-5 md:mx-5'>
                <PinContainer
                  title='Amey Powar'
                  href="https://github.com/Amey2815"
                >
                  <div className='flex justify-center md:w-86 w-60'>
                    <div className="relative group">
                      <img
                        className='md:w-[700px] w-[400px] h-full rounded-2xl transform group-hover:scale-105 transition-transform duration-300'
                        src={assets.profile}
                        alt="Amey Powar"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <span className="text-white font-medium">Click to connect</span>
                      </div>
                    </div>
                  </div>
                </PinContainer>
              </div>

              <p className={`${isDarkMode ? "text-gray-300" : "text-black"} mb-6 leading-relaxed md:text-left text-center md:text-lg text-xs`}>
                Passionate about creating innovative web solutions with clean code and exceptional user experiences.
                I bring ideas to life through modern technologies and creative problem-solving.
              </p>

              <div className="flex flex-wrap justify-center items-center gap-6 mt-8">
                <a
                  href="https://github.com/Amey2815"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-300 bg-gray-800 hover:bg-gray-700 transition-colors"
                  target='_blank'
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/amey-powar-a85869332?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-300 bg-blue-600 hover:bg-blue-500 transition-colors"
                  target='_blank'
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
                
              </div>
            </div>

            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">
                  Technical Skills
                </h3>
                <p className="text-gray-400 max-w-lg mx-auto">
                  Technologies I work with to bring ideas to life
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-2xl p-1"
                  >
                    {/* Gradient border effect */}
                    <div className={`absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-br 
          ${isDarkMode ?
                        "from-blue-500/30 via-purple-500/30 to-pink-500/30" :
                        "from-blue-300 via-purple-300 to-pink-300"
                      } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    ></div>

                    {/* Skill card */}
                    <div className={`h-full flex flex-col items-center justify-center p-3 rounded-xl transition-all duration-500
          ${isDarkMode ?
                        "bg-gray-800/80 group-hover:bg-gray-800" :
                        "bg-gray-200/80 group-hover:bg-white"
                      }`}
                    >
                      {/* Skill icon with glow effect */}
                      <div className={`relative mb-4 p-3 rounded-full transition-all duration-300
            ${isDarkMode ?
                          "bg-gray-700 group-hover:bg-gradient-to-br from-blue-500/20 to-purple-500/20" :
                          "bg-white group-hover:bg-gradient-to-br from-blue-100 to-purple-100"
                        }`}
                      >
                        <div className="w-10 h-10 flex items-center justify-center">
                          <img
                            className={`w-full h-full object-contain transition-transform duration-300 group-hover:scale-110 group-hover:brightness-100
                  ${isDarkMode ? "filter brightness-50 " : ""}`}
                            src={skill.image}
                            alt={skill.name}
                          />
                        </div>
                        {/* Glow effect */}
                        <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 
              ${isDarkMode ?
                            "bg-gradient-to-br from-blue-500/30 to-purple-500/30 blur-md" :
                            "bg-gradient-to-br from-blue-300/30 to-purple-300/30 blur-md"
                          } transition-opacity duration-500`}
                        ></div>
                      </div>

                      {/* Skill name with animated underline */}
                      <h4 className="font-semibold text-center relative">
                        <span className={`relative z-10 ${isDarkMode ? "text-white" : "text-black"} `}>{skill.name}</span>
                        <span className={`absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full 
              ${isDarkMode ? "bg-purple-400" : "bg-blue-500"} 
              transition-all duration-300 ease-out`}
                        ></span>
                      </h4>

                      {/* Experience level (optional) */}
                      <div className="w-full mt-3 h-1 bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full 
                ${index % 3 === 0 ? "bg-blue-400" :
                              index % 3 === 1 ? "bg-purple-400" : "bg-pink-400"}`}
                          style={{ width: `${Math.min(90, 70 + (index * 5) % 30)}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>




      {/* Projects Section */}
      <section id="projects" className="py-20 px-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className={` ${ isDarkMode ? "text-white" : "text-black" } text-lg max-w-2xl mx-auto mb-8`}>
              Explore my work across different areas of development, from full-stack applications to specialized frontend and backend solutions
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {Object.keys(projectCategories).map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeCategory === category
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
            <div key={index} className={`${isDarkMode ? "bg-slate-800/50" : "bg-slate-900"} rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group border border-slate-700/50 hover:border-blue-500/50`}>
                <div className={`h-48    flex items-center justify-center relative`}>
                  {project.image ? <img  className='flex items-center justify-center relative' src={project.image} alt="" />
                   : <video className='flex items-center justify-center relative h-full' src={project.video}  controls muted height='100%' ></video> }
                  <div className="absolute top-4 right-4">
                    <span className="bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-white/80">
                      {activeCategory}
                    </span>
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
                        target='_blank'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors text-sm hover:scale-105 transform"
                      target='_blank'
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    {project.live ? (<a
                      href={project.live}
                      className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors text-sm hover:scale-105 transform"
                      target='_blank'
                    >
                      <ExternalLink className="w-4 h-4" />
                      {activeCategory === "Freelance" ? "API Docs" : "Live Demo"}
                    </a>) : <></>}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Project Statistics */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`text-center ${isDarkMode ? "bg-gradient-to-br from-blue-500/10 to-purple-500/10" : "bg-gradient-to-br from-blue-500 to-purple-500"}  rounded-xl p-6 border border-blue-500/20`}>
              <div className={`text-3xl font-bold ${ isDarkMode ? "text-blue-400" : "text-white"} mb-2`}>
                {projectCategories["Full-Stack"].length}
              </div>
              <div className="text-gray-300">Full-Stack Projects</div>
            </div>
            <div className={`text-center ${ isDarkMode ? "bg-gradient-to-br from-green-500/10 to-blue-500/10" : "bg-gradient-to-br from-green-500 to-blue-500" } rounded-xl p-6 border border-green-500/20`}>
              <div className={`text-3xl font-bold ${ isDarkMode ? "text-green-400" : "text-white"} mb-2`}>
                {projectCategories["Frontend"].length}
              </div>
              <div className="text-gray-300">Frontend Projects</div>
            </div>
            <div className={`text-center ${ isDarkMode ? "bg-gradient-to-br from-purple-500/10 to-pink-500/10" : "bg-gradient-to-br from-purple-500 to-pink-500"} rounded-xl p-6 border border-purple-500/20`}>
              <div className={`text-3xl font-bold ${ isDarkMode ? "text-purple-400" : "text-white"} mb-2`}>
                {projectCategories["Freelance"].length}
              </div>
              <div className="text-gray-300">Freelance Projects</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 ">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className={`${ isDarkMode ? "text-gray-300" : ""} text-lg mb-12 max-w-2xl mx-auto leading-relaxed`}>
            I'm always interested in new opportunities and exciting projects.
            Whether you want to collaborate or just say hello, I'd love to hear from you!
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className={`${ isDarkMode ? "bg-slate-700/50" : "bg-slate-700/90"} p-6 rounded-xl hover:bg-slate-700 transition-colors duration-300`}>
              <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2 text-white">Email</h3>
              <a href="mailto:amey.powar15@gmail.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                amey.powar15@gmail.com
              </a>
            </div>
            <div className={`${ isDarkMode ? "bg-slate-700/50" : "bg-slate-700/90"} p-6 rounded-xl hover:bg-slate-700 transition-colors duration-300`}>
              <Linkedin className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2 text-white ">LinkedIn</h3>
              <a href="https://www.linkedin.com/in/amey-powar-a85869332?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="text-gray-300 hover:text-blue-400 transition-colors">
                AmeyPowar
              </a>
            </div>
            <div className={`${ isDarkMode ? "bg-slate-700/50" : "bg-slate-700/90"} p-6 rounded-xl hover:bg-slate-700 transition-colors duration-300`}>
              <Github className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2 text-white">GitHub</h3>
              <a href="https://github.com/Amey2815" className="text-gray-300 hover:text-blue-400 transition-colors">
                AmeyPowar
              </a>
            </div>
          </div>

          <a
            href="mailto:amey.powar15@gmail.com"
            className={`inline-block px-8 py-3 text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105`}
          >
            Send Me a Message
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2025 Amey Developer. Built with React and Tailwind CSS.
          </p>
        </div>
      </footer>

      
    </div>
  );
};

export default Portfolio;