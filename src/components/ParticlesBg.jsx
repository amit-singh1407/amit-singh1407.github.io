import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from "../context/ThemeContext";

const ParticlesBg = () => {
  const [init, setInit] = useState(false);
  const { isDark } = useTheme();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  if (!init) return null;

  const color = isDark ? "#3b82f6" : "#6366f1";
  const opacity = isDark ? 0.6 : 0.35;

  return (
    <Particles
      key={isDark ? "dark" : "light"}   // remount on theme change
      id="tsparticles"
      options={{
        background: { color: { value: "transparent" } },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
          },
          modes: { grab: { distance: 140, links: { opacity: 0.5 } } },
        },
        particles: {
          color: { value: color },
          links: {
            color: color,
            distance: 150,
            enable: true,
            opacity: 0.4,
            width: 1,
          },
          move: { enable: true, speed: 1, direction: "none", outModes: "bounce" },
          number: { value: 100 },
          opacity: { value: opacity },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 3 } },
        },
      }}
      className="absolute inset-0 z-10 pointer-events-none"
    />
  );
};

export default ParticlesBg;