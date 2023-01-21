import { Text, Title, Button, Image, ScrollArea } from "@mantine/core";
import { MutableRefObject } from "react";

import { useStyles } from "./about.styles";

import { openInNewTab } from "../../hooks/hooks";

import Resume from "../../assets/Resume.pdf";

interface AboutMeProps {
  aboutMeRef?: MutableRefObject<HTMLDivElement>;
}

const About = ({ aboutMeRef }: AboutMeProps) => {
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
          src={"https://i.ibb.co/Kq08sDK/C-C-SKY07623.jpg"}
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
              technologies like HTML, CSS, JavaScript on my own, I attended and
              graduated from Flatiron School. Ever since graduation I've
              continued to learn new technologies and strengthen my development
              skills.
            </Text>
          </ScrollArea>
        </div>
      </div>

      <div className={classes.controls}>
        <Button
          onClick={() => openInNewTab(Resume)}
          size={"md"}
          className={classes.control}
        >
          View Resume
        </Button>
      </div>
    </div>
  );
};

export default About;
