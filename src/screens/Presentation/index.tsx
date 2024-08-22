import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Container, ContainerLinks, ContentPresentation, GoldBold, Image, Link,  Wrapper } from "./styles";
import User from '../../assets/my-person.jpg'
export function Presentation(){
    return (
        <Container>
            <ContentPresentation>
                <h1>Olá !</h1>
                <h2>Sou <GoldBold>Lucas Matheus</GoldBold></h2>
                <h3>apaixonado por desenvolver experiências digitais incríveis como Desenvolvedor Front-End Mobile e Web.</h3>
                <ContainerLinks>
                    <Link href="https://www.linkedin.com/in/lucas-silva-783482202/" target="_blank">
                        <BsLinkedin/>
                    </Link>
                    <Link href="https://github.com/LucasMTH0" target="_blank">
                        <BsGithub />
                    </Link>
                </ContainerLinks>
            </ContentPresentation>
            <Wrapper>
                <Image src={User}/>
            </Wrapper>
        </Container>
    )
}