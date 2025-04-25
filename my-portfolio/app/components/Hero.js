"use client"

import { useRef } from "react";
import  {ReactTyped} from "react-typed";
import Image from "next/image";
import Profile from "../../public/profile.jpg"


export default function Hero() {
    const scrollRef = useRef(null);

    return (
        <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
            {/* Decided to add some green shapes as designs */}
            <div className="absolute -right-32 -bottom-32 w-64 h-64 md:w-96 md:h-96 rounded-full bg-green-600/10 dark:bg-green-700/20 z-0" />
            <div className="absolute left-0 top-1/4 w-24 h-24 md:w-32 md:h-32 rounded-full bg-green-500/10 dark:bg-green-600/20 z-0" />
            
            <div className="container mx-auto px-4 z-10">
                <div className="flex flex-col md:flex-row items-center md:justify-between">
                    <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white leading-tight">
                            Hello, I&#39;m <span className="text-green-600 dark:text-green-500">Joy Owusu Ansah</span>
                        </h1>
                        <div className="mt-4 text-xl md:text-2xl text-gray-600 dark:text-gray-300">
                            I&#39;m a{' '}
                            <ReactTyped
                            strings={['Full Stack Web Developer', 'AI/ML Engineer', 'Software Developer']}
                            typeSpeed={80}
                            backSpeed={50}
                            loop
                            className="text-green-600 dark:text-green-500 font-medium"
                            />
                        </div>
                        <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-lg mx-auto md:mx-0">  
                            Creating elegant solutions through code and design, focused on building modern, responsive web applications.
                        </p>
                        <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
                            <a 
                                href="#projects" 
                                className="px-6 py-3 bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800 text-white rounded-md transition-colors shadow-md"
                                onClick={(e) => {
                                e.preventDefault();
                                document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                View My Work
                            </a>
                            
                            <a 
                                href="/" 
                                target="_blank"
                                rel="noopener noreferrer" 
                                className="px-6 py-3 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-700 rounded-md transition-colors"
                            >
                                Download CV
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="w-full md:w-2/5">
                        <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
                        {/* Profile image container with green border */}
                        <div className="absolute inset-0 rounded-full overflow-hidden p-2 bg-gradient-to-br from-green-400 to-green-600 rotate-3 animate-pulse">
                            <div className="w-full h-full rounded-full overflow-hidden">
                            <Image 
                                src={Profile} 
                                alt="Profile"
                                width={500}
                                height={500}
                                className="object-cover"
                            />
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-600 dark:text-gray-400">
                <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
        </section>
    )
}
