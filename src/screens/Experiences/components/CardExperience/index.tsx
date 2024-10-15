import { Bold, Container, Text, Title } from "./styles";
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
            <div>
                <Text>Empresa: <Bold>{enterprise}</Bold></Text>
                <Text>Cargo: {position}</Text>
                <Text>Período: {period}</Text>
                <Text>Descrição: {description}</Text>
            </div>

        </Container>
    )
}