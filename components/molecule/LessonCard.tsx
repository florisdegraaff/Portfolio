import Title from "@/components/atom/Title";

type LessonCardProps = {
  number: string;
  lesson: string;
  story: string;
};

export default function LessonCard({ number, lesson, story }: LessonCardProps) {
  return (
    <article className="grid grid-cols-[180px_1fr] gap-4 border-b border-line py-5 last:border-b-0 max-sm:grid-cols-1 max-sm:gap-1">
      <span className="font-[var(--mono)] text-[0.78rem] text-primary-100">
        {number}
      </span>
      <div>
        <Title size="h3" className="mb-1.5 text-[1.05rem]">
          {lesson}
        </Title>
        <p className="text-[0.92rem] text-primary-100">{story}</p>
      </div>
    </article>
  );
}
