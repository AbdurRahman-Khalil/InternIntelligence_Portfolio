import { Navbar } from "./components/navbar/Navbar";
import { Hero } from "./components/hero/Hero";
import { About } from "./components/about/About";
import { Skills } from "./components/skills/Skills";
// import { Experience } from "./components/experience/Experience";
import { Projects } from "./components/projects/Projects";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/footer/Footer";
import { ScrollTop } from "./components/ScrollTop";



export const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <Hero />
        <About />
        <Skills />
        {/* <Experience /> */}
        <Projects />
        <Contact />
      </main>

      <hr className="text-neutral-100/65" />

      <Footer />
      
      <ScrollTop/>
    </>
  );
};
