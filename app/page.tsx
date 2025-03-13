"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero ";

import { Container, Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

import { useCallback, useEffect } from "react";
import Particles from "@tsparticles/react";
import Blog from "@/components/Blog";

export default function Home() {
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
    <div className="relative">
      {/* Background Animation */}
      <Particles
        className="absolute inset-0 z-0"
        particlesLoaded={particlesLoaded}
        options={{
          fullScreen: { enable: false },
          particles: {
            number: { value:  100},
            color: { value: "#00ccff" },
            shape: { type: "circle" },
            opacity: { value: 0.6 },
            size: { value: 2 },
            move: { enable: true, speed: 0.8, direction: "none" },
          },
        }}
      />
    <div className="dark:bg-[#0D0D2B] ">
      <Header />

      {/* hero */}
      <main className="bg-[#0D0D2B] text-white">
      <Hero />
    </main>

<Blog />
</div>

      <Footer />
    </div>
    
  );
}
