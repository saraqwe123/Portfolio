import styled from "@emotion/styled"
import avatar from "/public/avatar.jpeg"
import { Container, Grid, Typography, Box } from "@mui/material"
import DownloadIcon from "@mui/icons-material/Download"
import AttachEmailIcon from '@mui/icons-material/AttachEmail'
import StyledButton from "../../../../components/StyledButton/StyledButton"
import { AnimatedBackground } from "../../../../components/AnimatedBackground"
import NavBar from "../../../../components/NavBar/NavBar"

const Hero = () => {

  const StyleHero = styled("div")(() => ({
    backgroundColor: "#0F172A",
    height: "100vh",
    display: "flex",
    alignItems: "center",
  }))

  const StyleImg = styled("img")(() => ({
    width: "85%",
  
    borderRadius: "10%",
    border: '1px solid #e3c87e'


  }))

  return (
    <>
      <StyleHero>
        <Container maxWidth="lg">
          <NavBar/>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Box position="relative">
                <Box position="absolute" width={"160%"} top={-100} right={0}>
                  <AnimatedBackground />
                </Box>

                <Box position="relative" textAlign="center">
                  <StyleImg src={avatar} />

                </Box>

              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 7 }}>
              <Typography color="info" variant="h1" textAlign="center">Sara Cipriano</Typography>
              <Typography color="#e3c87e" variant="h2" textAlign="center">Computer Engineering Student</Typography>
              <Grid container display="flex" justifyContent="center" spacing={3}>
                <Grid size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">

                  <StyledButton>
                    <DownloadIcon />
                    <Typography>Download CV</Typography>
                  </StyledButton>

                </Grid>
                <Grid size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
                  <StyledButton>
                    <AttachEmailIcon />
                    <Typography>Contact me</Typography>
                  </StyledButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyleHero>

    </>
  )
}

export default Hero
