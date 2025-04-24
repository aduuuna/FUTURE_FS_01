"use client"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div>
    <Navbar />
    <Hero />
    <About/>
    <Resume />
    <Projects />
    </div>
  );
}
