import styled from "@emotion/styled"
import avatar from "/public/avatar.jpeg"
import { Container, Grid, Typography, Button } from "@mui/material"
import DownloadIcon from "@mui/icons-material/Download"
import AttachEmailIcon from '@mui/icons-material/AttachEmail'

const Hero = () => {

  const StyleHero = styled("div")(() => ({
    backgroundColor: "#0F172A",
    height: "100vh"
  }))

  const StyleImg = styled("img")(() => ({
    width: "100%",
    height:"100%",
    borderRadius: "50%"


  }))

  return (
    <>
      <StyleHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 4 }}>
              <StyleImg src={avatar} />
            </Grid>

            <Grid size={{ xs: 12, md: 8 }}>
              <Typography color="info" variant="h1" textAlign="center">Sara Cipriano</Typography>
              <Typography color="primary" variant="h2" textAlign="center">Computer Engineering Student</Typography>
              <Grid container display="flex" justifyContent="center">
                <Grid size={{xs:12, md:4}} display="flex" justifyContent="center">
                  <Button>
                    <DownloadIcon />
                    Download CV
                  </Button>
                </Grid>
                <Grid size={{xs:12, md:4}} display="flex" justifyContent="center">
                  <Button>
                    <AttachEmailIcon />
                    Contact me
                  </Button>
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
