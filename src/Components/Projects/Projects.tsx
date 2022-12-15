import {
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  Image,
  Button,
} from "@mantine/core";
import { IconWorldWww, IconCode } from "@tabler/icons";
import { MutableRefObject } from "react";

import { useStyles } from "./projects.styles";

const mockdata = [
  {
    title: "Shopping App",
    description:
      "E-commerce app where you can sign-/sign-in with email or google, browse through differnt categories of products to add to cart. Update cart quantity and remove any items before checking out with Stripe",

    image: "/assets/images/day30-cafe.png",
    sourceCode: "https://github.com/acobbina717/ShoppingApp",
    liveDemo: "https://lucky-kringle-a2c598.netlify.app/",
  },
  {
    title: "iChat App",
    description:
      "They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves",

    image: "/src/assets/images/day9-toolbox.png",
    sourceCode: "https://github.com/acobbina717/iChat-App",
  },
  {
    title: "Screeen Sharing App",
    description:
      "People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma",

    image: "/src/assets/images/day70-designer-fav-tool-wacom.png",
  },
];

interface PreojectProps {
  projectRef?: MutableRefObject<HTMLDivElement>;
  openInNewTab: (url: string) => void;
}

const Projects = ({ projectRef, openInNewTab }: PreojectProps) => {
  const { classes, cx } = useStyles();

  const features = mockdata.map((feature) => (
    <Card
      key={feature.title}
      shadow="md"
      radius="md"
      className={classes.card}
      p="xl"
    >
      <Text size="lg" weight={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      {feature.image ? <Image src={feature.image} height={200} /> : null}

      <Text size="sm" color="dimmed" mt="sm">
        {feature.description}
      </Text>
      <div className={classes.controls}>
        {feature.liveDemo ? (
          <Button
            className={classes.control}
            leftIcon={<IconWorldWww />}
            variant="white"
            size="md"
            onClick={() => openInNewTab(feature.liveDemo)}
          >
            Demo
          </Button>
        ) : null}
        {feature.sourceCode ? (
          <Button
            className={cx(classes.control, classes.secondaryControl)}
            size="xs"
            leftIcon={<IconCode />}
            onClick={() => openInNewTab(feature.sourceCode)}
          >
            Code
          </Button>
        ) : null}
      </div>
    </Card>
  ));

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
          {features}
        </SimpleGrid>
      </Container>
    </div>
  );
};

export default Projects;
