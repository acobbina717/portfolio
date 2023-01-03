import { MantineProvider } from "@mantine/core";

import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

import { scrollToAbout, scrollToProjects } from "./hooks/hooks";

function App() {
  const { targetRef: aboutMeRef, scrollIntoView: scrollAboutMeIntoView } =
    scrollToAbout();

  const { targetRef: projectRef, scrollIntoView: scrollProjectsIntoView } =
    scrollToProjects();

  return (
    <MantineProvider
      theme={{ colorScheme: "dark" }}
      withGlobalStyles
      withNormalizeCSS
    >
      <Hero
        scrollAboutMeIntoView={scrollAboutMeIntoView}
        scrollProjectsIntoView={scrollProjectsIntoView}
      />
      <About aboutMeRef={aboutMeRef} />
      <Projects projectRef={projectRef} />
      <Contact />
      <Footer />
    </MantineProvider>
  );
}

export default App;
