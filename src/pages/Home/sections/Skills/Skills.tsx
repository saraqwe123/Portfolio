import styled from "@emotion/styled"
import { Container, Grid, Typography, Box } from "@mui/material"


const Skill = () => {

    const StyleSkill = styled("section")(() => ({
        height: "50vh",
        top: "20%",
        alignItems: "center",
        backgroundColor: "#05a49900",
        display: "flex",
        justifyContent: "center",
        textAlign: "center" as const,
    }))

    const SkillCard = styled(Box)(() => ({
        backgroundColor: "#000000",
        borderRadius: "16px",
        padding: "40px",
        border: "1px solid #00ff08",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center" as const,
    }))


    return (
        <StyleSkill id="Skill">
            <Container maxWidth="lg">

                <Grid container spacing={6} alignItems="center">

                    <Grid size={{ xs: 2, md: 2 }}>
                        <SkillCard>

                            <Typography
                                variant="h5"
                                color="#00ff08"
                                gutterBottom
                            >
                                HTML
                            </Typography>


                        </SkillCard>
                    </Grid>

                    <Grid size={{ xs: 2, md: 2 }}>
                        <SkillCard>


                            <Typography
                                variant="h5"
                                color="#00ff08"
                                gutterBottom
                                textAlign="center"
                            >
                                JavaScript
                            </Typography>

                        </SkillCard>
                    </Grid>

                    <Grid size={{ xs: 2, md: 2 }}>
                        <SkillCard>


                            <Typography
                                variant="h5"
                                color="#00ff08"
                                gutterBottom
                            >
                                CSS
                            </Typography>

                        </SkillCard>
                    </Grid>
                    <Grid size={{ xs: 2, md: 2 }}>
                        <SkillCard>


                            <Typography
                                variant="h5"
                                color="#00ff08"
                                gutterBottom
                            >
                                Python
                            </Typography>

                        </SkillCard>
                    </Grid>
                    <Grid size={{ xs: 2, md: 2 }}>
                        <SkillCard>


                            <Typography
                                variant="h5"
                                color="#00ff08"
                                gutterBottom
                            >
                                Postgress
                            </Typography>

                        </SkillCard>
                    </Grid>
                    <Grid size={{ xs: 2, md: 2 }}>
                        <SkillCard>


                            <Typography
                                variant="h5"
                                color="#00ff08"
                                gutterBottom
                            >
                                MySQL
                            </Typography>

                        </SkillCard>
                    </Grid>

                </Grid>

            </Container>
        </StyleSkill>
    )
}

export default Skill