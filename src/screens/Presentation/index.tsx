import { BsGithub, BsLinkedin } from "react-icons/bs";
import {  ContainerLinks, ContainerPresentation, DownloadButton, GoldBold, Image, Link, SubTitle, Title} from "./styles";
import User from '../../assets/my-person.jpg'
import { Button, Container, Grid } from "@mui/material";
export function Presentation(){
    return (
        <ContainerPresentation>
            <Container>
                <Grid container spacing={2} >
                    <Grid item xs={12} md={4} display="flex" justifyContent="center">
                        <Image src={User}/>
                    </Grid>

                    <Grid item xs={12} md={8}>
                        <Title><GoldBold>Lucas Matheus</GoldBold></Title>
                        <SubTitle>Desenvolvedor Front-End</SubTitle>
                        <h3>Apaixonado por desenvolver experiências digitais incríveis como Desenvolvedor Front-End Mobile e Web.</h3>
                        <ContainerLinks>
                            <Link href="https://www.linkedin.com/in/lucas-silva-783482202/" target="_blank">
                                <BsLinkedin/>
                            </Link>
                            <Link href="https://github.com/LucasMTH0" target="_blank">
                                <BsGithub />
                            </Link>
                            <Link>
                                <DownloadButton variant="contained">Download CV</DownloadButton>
                            </Link>
                        </ContainerLinks>
                    </Grid>
                </Grid>
            </Container>
        </ContainerPresentation>

    )
}