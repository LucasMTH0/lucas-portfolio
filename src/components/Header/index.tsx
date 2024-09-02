import { Container, ContainerLinks, Item, LogoImage } from "./styles";
import Logo from '../../assets/Logo.png'
export function Header() {
    return (
        <Container>
            <LogoImage src={Logo}/>
            <ContainerLinks>
                <Item href="#about">Sobre Mim</Item>
                <Item href="#skills">Habilidades</Item>
                <Item href="#experiences">Experiências</Item>
                <Item href="#projects">Projetos</Item>
                <Item href="#about">Contato</Item>
            </ContainerLinks>
        </Container>
    )
}