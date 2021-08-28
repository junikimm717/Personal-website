import Particles from "react-tsparticles";
import "../styles/Particles.scss";

const config = {
  background: {
    color: {
      value: "#ffffff",
    },
  },
  fpsLimit: 60,
  interactivity: {
    detectsOn: "canvas",
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
      },
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#707070",
    },
    links: {
      color: "#707070",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 2,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        value_area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 2,
    },
  },
  detectRetina: true,
  // adds background mode (not in example config)
  backgroundMode: {
    enable: true,
    zIndex: -1,
  },
};

export default function Component(props) {
  return (
    <div className="particles" style={{ zIndex: 1 }}>
      <Particles id="tsparticles" options={config}></Particles>
      <div className="inside">{props.children}</div>
    </div>
  );
}
