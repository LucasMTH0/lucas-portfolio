import { Container } from "@mui/material";
import { Link, Title } from "../../components/styles";
import { ContainerContact } from "./styles";
import { BsEnvelope, BsGithub, BsLinkedin } from "react-icons/bs";

export function Contact() {
       return (
              
              <Container id="contact">
                     <Title >Contato</Title>
                     <ContainerContact>
                            <Link href="https://www.linkedin.com/in/lucas-silva-783482202/" target="_blank">
                                   <BsLinkedin/>
                            </Link>
                            <Link href="https://github.com/LucasMTH0" target="_blank">
                                   <BsGithub />
                            </Link>
                            <Link href="mailto:lucas0matheus0@gmail.com" target="_blank">
                                   <BsEnvelope/>
                            </Link>
                     </ContainerContact>
              </Container>
              
       )
}