"use client"


import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="relative scroll-smooth">
          <Navbar />
          <Hero />
          <br/>
          <br/>
          <About />
          <Projects />
          <Contact />
          <Footer />
    </main>
  );
}
