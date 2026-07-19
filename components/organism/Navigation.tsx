export default function Navigation() {
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-[rgba(238,241,238,0.9)] px-6 backdrop-blur-[6px]">
      <nav className="mx-auto flex max-w-[1080px] items-center justify-between py-[18px] max-sm:flex-col max-sm:items-start max-sm:gap-3">
        <a href="#" className="font-[var(--display)] text-[1.05rem] font-bold">
          Floris de Graaff
        </a>
        <ul className="flex gap-7 font-[var(--mono)] text-[0.8rem] uppercase tracking-[0.06em] max-sm:flex-wrap max-sm:gap-4">
          <li>
            <a
              href="#about"
              className="text-ink-muted transition-colors duration-150 hover:text-pine"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-ink-muted transition-colors duration-150 hover:text-pine"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="text-ink-muted transition-colors duration-150 hover:text-pine"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#mistakes"
              className="text-ink-muted transition-colors duration-150 hover:text-pine"
            >
              Mistakes
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-ink-muted transition-colors duration-150 hover:text-pine"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
