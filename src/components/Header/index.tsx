import { Container, ContainerLinks, Item, LogoImage } from "./styles";
import Logo from '../../assets/Logo.png'
export function Header() {
    return (
        <Container>
            <LogoImage src={Logo}/>
            <ContainerLinks>
                <Item>Sobre Mim</Item>
                <Item>Habilidades</Item>
                <Item>Experiências</Item>
                <Item>Projetos</Item>
                <Item>Contato</Item>
            </ContainerLinks>
        </Container>
    )
}