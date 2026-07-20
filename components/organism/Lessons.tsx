import SectionLabel from "@/components/atom/SectionLabel";
import Title from "@/components/atom/Title";
import LessonCard from "@/components/molecule/LessonCard";

export default function Lessons() {
  return (
    <section id="lessons" className="px-6 py-[72px]">
      <div className="mx-auto max-w-[1080px]">
        <SectionLabel title="05 / lessons" />
        <Title size="h2">Lessons Learned</Title>
        <p className="mb-7 max-w-[62ch] text-primary-100">
          The best lessons usually come from doing something the hard way first.
          Here are a few I picked up early and still carry with me.
        </p>
        <LessonCard
          number="01"
          lesson="If no template fits the design system, build from scratch and adjust the estimate."
          story="I once built on templates that did not match the design system we needed. I spent more time fighting the template than building cleanly."
        />
        <LessonCard
          number="02"
          lesson="Map every section before you start building."
          story="I started a project without a clear list of every page section and had to rework what I had already built. A simple sitemap upfront would have saved time."
        />
        <LessonCard
          number="03"
          lesson="A clear handoff is part of the job."
          story="After one delivery I left clients with documentation but little guidance on where to find things or how to maintain the work. They were left guessing instead of feeling confident."
        />
        <LessonCard
          number="04"
          lesson="Only give people the access they actually need."
          story="As an intern, a single typo on a server I had unnecessary access to took down multiple websites. A small mistake became catastrophic because permissions were too broad."
        />
      </div>
    </section>
  );
}
