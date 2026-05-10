import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBg = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={{
        background: { color: { value: "transparent" } },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" }, // Connects lines to mouse
          },
          modes: { grab: { distance: 140, links: { opacity: 0.5 } } },
        },
        particles: {
          color: { value: "#3b82f6" }, // Blue accents
          links: {
            color: "#3b82f6",
            distance: 150,
            enable: true,
            opacity: 0.4,
            width: 1,
          },
          move: { enable: true, speed: 1, direction: "none", outModes: "bounce" },
          number: { value: 100 },
          opacity: { value: 0.6 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 3 } },
        },
      }}
      className="absolute inset-0 z-10 pointer-events-none"
    />
  );
};

export default ParticlesBg;