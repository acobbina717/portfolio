import { Text, Title, TextInput, Button, Image } from "@mantine/core";
import { useStyles } from "./about.styles";

export function About() {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <Image
        radius="lg"
        pl="65px"
        ml={"65px"}
        height={260}
        src={"https://i.ibb.co/Kq08sDK/C-C-SKY07623.jpg"}
        className={classes.image}
      />
      <div className={classes.body}>
        <Title className={classes.title}>About Me...</Title>
        <Text weight={500} size="lg" mb={5}>
          Subscribe to our newsletter!
        </Text>
        <Text size="sm" color="dimmed">
          You will never miss important product updates, latest news and
          community QA sessions. Our newsletter is once a week, every Sunday.
        </Text>

        <div className={classes.controls}>
          <Button className={classes.control}>View Resume</Button>
        </div>
      </div>
    </div>
  );
}
