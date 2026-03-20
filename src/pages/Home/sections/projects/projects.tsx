import styled from "@emotion/styled"
import { Box, Typography } from "@mui/material"

const Projects = () => {


    const StyleProject = styled("section")(() => ({
        height: "80vh",
        display: "flex",
        alignItems: "center",
        padding: "80px 0",
        position: "relative" as const,
        backgroundColor: "#050200df"
    }))

    const ProjectCard = styled(Box)(() => ({
       height: "100vh",
       width: "100vw",
    position: "sticky" as const,
    top: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px",
    backgroundColor: "#000000d1"
    }))

    const Card = styled("a")(() => ({
        width: "80%",
        height: "70%",
        backgroundColor: "#4d73a9",
        borderRadius: "16px",
        padding: "40px",
        border: "1px solid #0062ff",
        display: "flex",
        gap: "20px",
        textDecoration: "none",
    }))

    const Image = styled ("img")({
        width: "50%",
        objectFit: "cover",
        borderRadius: "12px",
    })

    const Info = styled(Box)({
        width: "50%",
        color: "white",
    })

    return (
        <StyleProject id="projects">

            <ProjectCard>
                <Card
                    
                    href="https://instagram.com/fundacaoeducere/"
                    target="_blank"
                >
                    <Image src="/educere.jpeg" />

                    <Info>
                        <Typography variant="h4">Fundação Educere</Typography>
                        <Typography>
                            Estagiei exercendo a função de monitora de algoritmos e informática durante o ano de 2024.
                        </Typography>
                    </Info>
                </Card>
            </ProjectCard>

            <ProjectCard>
                <Card
                    
                    href="https://github.com/SaraGuaiume/TrabalhoFInal.git"
                    target="_blank"
                >
                    <Image src="/mono.jpeg" />

                    <Info>
                        <Typography variant="h4">MonoCoin</Typography>
                        <Typography>
                            Banco Digital fictício desenvolvido durante o último ano do curso técnico em informática para a internet da UTFPR-CM.
                        </Typography>
                    </Info>
                </Card>
            </ProjectCard>

        </StyleProject>
    )
}

export default Projects