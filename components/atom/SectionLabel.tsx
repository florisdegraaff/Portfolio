type SectionLabelVariant = "eyebrow" | "artboard";

type SectionLabelProps = {
  title: string;
  variant?: SectionLabelVariant;
};

const variantClasses: Record<SectionLabelVariant, string> = {
  eyebrow:
    "block font-[var(--mono)] text-[0.72rem] tracking-[0.14em] uppercase text-pine mb-3.5",
  artboard:
    "absolute top-2.5 right-3.5 font-[var(--mono)] text-[0.68rem] text-ink-muted tracking-[0.04em]",
};

export default function SectionLabel({
  title,
  variant = "eyebrow",
}: SectionLabelProps) {
  return <span className={variantClasses[variant]}>{title}</span>;
}
