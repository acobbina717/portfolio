import { Container, Group, ActionIcon } from "@mantine/core";
import { IconBrandLinkedin, IconBrandGithub } from "@tabler/icons";
import { useStyles } from "./footer.styles";

interface FooterProps {
  openInNewTab: (url: string) => void;
}

const Footer = ({ openInNewTab }: FooterProps) => {
  const { classes } = useStyles();
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Group spacing={0} className={classes.links} position="right" noWrap>
          <ActionIcon
            onClick={() =>
              openInNewTab(
                "https://www.linkedin.com/in/abeku-cobbina-2b9bb2188/"
              )
            }
            size="lg"
          >
            <IconBrandLinkedin size={25} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            onClick={() =>
              openInNewTab("https://github.com/acobbina717?tab=repositories")
            }
            size="lg"
          >
            <IconBrandGithub size={25} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
};

export default Footer;
