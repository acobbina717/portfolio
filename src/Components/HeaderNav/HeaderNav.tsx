import { ActionIcon, Burger, Container, Group, Header } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import DarkMode from "../DarkMode/DarkMode";
import { useStyles } from "./header-nav.styles";

import { IconBrandLinkedin, IconBrandGithub } from "@tabler/icons";

interface HeaderNavProps {
  links: { link: string; label: string }[];
}

const HeaderNav = ({ links }: HeaderNavProps) => {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();

  return (
    <Header height={56}>
      <Container className={classes.inner}>
        <Burger
          opened={opened}
          onClick={toggle}
          size="sm"
          className={classes.burger}
        />

        <Group className={classes.links} spacing={10}>
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.link}
              className={cx(classes.link, {
                [classes.linkActive]: active === link.link,
              })}
              onClick={(e) => {
                e.preventDefault();
                setActive(link.link);
              }}
            >
              {link.label}
            </a>
          ))}
        </Group>

        <DarkMode size={28} />

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <ActionIcon size="lg">
            <IconBrandLinkedin size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandGithub size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </Header>
  );
};

export default HeaderNav;
