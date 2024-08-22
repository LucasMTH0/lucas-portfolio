import { SiTailwindcss, SiTypescript } from "react-icons/si";
import { Bold, Container, ContainerExperiences, Text, Title } from "./styles";
import { DiAngularSimple, DiSass } from "react-icons/di";
import { IoLogoIonic } from "react-icons/io";
import { Angular, Ionic, Sass, Tailwind, Typescript } from "../../../../components/styles";
type ExperienceProps = {
    title: string;
    enterprise: string;
    position: string;
    period: string;
    description: string;
}
export function CardExperience({ title, enterprise, position, period, description}: ExperienceProps){
    return (
        <Container>
            <Title>{title}</Title>
            <Text>Empresa: <Bold>{enterprise}</Bold></Text>
            <Text>Cargo: {position}</Text>
            <Text>Período: {period}</Text>
            <Text>Descrição: {description}</Text>
            <ContainerExperiences>
                <Angular />
                <Typescript />
                <Ionic />
                <Tailwind />
                <Sass />
            </ContainerExperiences>
        </Container>
    )
}