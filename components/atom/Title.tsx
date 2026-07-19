type TitleSize = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type TitleProps = {
  size: TitleSize;
  children: React.ReactNode;
  className?: string;
};

const baseClasses =
  "font-[var(--display)] font-bold tracking-[-0.01em]";

const sizeClasses: Record<TitleSize, string> = {
  h1: "text-[clamp(2.4rem,6vw,4.2rem)] leading-[1.02]",
  h2: "text-[1.9rem] mb-7",
  h3: "",
  h4: "text-xl",
  h5: "text-lg",
  h6: "text-base",
};

export default function Title({ size, children, className }: TitleProps) {
  const Tag = size;
  const classes = [baseClasses, sizeClasses[size], className]
    .filter(Boolean)
    .join(" ");

  return <Tag className={classes}>{children}</Tag>;
}
