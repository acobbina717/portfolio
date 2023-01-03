import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  title: {
    fontSize: 50,
    fontWeight: 900,
    [theme.fn.smallerThan("sm")]: {
      fontSize: 50,
    },
  },
}));
