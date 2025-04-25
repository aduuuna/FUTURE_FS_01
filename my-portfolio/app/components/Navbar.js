"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import {useTheme} from 'next-themes';
import {Menu, X,Moon, Sun} from 'lucide-react';

export default function Navbar() {
    const [mounted, setMounted] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    // debug 
    useEffect(() => {
        console.log("Theme changed to:", theme);
        console.log("Dark class applied:", document.documentElement.classList.contains('dark'));
    }, [theme]);
    
    const navLinks = [
        {name: 'Home', href: "#home"},
        {name: 'About', href: "#about"},
        {name: 'Projects', href: '#projects'},
        {name: 'Resume', href: "#resume"},
        {name: 'Contact', href: "#contact"},

    ];

    return (
        <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/90 dark:bg-gray-900/90 shadow-sm transition-colors duration-200">
            <div className="container mx-auto px-4 py-3">
                <div className="flex items-center justify-between">
                    <Link href="/" className="text-xl font-bold text-gray-800 dark:text-white hover:text-green-600 dark:hover:text-green-500 transition-colors">
                        Joy (aduuuna)
                    </Link>

                    {/* This code is responsible for desktop navigaion*/}

                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map(link => (
                            <Link
                            key={link.name}
                            href={link.href}
                            className="text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-500 transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}

                        {/* This code is responsible for theme toggling*/}

                        {mounted && (
                            <button
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-500 transition-colors"
                                aria-label="Toggle Dark Mode"
                            >
                                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                            </button>
                        )}
                    </div> 

                    {/* This code is responsible for Mobile Menu Button */}
                        
                    <div className="md:hidden flex items-center">
                        {mounted && (
                            <button
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                                className="p-2 mr-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                                aria-label="Toggle Dark Mode"
                            >
                                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                            </button>
                        )}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                            {mobileMenuOpen ? <X size={24}/> : <Menu size={24}/>}
                        </button>
                    </div>
                </div>
            </div>

            {/* This code is responsible for the mobile menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white dark:bg-gray-900 shadow-md transition-all duration-200">
                    <div className="container mx-auto px-4 py-2 space-y-2">
                        {navLinks.map(link => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="block py-2 text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-500 transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
}