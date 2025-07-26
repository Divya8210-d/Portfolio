import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LampContainer } from "../components/ui/lamp.jsx";
import { motion } from "motion/react";
import CSS from "../logos/css.png";
import HTML from "../logos/Html.png";
import JS from "../logos/js.png";
import ReactLogo from "../logos/react.png";
import Node from "../logos/node.png";
import MongoDB from "../logos/mongoDB.png";
import Firebase from "../logos/Firebase.png";

import Next from "../logos/NEXT.png";
import TypeScript from "../logos/ts.png";
import Tailwind from "../logos/TAILWIND.png";
import Git from "../logos/Git.png";
import GitHub from "../logos/Github.png";
import Figma from "../logos/FIGMA.png";
import Redux from "../logos/REDUX.png";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const containerRef = useRef(null);
  const sectionRef = useRef(null);

  const techStack = [
    { name: "MongoDB", img:MongoDB },
    { name: "Express.js", img:"" },
    { name: "React", img:ReactLogo },
    { name: "Node.js", img:Node},
    { name: "JavaScript", img:JS },
    { name: "TypeScript", img:TypeScript },
    { name: "HTML5", img:HTML },
    { name: "CSS3", img:CSS },
    { name: "Tailwind CSS", img:Tailwind },
    { name: "Next.js", img:Next },
    { name: "Firebase", img:Firebase },
    { name: "Git", img:Git },
    { name: "GitHub", img:GitHub },
    { name: "Redux", img:Redux },
    { name: "Figma", img:Figma },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;


    gsap.to(container, {
           transform:"translateX(-370%)",
      scrollTrigger: {
        trigger: section,
        scroller:"body",
        start: "top 0%",
        end:"top -100%" ,
        scrub: 2,
        pin: true,

        markers: true, // remove in production
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-[#1C1C1E] relative z-40 flex items-center overflow-hidden"
    >
      <div className="w-full">
        <div className="overflow-hidden"> <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5,  }}
        whileInView={{ opacity: 1, }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-3xl font-medium tracking-tight text-transparent md:text-5xl mb-5"
      >
        My Tech Stack
      </motion.h1>
    </LampContainer></div>
           
     

        <div
          ref={containerRef}
          className="flex  gap-6 px-10 "
        >
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="w-[450px] h-[380px] bg-white/10 backdrop-blur-2xl border border-white/30 rounded-2xl flex-shrink-0 flex flex-col items-center justify-center text-white text-lg font-semibold hover:scale-105 transition-transform duration-300"
            >
              <img
                src={tech.img}
                alt={tech.name}
                className="w-42 h-40 mb-4 object-contain"
              />
              {tech.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
