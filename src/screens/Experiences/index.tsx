import { Container, Grid } from "@mui/material";
import { Title } from "../../components/styles";
import { CardExperience } from "./components/CardExperience";
import { ContainerExperiences } from "./styles";

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
            description: "Sustentação de aplicativo legado onde foi feito a manutenção e adição de novas funcionalidades desenvolvendo em Cordova, HTML5, CSS3 e Javascript e também pude auxiliar na construção do novo app feito em React Native."
        },
        {
            title: "Desenvolvedor Front-End",
            enterprise: "Techdog",
            position: "Desenvolvedor Front-End Jr.",
            period: "05/2021 - 04/2022",
            description: "Sustentação e desenvolvimento de aplicações móveis e web utilizando HTML5, CSS3, SCSS, Javascript e Typescript e as tecnologias do Angular, Ionic, Cordova, Capacitor e React Native."
        },
        {
            title: "Desenvolvedor Front-End",
            enterprise: "Loja Interativa",
            position: "Desenvolvedor Front-End Jr.",
            period: "05/2021 - 04/2022",
            description: "Experiência onde desenvolvi meus primeiros apps em Ionic com Angular, HTML5, CSS3 e Typescript, apesar dos desafios consegui desenvolver do zero meus primeiros apps. Durante o período também participei de construções de temas de landing pages em WordPress e de sustentação de projetos Angular."
        },

    ]
    return (
        <ContainerExperiences id="experiences">
            <Container>
                <Title>Experiências</Title>
                <Grid container spacing={2} >
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
        </ContainerExperiences>
    )
}