import SectionLabel from "@/components/atom/SectionLabel";
import Title from "@/components/atom/Title";
import MistakeCard from "@/components/molecule/MistakeCard";

export default function Mistakes() {
  return (
    <section id="mistakes" className="border-t border-line px-6 py-[72px]">
      <div className="mx-auto max-w-[1080px]">
        <SectionLabel title="05 / mistakes" />
        <Title size="h2">Mistakes</Title>
        <p className="mb-7 max-w-[62ch] text-ink-muted">
          I love mistakes, they are an opportunity to learn. I learned a lot in my career, and I want to share some of the mistakes I made and what I learned from them.
        </p>
        <MistakeCard
          number="01"
          mistake="Building on the wrong foundation"
          context="I developed a website on templates that used a different design system than the one we needed — fighting the template instead of building cleanly."
          lesson="If no template fits the design system, build from scratch and change the estimate accordingly."
        />
        <MistakeCard
          number="02"
          mistake="Building without a full map"
          context="I started building without a clear list of every section on the site. Because of this, I had to change the sections I had built a couple of times."
          lesson="Had I made a list beforehand, I would’ve finished the project faster."
        />
        <MistakeCard
          number="03"
          mistake="Handing over and walking away"
          context="After delivery I left clients with a handover and little guidance on where to find things. They were left guessing how to update and maintain the work."
          lesson="Document where content lives, how to change it, and who to ask. A clear handoff is part of the job."
        />
        <MistakeCard
          number="04"
          mistake="One typo, multiple websites gone"
          context="As an intern, a single typo emptied an entire server that hosted multiple websites. Access I didn’t need made a small mistake catastrophic."
          lesson="Only give employees and interns the rights they actually need. Least privilege isn’t paranoia — it’s protection."
        />
      </div>
    </section>
  );
}
