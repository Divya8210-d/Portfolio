import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadLinksPreset } from "tsparticles-preset-links";

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadLinksPreset(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // Optional: handle container after particles load
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        preset: "links",
        background: {
          color: {
            value: "#1C1C1E", // even lighter yellow (ivory)
          },
        },
        fpsLimit: 120,
        detectRetina: true,
        interactivity: {
          events: {
            onClick: { enable: true, mode: "push" },
            onHover: { enable: true, mode: ["repulse", "bubble"] },
            resize: true,
          },
          modes: {
            push: { quantity: 4 },
            repulse: { distance: 200, duration: 0.4 },
            bubble: { distance: 400, size: 10, duration: 2, opacity: 1, speed: 3 },
          },
        },
        particles: {
          color: { value: "#FFFFFF" },
          links: {
            color: "#FFFFFF",
            opacity: 0.5,        // softer links
            width: 1,           // thinner lines
            distance: 250,      // increase distance = no merging
            enable: true,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            outModes: { default: "bounce" },
          },
          number: {
            value: 50,          // fewer particles = cleaner, less merging
            density: {
              enable: true,
              area: 1200,       // spread out particles over a larger area
            },
          },
          size: { value: { min: 2, max: 4 } },
          opacity: { value: 0.8 },
        },
      }}
      className="absolute inset-0 z-0"
    />
  );
};

export default ParticleBackground;
