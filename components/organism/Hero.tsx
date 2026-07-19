import Button from "@/components/atom/Button";
import SectionLabel from "@/components/atom/SectionLabel";
import Title from "@/components/atom/Title";
import { artboardClasses } from "@/components/lib/artboard";

export default function Hero() {
  return (
    <section id="hero" className="px-6 py-16">
      <div className="mx-auto max-w-[1080px]">
        <div
          className={`${artboardClasses} px-12 py-[72px] text-left max-sm:px-6 max-sm:py-11`}
        >
          <SectionLabel title="01 / hero" variant="artboard" />
          <Title size="h1">Floris de Graaff</Title>
          <p className="mt-4 font-[var(--mono)] text-base text-pine-dark">
            Frontend Developer
          </p>
          <p className="mt-[18px] max-w-[46ch] text-[1.05rem] text-ink-muted">
            3+ years turning designs into interfaces that load fast, 
            hold up under real use, and don't leave a mess for 
            the next person to untangle.
          </p>
          <div className="mt-9 flex flex-wrap gap-3.5">
            <Button href="#projects" variant="primary">
              View Projects
            </Button>
            <Button href="#contact" variant="secondary">
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
