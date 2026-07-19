import About from "@/components/organism/About";
import Contact from "@/components/organism/Contact";
import Experience from "@/components/organism/Experience";
import Hero from "@/components/organism/Hero";
import Mistakes from "@/components/organism/Mistakes";
import Projects from "@/components/organism/Projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Mistakes />
      <Contact />
    </main>
  );
}
