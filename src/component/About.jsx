import React, { useEffect, useRef } from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import ParticleBackground from "./Particlebackground";
import Profile from "./profile.jpeg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Social } from "./Social";

gsap.registerPlugin(ScrollTrigger);

export default function About() {


  return (
    <ParallaxProvider>
      <section
  
        className="relative min-h-screen overflow-hidden"
      >
        {/* Particle background */}
        <div className="absolute inset-0 z-0">
          <ParticleBackground />
        </div>

        {/* Foreground content */}
        <div className="flex gap-24 z-10 relative top-[180px] left-[220px]">
          {/* Image with GSAP rotate */}
          <Parallax speed={5} scale={[0.9,1.1]}>
          <div className="transform transition-transform duration-300 hover:scale-105 flex flex-col gap-4">
            <img
      
              src={Profile}
              alt="Profile"
              className="w-[300px] rounded-lg"
            />
            <div><Social/></div>
          </div>
</Parallax>
          {/* Text with Parallax */}
          <Parallax speed={5} scale={[1, 1.1]}>
            <div className=" rounded-xl  text-white text-xl leading-relaxed max-w-2xl transform transition-transform duration-300 hover:scale-105">
              Hi! I’m a Full Stack Developer and Website Designer with a passion for creating powerful,
              efficient, and visually engaging web applications. I specialize in building dynamic solutions 
              that seamlessly integrate robust backend systems with modern, responsive front-end designs. 
              From interactive dashboards to custom websites, I strive to deliver work that is not only functional 
              and user-friendly but also leaves a lasting impact. With a focus on performance, accessibility, 
              and clean design, I’m dedicated to helping clients bring their ideas to life on the web.
            </div>
          </Parallax>
        </div>
      </section>
    </ParallaxProvider>
  );
}
