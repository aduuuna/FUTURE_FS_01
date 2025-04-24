import { Briefcase, GraduationCap } from 'lucide-react';

export default function Resume() {
  const experience = [
    {
      id: 1,
      role: "Software Engineering Fellow",
      company: "Headstarter AI",
      duration: "Jul 2024 - Aug 2024",
      description: "Collaborated with diverse teams to build full-stack web applications, integrating AI features such as chatbots and smart tools like a virtual pantry during my time at Headstarter.",
    },
    {
      id: 2,
      role: "Full Stack Web Developer",
      company: "Future Interns",
      duration: "April 2025 - Present",
      description: "At Future Interns, I’m currently developing impactful projects that demonstrate both frontend and backend expertise as a full-stack developer.",
    },
    {
      id: 3,
      role: "Student",
      company: "Stanford Code in Place",
      duration: "Apr 2025 - Present",
      description: "A free introductory course focused on teaching the fundamentals of computer programming, specifically using Python, through group study sessions and remote learning.",
    }
  ];
  
  const education = [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science",
      institution: "University Of Ghana",
      duration: "2023 - Present",
      description: "Coursework included data structures, algorithms, and web development. Participated in hackathons and coding competitions.",
    }
  ];

  return (
    <section id="resume" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            My <span className="text-green-600 dark:text-green-500">Resume</span>
          </h2>
          <div className="mt-1 h-1 w-24 bg-green-600 dark:bg-green-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            My professional journey and educational background that have shaped my career path.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience Section */}
          <div>
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-4">
                <Briefcase size={24} className="text-green-600 dark:text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Work Experience</h3>
            </div>
            
            <div className="space-y-8 relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
              
              {experience.map((job, index) => (
                <div key={job.id} className="relative pl-12">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1 w-12 h-12 flex items-center justify-center">
                    <div className="w-4 h-4 bg-green-600 dark:bg-green-500 rounded-full"></div>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className="flex flex-wrap justify-between items-center mb-2">
                      <h4 className="text-lg font-bold text-gray-800 dark:text-white">{job.role}</h4>
                      <span className="text-sm text-green-600 dark:text-green-500 font-medium">{job.duration}</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{job.company}</p>
                    <p className="text-gray-600 dark:text-gray-300">{job.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Education Section */}
          <div>
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-4">
                <GraduationCap size={24} className="text-green-600 dark:text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Education</h3>
            </div>
            
            <div className="space-y-8 relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
              
              {education.map((edu, index) => (
                <div key={edu.id} className="relative pl-12">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1 w-12 h-12 flex items-center justify-center">
                    <div className="w-4 h-4 bg-green-600 dark:bg-green-500 rounded-full"></div>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className="flex flex-wrap justify-between items-center mb-2">
                      <h4 className="text-lg font-bold text-gray-800 dark:text-white">{edu.degree}</h4>
                      <span className="text-sm text-green-600 dark:text-green-500 font-medium">{edu.duration}</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{edu.institution}</p>
                    <p className="text-gray-600 dark:text-gray-300">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        
      </div>
    </section>
  );
}