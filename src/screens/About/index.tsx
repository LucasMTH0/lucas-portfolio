import { Container, Grid } from "@mui/material";
import { Title } from "../../components/styles";
import { ContainerAbout, Content, Text } from "./styles";


export function About() {
    return (
        <ContainerAbout id="about">
            <Container>
                <Grid container spacing={2} >
                    <Grid item  display="flex" justifyContent="center">
                        <Content>
                            <Title >Sobre Mim</Title>
                            <Text>
                                Desenvolvedor Front-End com 3 anos de experiência com expertise em Angular, Typescript e Ionic, também possuo conhecimentos em React e React Native mas ainda não possuo experiência. Estou sempre em busca de novos conhecimentos e aprimorar minhas habilidades.
                            </Text>
                            <Text>
                                Meu Objetivo é me especializar no Front-End e aprender a desenvolver também em Back-End, atualmente estou estudando sobre Node e Java.

                            </Text>
                            <Text>
                                Estou na reta final da conclusão do curso de Sistemas da Informação na Universidade Veiga de Almeida e a expectativa de finalizar é em dezembro de 2024.
                            </Text>
                        </Content>
                    </Grid>
                </Grid>
            </Container>
        </ContainerAbout>
    )
}