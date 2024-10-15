import { BsGithub, BsLinkedin } from "react-icons/bs";
import {  ContainerLinks, ContainerPresentation, Description, DownloadButton, GoldBold, Image, Link, SubTitle, Title} from "./styles";
import User from '../../assets/my-person.jpg'
import { Grid } from "@mui/material";
import { FaFileDownload } from "react-icons/fa";
export function Presentation(){
    const idCV: string = "1cXyNIYiOMvsaqL8wKnkplB9dLRCXUfgM"

    function handleDownloadCV(){
        console.log("download")
        window.open(`https://drive.google.com/uc?export=download&id=${idCV}`, "_blank")
    }

    return (
        <ContainerPresentation>
                <Grid container spacing={4} >
                    <Grid item xs={12} md={6} display="flex" justifyContent="center">
                        <Image src={User}/>
                    </Grid>

                    <Grid item xs={12} md={4} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                        <Title><GoldBold>Lucas Matheus</GoldBold></Title>
                        <SubTitle>Desenvolvedor Front-End</SubTitle>
                        <Description>Apaixonado por desenvolver experiências digitais incríveis como Desenvolvedor Front-End Mobile e Web.</Description>
                        <ContainerLinks>
                            <Link href="https://www.linkedin.com/in/lucas-silva-783482202/" target="_blank">
                                <BsLinkedin/>
                            </Link>
                            <Link href="https://github.com/LucasMTH0" target="_blank">
                                <BsGithub />
                            </Link>
                            <DownloadButton variant="contained" onClick={handleDownloadCV}>
                                <FaFileDownload />
                                Download CV
                            </DownloadButton>
                        </ContainerLinks>
                    </Grid>
                </Grid>

        </ContainerPresentation>

    )
}