import { Container, Grid } from "@mui/material";
import { Title } from "../../components/styles";
import { ContainerAbout, Content, Text } from "./styles";


export function About() {
    return (
        <ContainerAbout>
            <Container>
                <Grid container spacing={2} >
                    <Grid item xs={12} md={10} display="flex" justifyContent="center">
                        <Content>
                            <Title>Sobre Mim</Title>
                            <Text>
                                Sou um desenvolvedor que está sempre em busca de conhecimentos e aprimorar minhas habilidades, estou disposto a encarar qualquer desafio e ter bons resultados. Tenho 26 anos de idade e possuo aproximadamente 3 anos de experiência em desenvolvimento Front-End, minhas maiores habilidades são em HTML, CSS, Javascript, Typescript, Angular e Ionic, também possuo conhecimentos em React e React Native mas ainda não tive experiência em trabalho, apenas em estudos e projetos pessoais.
                            </Text>
                        </Content>
                    </Grid>
                </Grid>
            </Container>
        </ContainerAbout>
    )
}