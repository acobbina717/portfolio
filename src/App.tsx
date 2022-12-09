import { useState } from "react";

import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import Header from "./Components/HeaderNav/HeaderNav";

function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <Header
          links={[
            { label: "Home", link: "#" },
            { label: "Home", link: "#" },
            { label: "Home", link: "#" },
          ]}
        />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
