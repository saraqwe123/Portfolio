import styled from "@emotion/styled"
import { Container, Grid, Typography, Box } from "@mui/material"
import { DotsBackground } from "../../../../components/DotsBackground"

const About = () => {

    const StyleAbout = styled("section")(() => ({
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "80px 0"
    }))

    const AboutCard = styled(Box)(() => ({
        backgroundColor: "#040406a9",
        borderRadius: "16px",
        padding: "40px",
        border: "1px solid #468dff"
    }))

    const Orange = styled("span")(() => ({
        color: "#f97316",
        fontWeight: 600
    }))

    return (
        <StyleAbout id="about">
            <Container maxWidth="lg">

                <Grid container spacing={6} alignItems="center">

                    <Grid size={{ xs: 12, md: 7 }}>

                        <Box position="absolute">
                            <Box position="absolute" width={"160%"} top={0} right={0}>
                                <DotsBackground />
                            </Box>
                        </Box>

                        <AboutCard>

                            <Typography
                                variant="h3"
                                color="#22d3ee"
                                gutterBottom
                            >
                                Sobre mim
                            </Typography>

                            <Typography color="#f0e8d4" lineHeight={1.8}>
                                Eu sou a <Orange>Sara! Estudante de Engenharia de Computação </Orange>
                                Adoro inovação, tecnologia e transformar ideias em projetos funcionais e bem estruturados.
                                Estou sempre aprendendo, testando e buscando oportunidades que me desafiem!
                            </Typography>

                            <Typography color="#f0e8d4" mt={2} lineHeight={1.8}>
                                Atualmente, meu foco é aprender sobre programação IoT, automação e sistemas conectados, explorando novas formas de integrar hardware e software.

                            </Typography>

                        </AboutCard>
                    </Grid>

                    <Grid size={{ xs: 12, md: 5 }}>
                        <AboutCard>

                            <Typography
                                variant="h5"
                                color="#22d3ee"
                                gutterBottom
                            >
                                Formação
                            </Typography>
                            <Box color="#f0e8d4" lineHeight={2}>
                                <Typography>🏫 Ensino Médio: <Orange>UTFPR-CM</Orange></Typography>
                                <Typography>💻 Curso Técnico de TI: <Orange>UTFPR-CM</Orange></Typography>
                                <Typography>💼 Estágio: <Orange>Fundação Educere</Orange></Typography>
                                <Typography>🎓 Atualmente: <Orange>Engenharia de Computação – UEM</Orange></Typography>
                            </Box>

                        </AboutCard>
                    </Grid>

                </Grid>

            </Container>
        </StyleAbout>
    )
}

export default About