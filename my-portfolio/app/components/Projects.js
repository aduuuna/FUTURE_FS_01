import { useState } from 'react';
import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';
import FlashCardImage from "../../public/FlashCard.png";
import MaternalImage from "../../public/Maternal.png";
import PortfolioImage from "../../public/Portfolio.png";
import ChatForgeImage from "../../public/ChatForge.jpg";

export default function Projects({ projects }) {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', 'Web', 'In-Progress', 'Design'];
  

  const sampleProjects = [
    {
      id: 1,
      title: "Maternal Support Communication App",
      description: "Maternal Support Communication Web Application, is designed to provide thoughtful support, discussion, and case management for expecting mothers, especially in low-resource environments. The application enables interaction via text and voice, ensuring inclusivity and accessibility.",
      image: MaternalImage,
      category: "Web",
      technologies: ["Next.js", "Firebase", "Material UI", "Gemini API", "Clerk", "Firebase", "Vercel"],
      demo: "https://devpost-medi-hacks.vercel.app/",
      github: "https://github.com/aduuuna/Devpost-MediHacks"
    },
    {
      id: 2,
      title: "AI-FlashCard Stripe",
      description: "AI-Powered Flashcard Generator is a web application that allows users to create customized flashcards using artificial intelligence. This project leverages cutting-edge technologies to provide a seamless, efficient, and user-friendly experience for students, professionals, and lifelong learners.",
      image: FlashCardImage,
      category: "Web",
      technologies: ["Next.js", "Node.js", "Stripe", "Clerk", "Firebase", "Vercel", "Gemini API"],
      demo: "https://ai-flash-card-stripe.vercel.app/",
      github: "https://github.com/aduuuna/AI-FlashCard-Stripe"
    },
   
    {
      id: 3,
      title: "Portfolio Website",
      description: "A responsive personal portfolio website showcasing skills and projects.",
      image: PortfolioImage,
      category: "Design",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "MongoDB", "Vercel"],
      demo: "/",
      github: "https://github.com/aduuuna/FUTURE_FS_01"
    }, {
      id: 4,
      title: "WeatherApp",
      description: "A modern, responsive weather application built with Next.js that provides real-time weather data and forecasts for locations worldwide. The app leverages the WeatherAPI for accurate and up-to-date weather information.",
      image: ChatForgeImage,
      category: "Web",
      technologies: ["Next.js", "Tailwind CSS", "React", "Lucide React", "WeatherAPI", "Local Storage"],
      demo: "https://future-fs-02-nine.vercel.app/",
      github: "https://github.com/aduuuna/FUTURE_FS_02"
      
    }

  ];
  
  const projectsToShow = projects || sampleProjects;
  
  const filteredProjects = activeFilter === 'All' 
    ? projectsToShow 
    : projectsToShow.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            My <span className="text-green-600 dark:text-green-500">Projects</span>
          </h2>
          <div className="mt-1 h-1 w-24 bg-green-600 dark:bg-green-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            Here are some of my recent projects. Each one was designed and developed with attention to detail and best practices.
          </p>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeFilter === filter
                  ? 'bg-green-600 dark:bg-green-700 text-white'
                  : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id}
              className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className=" w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex gap-4">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full text-gray-800 hover:text-green-600 transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full text-gray-800 hover:text-green-600 transition-colors"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>
                <div className="absolute top-4 right-4 px-3 py-1 bg-green-600 text-white text-xs font-medium rounded-full">
                  {project.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map(tech => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}