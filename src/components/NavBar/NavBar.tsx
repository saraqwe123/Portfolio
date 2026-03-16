import styled from "@emotion/styled"
import { AppBar, MenuItem } from "@mui/material"


const NavBar = () => {

    const StyleToobar = styled("div")(() => ({
        backgroundColor: "#0F172A",
        display: "flex",
        justifyContent: "space-evenly",
        color: "#e3c87e",
        height: "50%"
    }))


    return (
        <>
            <AppBar position="absolute">
                <StyleToobar sx={{ minHeight: 100 }}>
                    <MenuItem>About</MenuItem>
                    <MenuItem>Skills</MenuItem>
                    <MenuItem>Projects</MenuItem>
                </StyleToobar>
            </AppBar>
        </>
    )
}

export default NavBar
