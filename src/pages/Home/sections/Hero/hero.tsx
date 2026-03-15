import styled from "@emotion/styled"
import avatar from "/public/avatar.jpeg"
import { Grid } from "@mui/material"

const Hero =  () => {
  
    const StyleHero = styled("div")(()=> ({
        backgroundColor: "black"
    }))

    const StyleImg = styled("img")(() => ({
        width: "40%",
        borderRadius: "50%"
    }))

  return (
    <>
     <StyleHero>

        <Grid container spacing={2}>
          <Grid size={8}>
            size=8
          </Grid>
          <Grid size={4}>
            size=4
          </Grid>
          <Grid size={4}>
            size=4
          </Grid>
          <Grid size={8}>
            size=8
          </Grid>
        </Grid>

        <StyleImg src={avatar} />
     </StyleHero>

    </>
  )
}

export default Hero
