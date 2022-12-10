import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing.xl * 2,
    borderRadius: theme.radius.md,
    justifyContent: "center",
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
    border: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[3]
    }`,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      flexDirection: "row",
      padding: theme.spacing.xl,
      gap: "15px",
    },
  },

  image: {
    maxWidth: "250px",

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: "250px",
      marginLeft: "-65px",
    },
  },

  body: {
    paddingLeft: theme.spacing.xl * 2,
    width: "38%",
    textAlign: "center",

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      paddingLeft: 0,
      marginTop: theme.spacing.xl,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
    marginBottom: theme.spacing.md,
  },

  controls: {
    display: "flex",
    marginTop: theme.spacing.xl,
    justifyContent: "center",
  },

  control: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
}));
