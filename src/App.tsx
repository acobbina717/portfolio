import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import Header from "./Components/HeaderNav/HeaderNav";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";
import Hero from "./Components/Hero/Hero";
import { About } from "./Components/About/About";

function App() {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "dark",
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

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
            { label: "Projects", link: "#" },
            { label: "Resume", link: "#" },
          ]}
        />
        <Hero />
        <About />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
