"use client";
import { FaBookOpen, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useCallback } from "react";
import { loadSlim } from "@tsparticles/slim";
import { Engine, Container } from "@tsparticles/engine";
import Particles from "@tsparticles/react";

const Hero = () => {
  // Initialize particles inside useEffect
  useEffect(() => {
    const initParticles = async (engine: Engine) => {
      await loadSlim(engine);
    };
    initParticles((window as any).tsParticles);
  }, []);

  const particlesLoaded = useCallback(async (container?: Container) => {
    console.log("Particles Loaded:", container);
  }, []);

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden px-6 text-center">
      {/* Background Animation */}
      <Particles
        className="absolute inset-0 z-0"
        particlesLoaded={particlesLoaded}
        options={{
          fullScreen: { enable: false },
          particles: {
            number: { value: 50 },
            color: { value: "#00ccff" },
            shape: { type: "circle" },
            opacity: { value: 0.6 },
            size: { value: 2 },
            move: { enable: true, speed: 0.8, direction: "none" },
          },
        }}
      />

      {/* Main Content */}
      <motion.h1
        className="relative z-10 text-4xl md:text-6xl font-bold text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm <span className="text-blue-400">Santhosh Raj</span>
      </motion.h1>

      <motion.p
        className="text-gray-200 mt-3 text-lg md:text-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Passionate about{" "}
        <span className="text-blue-300 font-semibold">
          Python, Django, React, Tailwind CSS, and AI.
        </span>
      </motion.p>

      {/* New Welcome Message */}
      <motion.p
        className="text-gray-300 mt-4 max-w-2xl text-base md:text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        Welcome to <span className="text-blue-400 font-semibold">StackScripts</span>!  
        A place where technology meets creativity. Enjoy high-quality content,  
        tutorials, and deep insights into web development, AI, and more.  
        Let's build something amazing together!
      </motion.p>

      {/* Call to Action */}
      <motion.div
        className="mt-6 flex flex-wrap justify-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <motion.a
  href="#blog"
  whileHover={{ scale: 1.1 }}
  transition={{ duration: 0.3 }}
  className="bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-600 transition-all text-lg z-[10001] cursor-pointer flex items-center gap-2"
  aria-label="Read My Blog"
>
  <FaBookOpen className="text-xl" />
  Read My Blog
</motion.a>

<motion.a
  href="https://github.com/yourgithub"
  whileHover={{ scale: 1.1 }}
  transition={{ duration: 0.3 }}
  className="bg-gray-800 text-white px-6 py-3 rounded-full shadow-lg hover:bg-gray-700 transition-all text-lg z-[10001] cursor-pointer flex items-center gap-2"
  aria-label="Visit My GitHub Profile"
>
  <FaGithub className="text-xl" />
  GitHub
</motion.a>
      </motion.div>
    </div>
  );
};

export default Hero;
