import styles from "./Button.module.css";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = {
  href: string;
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
};

export default function Button({
  href,
  variant = "primary",
  children,
  className,
}: ButtonProps) {
  const classes = [styles.button, styles[variant], className]
    .filter(Boolean)
    .join(" ");

  return (
    <a href={href} className={classes}>
      <span className={styles.label}>{children}</span>
    </a>
  );
}
