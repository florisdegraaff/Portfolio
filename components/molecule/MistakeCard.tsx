import Title from "@/components/atom/Title";

type MistakeCardProps = {
  number: string;
  mistake: string;
  context: string;
  lesson: string;
};

export default function MistakeCard({
  number,
  mistake,
  context,
  lesson,
}: MistakeCardProps) {
  return (
    <article className="grid grid-cols-[180px_1fr] gap-4 border-b border-line py-5 last:border-b-0 max-sm:grid-cols-1 max-sm:gap-1">
      <span className="font-[var(--mono)] text-[0.78rem] text-ink-muted">
        {number}
      </span>
      <div>
        <Title size="h3" className="mb-1.5 text-[1.05rem]">
          {mistake}
        </Title>
        <p className="mb-3 text-[0.92rem] text-ink-muted">{context}</p>
        <p className="text-[0.92rem]">
          <span className="font-[var(--mono)] text-[0.72rem] uppercase tracking-[0.08em] text-pine">
            Lesson
          </span>
          <span className="mt-1.5 block text-ink-muted">{lesson}</span>
        </p>
      </div>
    </article>
  );
}
