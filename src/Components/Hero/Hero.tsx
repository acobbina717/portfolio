import {
  Button,
  Container,
  GroupedTransition,
  Text,
  Title,
} from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import { useStyles } from "./hero.style";

const Hero = () => {
  const { classes, cx } = useStyles();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (!isMounted) setIsMounted(true);
  }, []);

  return (
    <GroupedTransition
      mounted={isMounted}
      transitions={{
        title1: { duration: 2950, transition: "skew-up" },
        title2: { duration: 3500, transition: "pop-top-left" },
        title3: { duration: 4300, transition: "pop-bottom-right" },
        body: { duration: 5050, transition: "slide-up" },
        text1: { duration: 3550, transition: "pop" },
      }}
    >
      {(styles) => (
        <div className={classes.wrapper}>
          <div className={classes.inner}>
            <Title className={classes.title} style={styles.title1}>
              <Text component="span">Hi</Text>
            </Title>

            <Title mt={-20} className={classes.title} style={styles.title2}>
              <Text component="span">i'm Abeku Cobbina</Text>
            </Title>

            <Title mt={-20} className={classes.title} style={styles.title3}>
              <Text component="span" inherit className={classes.highlight}>
                Fullstack Web Developer
              </Text>
            </Title>

            <div className={classes.controls}>
              <Button className={classes.control} variant="white" size="lg">
                More About Me
              </Button>
              <Button
                className={cx(classes.control, classes.secondaryControl)}
                size="lg"
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
