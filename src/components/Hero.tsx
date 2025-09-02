import React, { useState, useEffect } from "react";
import { ChevronDown, Code, Database } from "lucide-react";

const Hero: React.FC = () => {
  const texts = ["Full Stack Developer", "MERN Stack Developer"];
  const [displayedText, setDisplayedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    let currentWord = texts[currentTextIndex];

    const interval = setInterval(() => {
      if (!isDeleting) {
        // Typing
        if (currentIndex <= currentWord.length) {
          setDisplayedText(currentWord.slice(0, currentIndex));
          currentIndex++;
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        // Deleting
        if (currentIndex >= 0) {
          setDisplayedText(currentWord.slice(0, currentIndex));
          currentIndex--;
        } else {
          // Move to next word
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, 100);

    return () => clearInterval(interval);
  }, [currentTextIndex, isDeleting]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen pt-[5rem] flex items-center justify-center relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700"
    >
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative z-10 text-center text-white px-6">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm <span className="text-emerald-400">Musab</span>
          </h1>

          <div className="text-2xl md:text-3xl mb-8 h-12 flex items-center justify-center">
            <span className="mr-2">I'm a</span>
            <span className="text-emerald-400 font-semibold min-w-fit">
              {displayedText}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-blue-100">
            Passionate about creating robust web applications using the MERN
            stack. With 1 year of experience, I build scalable solutions that
            deliver exceptional user experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <Code className="text-emerald-400" size={24} />
              <span className="text-lg">Frontend Expert</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <Database className="text-emerald-400" size={24} />
              <span className="text-lg">Backend Developer</span>
            </div>
          </div>
        </div>

        <button
          onClick={scrollToAbout}
          className="animate-bounce hover:animate-none transition-transform hover:scale-110"
          aria-label="Scroll to about section"
        >
          <ChevronDown size={32} className="text-emerald-400" />
        </button>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-emerald-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;
