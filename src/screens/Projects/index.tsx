import { Title } from "../../components/styles";
import { ContainerProjects } from "./styles";
import { Project } from "../../@types/project";
import { CardProject } from "./components/Card-Project";
import { Container, Grid } from "@mui/material";
export function Projects() {
  const projects: Project[] = [
    {
      title: "FlixCatalog",
      description:
        "Projeto desenvolvido em React com o objetivo de listar filmes e séries exibindo informações.",
      image:
        "https://i.pinimg.com/736x/fd/0c/91/fd0c91926d3e47dd21a9ff1514bb8b81.jpg",
      githubUrl: "https://github.com/LucasMTH0/FlixCatalog",
      url: "https://flix-catalog.vercel.app",
    },
    {
      title: "Coffee-Shop",
      description:
        "Projeto desenvolvido em Angular com simulando um e-commerce de loja de café.",
      image:
        "https://i.pinimg.com/736x/7a/a7/a7/7aa7a7804a6f63c943ca53bf55b70747.jpg",
      githubUrl: "https://github.com/LucasMTH0/coffee-shop",
      url: "https://coffee-shop-azure-two.vercel.app"
    },
  ];
  return (
    <ContainerProjects id="projects">
      <Container>
        <Title>Projetos</Title>
        <Grid container spacing={2}>
          {projects.map((project: Project) => {
            return (
              <Grid item xs={12} sm={12} md={6}>
                <CardProject project={project} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </ContainerProjects>
  );
}
