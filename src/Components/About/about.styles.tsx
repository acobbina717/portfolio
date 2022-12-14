import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 7,
    marginBottom: theme.spacing.xl * 7,

    borderRadius: theme.radius.md,

    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
    border: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[3]
    }`,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      flexDirection: "column",
      gap: "15px",
      paddingTop: theme.spacing.xl * 4,
      paddingBottom: theme.spacing.xl * 4,
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
    paddingLeft: theme.spacing.xl,
    paddingTop: theme.spacing.md,
    width: "40%",
    textAlign: "center",

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      paddingLeft: 12,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 55,
    lineHeight: 1,
    marginBottom: theme.spacing.xl * 2,
  },

  controls: {
    display: "flex",
    marginTop: theme.spacing.xl * 2.5,
    justifyContent: "center",
  },

  control: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },

  content: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "40px",
  },
}));
