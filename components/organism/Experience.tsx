import SectionLabel from "@/components/atom/SectionLabel";
import Title from "@/components/atom/Title";
import ExperienceCard from "@/components/molecule/ExperienceCard";

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-[72px]">
      <div className="mx-auto max-w-[1080px]">
        <SectionLabel title="04 / experience" />
        <Title size="h2">Experience</Title>
        <ExperienceCard
          starting="August 2025"
          ending="Present"
          role="Frontend Developer"
          company="BrandBrand"
          description="I'm responsible for the frontend development of the BrandBrand website. I'm also responsible for the UI design of the website."
        />
        <ExperienceCard
          starting="July 2021"
          ending="June 2024"
          role="Frontend Developer"
          company="iO"
          description="I'm responsible for the frontend development of the BrandBrand website. I'm also responsible for the UI design of the website. I'm also responsible for the backend development of the website."
        />
        <ExperienceCard
          starting="September 2019"
          ending="March 2021"
          role="Website Developer"
          company="Vidda Digital"
          description="I'm responsible for the frontend development of the BrandBrand website. I'm also responsible for the UI design of the website."
        />
        <ExperienceCard
          starting="July 2018"
          ending="September 2019"
          role="Website Developer"
          company="Hoppinger"
          description="I'm responsible for the frontend development of the BrandBrand website. I'm also responsible for the UI design of the website."
        />
      </div>
    </section>
  );
}
