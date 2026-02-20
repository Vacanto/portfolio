import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"

const StarBackground = () => {
  const particlesInit = async (engine) => {
    await loadSlim(engine)
  }

  return (
    <Particles
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "#000000",
          },
        },
        particles: {
          number: {
            value: 150,
          },
          color: {
            value: "#ffffff",
          },
          size: {
            value: { min: 1, max: 2 },
          },
          move: {
            enable: true,
            speed: 0.3,
          },
        },
      }}
       style={{
       position: "fixed",
       top: 0,
       left: 0,
       width: "100%",
       height: "100%",
       zIndex: 0,
        }}
    />
  )
}

export default StarBackground