import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Card } from "./styles";
import { Grid } from "@mui/material";
import { Title } from "../../components/styles";

export function Skills() {
    const skills = [
        'Angular', 'CSS', 'HTML', 'Ionic', 'Javascript', 'Java', 'React', 'React Native', 'SCSS', 'Typescript', 'Tailwind'
    ]
    return (
            <Grid container spacing={2} display="flex" justifyContent="center">
                <Title>Habilidades</Title>
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
    )
}