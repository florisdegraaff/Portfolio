import Button from "@/components/atom/Button";
import SectionLabel from "@/components/atom/SectionLabel";
import Title from "@/components/atom/Title";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line px-6 py-[72px] text-left">
      <div className="mx-auto max-w-[1080px]">
        <SectionLabel title="06 / contact" />
        <Title size="h2">Contact</Title>
        <p className="mb-2 max-w-[62ch] text-ink-muted">
          Open to freelance / full-time work. Reach out below.
        </p>
        <Button
          href="mailto:mail+portfolio@florisdegraaff.com"
          variant="primary"
          className="mt-5 mb-7"
        >
          Email Me
        </Button>
        <ul className="flex gap-5 font-[var(--mono)] text-[0.85rem]">
          <li>
            <a
              href="https://www.linkedin.com/in/floris-de-graaff/"
              className="border-b border-line hover:border-rust hover:text-rust"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/florisdegraaff"
              className="border-b border-line hover:border-rust hover:text-rust"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
