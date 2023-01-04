import { Card, Text, Button, Image, Overlay } from "@mantine/core";
import { useHover } from "@mantine/hooks";

import { IconWorldWww, IconCode } from "@tabler/icons";
import { Fragment, useEffect, useState } from "react";

import { useStyles } from "./project-card.styles";

export interface Project {
  title: string;
  description: string;
  image: string;
  sourceCode?: string;
  liveDemo?: string;
}

interface PreojectCardProps {
  openInNewTab: (url: string) => void;
  project: Project;
}

const ProjectCard = ({ openInNewTab, project }: PreojectCardProps) => {
  const { classes, cx } = useStyles();
  // const { hovered, ref } = useHover();

  // const [visible, setVisible] = useState(hovered);

  // useEffect(() => {
  //   setVisible(hovered);
  // }, [hovered]);

  // console.log(visible);

  return (
    <Card
      key={project.title}
      shadow="md"
      radius="md"
      className={classes.card}
      p="xl"
    >
      <Text size="lg" weight={500} className={classes.cardTitle} mt="md">
        {project.title}
      </Text>
      {project.image ? (
        <Fragment>
          <Image src={project.image} height={200} />
        </Fragment>
      ) : null}

      <Text size="sm" color="dimmed" mt="sm">
        {project.description}
      </Text>
      <div className={classes.controls}>
        {project.liveDemo ? (
          <Button
            className={classes.control}
            leftIcon={<IconWorldWww />}
            variant="white"
            size="md"
            onClick={() => openInNewTab(project.liveDemo as string)}
          >
            Demo
          </Button>
        ) : null}
        {project.sourceCode ? (
          <Button
            className={cx(classes.control, classes.secondaryControl)}
            size="xs"
            leftIcon={<IconCode />}
            onClick={() => openInNewTab(project.sourceCode as string)}
          >
            Code
          </Button>
        ) : null}
      </div>
    </Card>
  );
};

export default ProjectCard;
