import SectionLabel from "@/components/atom/SectionLabel";
import Title from "@/components/atom/Title";

export default function About() {
  return (
    <section id="about" className="border-t border-line px-6 py-[72px]">
      <div className="mx-auto max-w-[1080px]">
        <SectionLabel title="02 / about" />
        <Title size="h2">About</Title>
        <p className="mb-2 max-w-[62ch] text-ink-muted">
          I'm a frontend developer with 3+ years of experience turning 
          designs into interfaces people actually enjoy using. I care as 
          much about how a site looks as how it runs — clean, accessible 
          markup, layouts that don't break under real content, and 
          performance that holds up past the first screenshot. Lately I've 
          been focused on tightening the gap between design and code: 
          fewer one-off overrides, more systems that scale without 
          turning into a mess six months in.
        </p>
      </div>
    </section>
  );
}
