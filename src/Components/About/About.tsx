import { Text, Title, Button, Image, ScrollArea } from "@mantine/core";
import { MutableRefObject } from "react";

import { useStyles } from "./about.styles";

import { Link } from "react-router-dom";

interface AboutMeProps {
  aboutMeRef?: MutableRefObject<HTMLDivElement>;
  openInNewTab: (url: string) => void;
}

const About = ({ aboutMeRef, openInNewTab }: AboutMeProps) => {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper} ref={aboutMeRef}>
      <Title className={classes.title}>About Me</Title>

      <div className={classes.content}>
        <Image
          radius="lg"
          ml="-1.5%"
          pl="50px"
          height={290}
          src={"/src/assets/images/SKY07623.JPG"}
          className={classes.image}
        />

        <div className={classes.body}>
          <ScrollArea
            style={{ height: 255 }}
            type="hover"
            scrollbarSize={2}
            scrollHideDelay={73}
          >
            <Text size="lg" color="dimmed">
              I have a background in the Music Industry as an Audio Engineer.
              Helping artist turn song ideas into radio ready records. In 2019
              had an idea to build a website to extend my audio engineering
              services and that idea lead me down the rabbit-hole of Web
              Development. YouTube and Udemy started to consume most of my days.
              Theres so many technologies to cover. After learning a few
              technologies like HTML, CSS, Javascriprt on my own, I attened and
              graduated from Flatiron School. Ever since graduation I've
              continued to learn new technologies and stregthen my development
              skills.
            </Text>
          </ScrollArea>
        </div>
      </div>

      <div className={classes.controls}>
        <Link
          to="/src/assets/Software Fullstack Engineer Developer Resume.docx.pdf"
          target="_blank"
        >
          <Button size={"md"} className={classes.control}>
            View Resume
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default About;
