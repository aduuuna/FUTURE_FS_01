"use client"

import { CodeIcon, BriefcaseIcon, Server, Database, Layout, Smartphone, Bot, Code, GitBranch, Users  } from 'lucide-react'

export default function About() {
  // Core programming languages & tools
  const coreSkills = [
    { name: 'JavaScript', icon: <Code size={24} />, level: 90 },
    { name: 'Python', icon: <Code size={24} />, level: 90 },
    { name: 'HTML', icon: <Layout size={24} />, level: 90 },
    { name: 'CSS', icon: <Layout size={24} />, level: 90 },
    { name: 'PostgreSQL', icon: <Database size={24} />, level: 90 },
    { name: 'Firebase Firestore', icon: <Database size={24} />, level: 90 },
    { name: 'Pinecone (RAG)', icon: <Database size={24} />, level: 90 },
    { name: 'Git/GitHub', icon: <GitBranch size={24} />, level: 90 }
  ]

  // Frameworks & tools
  const toolsSkills = [
    { name: 'React', icon: <Layout size={24} />, level: 85 },
    { name: 'Next.js', icon: <Layout size={24} />, level: 80 },
    { name: 'Node.js', icon: <Server size={24} />, level: 75 },
    { name: 'Express.js', icon: <Server size={24} />, level: 90 },
    { name: 'Tailwind CSS', icon: <Layout size={24} />, level: 90 },
    { name: 'React Native', icon: <Smartphone size={24} />, level: 90 }
  ]
  
  // Future technologies to explore
  const futureSkills = [
    { name: 'PyTorch', icon: <Bot size={24} /> },
    { name: 'TensorFlow', icon: <Bot size={24} /> },
    { name: 'LangChain', icon: <Bot size={24} /> },
    { name: 'Docker', icon: <Server size={24} /> },
    { name: 'GraphQL', icon: <Database size={24} /> },
    { name: 'CI/CD tools', icon: <CodeIcon size={24} /> }
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            About <span className="text-green-600 dark:text-green-500">Me</span>
          </h2>
          <div className="mt-1 h-1 w-24 bg-green-600 dark:bg-green-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Who I Am
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm a passionate Full Stack Web Developer, AI/ML Engineer, and Software Developer focused on creating intuitive and responsive applications. I combine technical expertise with creative problem-solving to build solutions that make a difference.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              My technical journey is driven by continuous learning and innovation. I specialize in building responsive web & mobile applications, API integration, backend systems, RAG implementations, and collaborative development workflows.
            </p>
            
            <div className="flex flex-wrap gap-6 mt-8">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-4">
                  <CodeIcon size={24} className="text-green-600 dark:text-green-500" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white">Development</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Full-Stack Developer</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-4">
                  <BriefcaseIcon size={24} className="text-green-600 dark:text-green-500" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white">Expertise</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">AI/ML Engineering</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-4">
                  <Bot size={24} className="text-green-600 dark:text-green-500" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white">Focus</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Software Development</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-4">
                <Users size={24} className="text-green-600 dark:text-green-500" />
                </div>
                <div>
                <h4 className="font-bold text-gray-800 dark:text-white">Collaboration</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Team Projects</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <a 
                href="/" 
                target="_blank"
                rel="noopener noreferrer" 
                className="px-6 py-3 bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 text-white rounded-md transition-colors inline-flex items-center"
              >
                Download CV
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="space-y-8">
            {/* Core Skills Section */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                Core Technologies
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {coreSkills.map((skill) => (
                  <div key={skill.name} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg flex flex-col items-center text-center transition-transform hover:scale-105">
                    <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-3">
                      <div className="text-green-600 dark:text-green-500">{skill.icon}</div>
                    </div>
                    <span className="font-medium text-gray-800 dark:text-white">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Tools Skills Section */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                Frameworks & Tools
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {toolsSkills.map((skill) => (
                  <div key={skill.name} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg flex flex-col items-center text-center transition-transform hover:scale-105">
                    <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-3">
                      <div className="text-green-600 dark:text-green-500">{skill.icon}</div>
                    </div>
                    <span className="font-medium text-gray-800 dark:text-white">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Future Skills Section */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                Technologies I'm Exploring
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {futureSkills.map((skill) => (
                  <div key={skill.name} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg flex flex-col items-center text-center transition-transform hover:scale-105 border border-dashed border-green-300 dark:border-green-700">
                    <div className="w-12 h-12 rounded-full bg-green-100/50 dark:bg-green-900/20 flex items-center justify-center mb-3">
                      <div className="text-green-500/70 dark:text-green-500/50">{skill.icon}</div>
                    </div>
                    <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}