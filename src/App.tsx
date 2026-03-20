import { GlobalStyles } from "@mui/material"
import About from "./pages/Home/sections/About/about"
import Hero from "./pages/Home/sections/Hero/hero"
import Projects from "./pages/Home/sections/projects/projects"
import Skill from "./pages/Home/sections/Skills/Skills"


const App = () => {


  return (
    <>
      <GlobalStyles
        styles={{
          html: {
            scrollBehavior: "smooth",
          },
        }}
      />
      <Hero />
      <About />
      <Projects />
      <Skill/>

    </>
  )
}

export default App
