import styles from "./BackgroundGradient.module.css";

export default function BackgroundGradient() {
  return (
    <div className={styles.wrapper} aria-hidden="true">
      <div className={`${styles.circle} ${styles.primary}`} />
      <div className={`${styles.circle} ${styles.secondary}`} />
    </div>
  );
}
