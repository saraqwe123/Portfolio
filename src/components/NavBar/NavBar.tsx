import styled from "@emotion/styled"
import { AppBar, MenuItem } from "@mui/material"
import { useEffect, useState } from "react"

const NavBar = () => {

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) { 
          setScrolled(true)
        } else {
          setScrolled(false)
        }
      }
  
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }, [])
    const StyleToobar = styled("div")(() => ({
        backgroundColor: scrolled ? "#0cbec77c" : "#56996cd5",
        display: "flex",
        justifyContent: "space-evenly",
        color: "white",
        height: "50%"
    }))

    const [scrolled, setScrolled] = useState(false)

 


    return (
        <>
            <AppBar position="fixed">
                <StyleToobar>
                    <MenuItem>About</MenuItem>
                    <MenuItem>Skills</MenuItem>
                    <MenuItem>Projects</MenuItem>
                </StyleToobar>
            </AppBar>
        </>
    )
}

export default NavBar
