import About from "@/components/organism/About";
import Contact from "@/components/organism/Contact";
import Experience from "@/components/organism/Experience";
import Hero from "@/components/organism/Hero";
import Lessons from "@/components/organism/Lessons";
import Projects from "@/components/organism/Projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Lessons />
      <Contact />
    </main>
  );
}
