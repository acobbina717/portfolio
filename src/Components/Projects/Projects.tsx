import { Title, SimpleGrid, Container } from "@mantine/core";
import { MutableRefObject } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";

import { projects } from "../../projectsData/projects";

import { openInNewTab } from "../../hooks/hooks";

import { useStyles } from "./projects.styles";

interface PreojectProps {
  projectRef?: MutableRefObject<HTMLDivElement>;
}

const Projects = ({ projectRef }: PreojectProps) => {
  const { classes } = useStyles();

  return (
    <div ref={projectRef}>
      <Container size="lg" py="xl">
        <Title order={2} className={classes.title} align="center" mt="sm">
          Projects
        </Title>
        <SimpleGrid
          cols={3}
          spacing="xl"
          mt={50}
          breakpoints={[{ maxWidth: "md", cols: 1 }]}
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              openInNewTab={openInNewTab}
              project={project}
            />
          ))}
        </SimpleGrid>
      </Container>
    </div>
  );
};

export default Projects;
