import Hero from "./components/hero";
import About from "./components/about";
import Work from "./components/work";
import Education from "./components/education";
import Skills from "./components/skills";
import Languages from "./components/languages";
import Frameworks from "./components/frameworks";
import Technologies from "./components/technologies";
import Projects from "./components/projects";
import Contact from "./components/contact";

export default function Home() {
  return (
      <main className="flex flex-col min-h-[100dvh] space-y-10">
        <Hero />
        <About />
        <Work />
        <Education />
        <Skills />
        <Languages />
        <Frameworks />
        <Technologies />
        <Projects />
        <Contact />
      </main>
  );
}
