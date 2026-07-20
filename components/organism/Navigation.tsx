"use client";

import { useEffect, useState } from "react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-10 px-6 transition-[background-color,backdrop-filter] duration-200 ${
        scrolled
          ? "bg-zinc-900/90 backdrop-blur-md"
          : "bg-transparent backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto flex max-w-[1080px] items-center justify-between py-[18px] max-sm:flex-col max-sm:items-start max-sm:gap-3">
        <a href="#" className="font-[var(--display)] text-[1.05rem] font-bold">
          Floris de Graaff
        </a>
        <ul className="flex gap-7 font-[var(--mono)] text-[0.8rem] uppercase tracking-[0.06em] max-sm:flex-wrap max-sm:gap-4">
          <li>
            <a
              href="#about"
              className="text-primary-100 transition-colors duration-150 hover:text-primary-500"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-primary-100 transition-colors duration-150 hover:text-primary-500"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="text-primary-100 transition-colors duration-150 hover:text-primary-500"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#lessons"
              className="text-primary-100 transition-colors duration-150 hover:text-primary-500"
            >
              Lessons
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-primary-100 transition-colors duration-150 hover:text-primary-500"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
