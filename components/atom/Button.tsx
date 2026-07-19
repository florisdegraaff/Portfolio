type ButtonVariant = "primary" | "secondary";

type ButtonProps = {
  href: string;
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
};

const baseClasses =
  "inline-block font-[var(--mono)] text-[0.82rem] uppercase tracking-[0.06em] px-[22px] py-[13px] border border-ink transition-[transform,background,color] duration-150 ease-in-out hover:-translate-y-0.5";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-ink text-bg hover:bg-pine-dark hover:border-pine-dark hover:text-bg",
  secondary: "bg-transparent text-ink hover:bg-ink hover:text-bg",
};

export default function Button({
  href,
  variant = "primary",
  children,
  className,
}: ButtonProps) {
  const classes = [baseClasses, variantClasses[variant], className]
    .filter(Boolean)
    .join(" ");

  return (
    <a href={href} className={classes}>
      {children}
    </a>
  );
}
