import { BsGithub } from "react-icons/bs";
import { Project } from "../../../../@types/project";
import {
  ButtonLink,
  ContainerButtons,
  Description,
  ImageProject,
  Link,
  Title,
} from "./styles";

type Props = {
  project: Project;
};
export function CardProject({ project }: Props) {
  return (
    <div>
      <Title>{project.title}</Title>
      <ImageProject src={project.image} />
      <Description>{project.description}</Description>
      <ContainerButtons>
        <Link href={project.url} target="_blank">
          Visitar site
        </Link>
        <Link href={project.githubUrl} target="_blank">
          <BsGithub /> Ver código
        </Link>
      </ContainerButtons>
    </div>
  );
}
