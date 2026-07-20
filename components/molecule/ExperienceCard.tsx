import Title from "@/components/atom/Title";

type ExperienceCardProps = {
  starting: string;
  ending: string;
  role: string;
  company: string;
  description: string;
};

export default function ExperienceCard({
  starting,
  ending,
  role,
  company,
  description,
}: ExperienceCardProps) {
  return (
    <div className="grid grid-cols-[180px_1fr] gap-4 border-b border-line py-5 last:border-b-0 max-sm:grid-cols-1 max-sm:gap-1">
      <span className="font-[var(--mono)] text-[0.78rem] text-primary-100">
        {starting} – {ending}
      </span>
      <div>
        <Title size="h3" className="mb-1.5 text-[1.05rem]">
          {role} — {company}
        </Title>
        <p className="text-[0.92rem] text-primary-100">{description}</p>
      </div>
    </div>
  );
}
