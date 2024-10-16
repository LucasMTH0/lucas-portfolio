import { Card, ContainerSkills } from "./styles";
import { Container, Grid } from "@mui/material";
import { Title } from "../../components/styles";

export function Skills() {
    const skills = [
        'Angular', 'CSS3', 'HTML5', 'Ionic', 'Javascript', 'Java', 'Jest', 'React', 'React Native', 'SCSS', 'Typescript', 'Tailwind'
    ]
    return (
        <ContainerSkills id="skills">
            <Grid container spacing={2} display="flex" flexDirection="column" justifyContent="center">
                <Container>
                    <Title >Habilidades</Title>
                    <Grid container spacing={2} display="flex" justifyContent="space-between">
                            {
                                skills.map((skill) => {
                                    return (
                                        <Grid item>
                                            <Card>
                                                { skill }
                                            </Card>

                                        </Grid>
                                    );
                                })
                            }
                    </Grid>
                </Container>
            </Grid>
        </ContainerSkills>

    )
}