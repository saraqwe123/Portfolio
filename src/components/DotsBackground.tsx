import { useEffect } from "react"
import { Box } from "@mui/material"

declare global {
  interface Window {
    particlesJS: (id: string, config: object) => void
  }
}

export const DotsBackground: React.FC = () => {
  useEffect(() => {
    // Carrega o script do particles.js apenas no cliente
    const script = document.createElement("script")
    script.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"
    script.async = true
    script.onload = () => {
      if (window.particlesJS) {
        window.particlesJS("particles-js", {
          particles: {
            number: { value: 80 },
            color: { value: "#00ffff" },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: 3 },
            line_linked: { enable: true, color: "#00ffff" },
            move: { enable: true, speed: 3 }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: true, mode: "grab" }
            }
          }
        })
      }
    }

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <Box
      id="particles-js"
      sx={{
        position: "fixed",
        width: "100%",
        height: "100%",
        background: "#0d0d0d",
        top: 0,
        left: 0,
        zIndex: -1
      }}
    />
  )
}