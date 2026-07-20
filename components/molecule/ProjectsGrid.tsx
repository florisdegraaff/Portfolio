"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import SectionLabel from "@/components/atom/SectionLabel"
import Title from "@/components/atom/Title"
import { artboardClasses } from "@/components/lib/artboard"
import { urlFor } from "@/sanity/image"

export type ProjectCardData = {
  _id: string
  name: string
  description?: string | null
  technologies?: string[] | null
  liveUrl?: string | null
  repoUrl?: string | null
  image?: {
    asset?: {
      _id: string
      url?: string
      metadata?: { lqip?: string }
    } | null
    alt?: string | null
  } | null
}

type ProjectsGridProps = {
  projects: ProjectCardData[]
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  const [activeTech, setActiveTech] = useState<string | null>(null)

  const technologies = useMemo(() => {
    const counts = new Map<string, number>()
    for (const project of projects) {
      for (const tech of project.technologies ?? []) {
        counts.set(tech, (counts.get(tech) ?? 0) + 1)
      }
    }
    return [...counts.entries()]
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .map(([tech]) => tech)
  }, [projects])

  const filtered = useMemo(() => {
    if (!activeTech) return projects
    return projects.filter((project) =>
      project.technologies?.includes(activeTech),
    )
  }, [activeTech, projects])

  if (projects.length === 0) {
    return <p className="mt-6 text-primary-100">No projects published yet.</p>
  }

  return (
    <>
      <ul className="mt-6 flex flex-wrap gap-3">
        <li>
          <button
            type="button"
            onClick={() => setActiveTech(null)}
            aria-pressed={activeTech === null}
            className={`border px-4 py-2.5 font-[var(--mono)] text-[0.85rem] transition-colors duration-150 ${
              activeTech === null
                ? "border-primary-500 bg-primary-500 text-white"
                : "border-zinc-900 bg-zinc-800 text-primary-100 hover:border-primary-500"
            }`}
          >
            All
          </button>
        </li>
        {technologies.map((tech) => {
          const isActive = activeTech === tech
          return (
            <li key={tech}>
              <button
                type="button"
                onClick={() =>
                  setActiveTech((current) => (current === tech ? null : tech))
                }
                aria-pressed={isActive}
                className={`border px-4 py-2.5 font-[var(--mono)] text-[0.85rem] transition-colors duration-150 ${
                  isActive
                    ? "border-primary-500 bg-primary-500 text-white"
                    : "border-zinc-900 bg-zinc-800 text-primary-100 hover:border-primary-500"
                }`}
              >
                {tech}
              </button>
            </li>
          )
        })}
      </ul>

      {filtered.length === 0 ? (
        <p className="mt-6 text-primary-100">
          No projects use {activeTech}.
        </p>
      ) : (
        <div className="mt-6 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
          {filtered.map((project, index) => {
            const imageUrl = project.image?.asset
              ? urlFor(project.image.asset)
                  .width(800)
                  .height(500)
                  .fit("crop")
                  .crop("top")
                  .url()
              : null
            const alt = project.image?.alt || `${project.name} screenshot`
            const label = `P.${index + 1}`

            return (
              <article
                key={project._id}
                className={`${artboardClasses} border-zinc-900 bg-zinc-800 before:border-primary-500 after:border-primary-500 flex flex-col gap-3 px-[26px] pt-[26px] pb-6`}
              >
                <SectionLabel title={label} />
                <div className="relative aspect-[16/10] border border-zinc-900 bg-zinc-900">
                  {imageUrl ? (
                    <Image
                      src={imageUrl}
                      alt={alt}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 100vw, 50vw"
                      placeholder={
                        project.image?.asset?.metadata?.lqip ? "blur" : "empty"
                      }
                      blurDataURL={
                        project.image?.asset?.metadata?.lqip || undefined
                      }
                    />
                  ) : null}
                </div>
                <Title size="h3" className="mt-1 text-[1.15rem]">
                  {project.name}
                </Title>
                {project.description ? (
                  <p className="text-[0.95rem] text-primary-100">
                    {project.description}
                  </p>
                ) : null}
                {project.technologies?.length ? (
                  <div className="mt-0.5 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-primary-500 px-2.5 py-1 font-[var(--mono)] text-[0.7rem] tracking-[0.04em] text-primary-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                ) : null}
                {(project.liveUrl || project.repoUrl) && (
                  <div className="mt-1.5 flex gap-4 font-[var(--mono)] text-[0.78rem]">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-b border-primary-500 text-primary-100 hover:text-primary-400"
                      >
                        Live Demo
                      </a>
                    ) : null}
                    {project.repoUrl ? (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-b border-primary-500 text-primary-100 hover:text-primary-400"
                      >
                        Code
                      </a>
                    ) : null}
                  </div>
                )}
              </article>
            )
          })}
        </div>
      )}
    </>
  )
}
