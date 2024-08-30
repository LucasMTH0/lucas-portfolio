import { Grid } from "@mui/material";
import { Title } from "../../components/styles";
import { CardExperience } from "./components/CardExperience";
import { Container } from "./styles";

export function Experiences() {
    const experiences = [
        {
            title: "Desenvolvedor Mobile",
            enterprise: "Ezoom",
            position: "Desenvolvedor Front-End Jr.",
            period: "10/2023 - 06/2024",
            description: "Desenvolvimento e sustentação de aplicações mobile em Ionic utilizando HTML, CSS, Typescript, Tailwind e as tecnologias como Capacitor e Cordova."
        },
        {
            title: "Desenvolvedor Mobile",
            enterprise: "Digital Business",
            position: "Desenvolvedor Front-End Jr.",
            period: "04/2022 - 03/2023",
            description: "Sustentação do aplicativo auxiliadora predial onde foi feito a manutenção e adição de novas funcionalidades desenvolvendo em cordova e também pude auxiliar na construção do novo app feito em react native."
        },
        {
            title: "Desenvolvedor Front-End",
            enterprise: "Techdog",
            position: "Desenvolvedor Front-End Jr.",
            period: "05/2021 - 04/2022",
            description: "Sustentação e desenvolvimento de aplicações móveis e web utilizando HTML, CSS, Javascript e Typescript e as tecnologias do Angular, Ionic, Cordova e React Native."
        },
        {
            title: "Desenvolvedor Front-End",
            enterprise: "Loja Interativa",
            position: "Desenvolvedor Front-End Jr.",
            period: "05/2021 - 04/2022",
            description: "Sustentação e desenvolvimento de aplicações móveis e web utilizando HTML, CSS, Javascript e Typescript e as tecnologias do Angular, Ionic, Cordova e React Native."
        },

    ]
    return (
        <Container>
            <Grid container spacing={2} >
            <Title>Experiências</Title>
                {
                    experiences.map((experience) => {
                        return (
                            <Grid item xs={12} sm={12} md={6}>
                                <CardExperience title={experience.title} enterprise={experience.enterprise} position={experience.position} period={experience.period} description={experience.description} />
                            </Grid>
                        )
                    })
                }
            </Grid>
  
        </Container>
    )
}