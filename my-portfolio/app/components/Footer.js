import Link from 'next/link';
import { Github, Linkedin, Twitter, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-2xl font-bold text-white hover:text-green-500 transition-colors">
              Joy Owusu Ansah
            </Link>
            <p className="mt-2 text-gray-400 max-w-md">
              Full-stack developer specializing in creating modern, responsive web applications.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
                <a 
                    href="https://x.com/ayew_pelle" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800 hover:bg-green-600 rounded-full transition-colors"
                    aria-label="Twitter"
                >
                    <Twitter size={20} />
                </a>
                <a 
                    href="https://www.linkedin.com/in/joy-owusu-ansah" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800 hover:bg-green-600 rounded-full transition-colors"
                    aria-label="LinkedIn"
                >
                    <Linkedin size={20} />
                </a>
                <a 
                    href="https://github.com/aduuuna" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800 hover:bg-green-600 rounded-full transition-colors"
                    aria-label="GitHub"
                >
                    <Github size={20} />
                </a>
            </div>
            
            <button 
              onClick={scrollToTop}
              className="p-3 bg-green-600 hover:bg-green-700 rounded-full transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Joy Owusu Ansah. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}