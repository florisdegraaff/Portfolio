type SectionLabelProps = {
  title: string;
};

export default function SectionLabel({
  title,
}: SectionLabelProps) {
  return <span className="block font-[var(--mono)] text-[0.72rem] tracking-[0.14em] uppercase text-primary-300 mb-3.5">{title}</span>;
}
