import { Button, GroupedTransition, Text, Title } from "@mantine/core";
import { useEffect, useState } from "react";
import { scrollToAbout } from "../../hooks/hooks";
import { useStyles } from "./hero.style";

interface HeroProps {
  scrollAboutMeIntoView: ({ alignment }?: any) => void;
  scrollProjectsIntoView: () => void;
}

const Hero = ({ scrollAboutMeIntoView, scrollProjectsIntoView }: HeroProps) => {
  const { classes, cx } = useStyles();
  const [isMounted, setIsMounted] = useState(false);

  const { scrollIntoView } = scrollToAbout();

  useEffect(() => {
    if (!isMounted) setIsMounted(true);
  }, []);

  return (
    <GroupedTransition
      mounted={isMounted}
      transitions={{
        title1: { duration: 5000, transition: "pop" },
        title2: { duration: 3500, transition: "slide-right" },
        title3: { duration: 4300, transition: "slide-left" },
        body: { duration: 5050, transition: "slide-up" },
        text1: { duration: 3550, transition: "pop" },
      }}
    >
      {(styles) => (
        <div className={classes.wrapper}>
          <div className={classes.inner}>
            <Title className={classes.title} style={styles.title1}>
              <Text component="span" size={60}>
                Hi
              </Text>
            </Title>

            <Title mt={20} className={classes.title} style={styles.title2}>
              <Text size={55} component="span">
                i'm Abeku Cobbina
              </Text>
            </Title>

            <Title mt={20} className={classes.title} style={styles.title3}>
              <Text component="span" inherit className={classes.highlight}>
                Fullstack Web Developer
              </Text>
            </Title>

            <div className={classes.controls}>
              <Button
                className={classes.control}
                variant="white"
                size="lg"
                onClick={() => scrollAboutMeIntoView({ alignment: "center" })}
              >
                More About Me
              </Button>
              <Button
                className={cx(classes.control, classes.secondaryControl)}
                size="lg"
                onClick={() => scrollProjectsIntoView()}
              >
                View Porjects
              </Button>
            </div>
          </div>
        </div>
      )}
    </GroupedTransition>
  );
};

export default Hero;
