import SectionLabel from "@/components/atom/SectionLabel"
import Title from "@/components/atom/Title"
import ProjectsGrid, {
  type ProjectCardData,
} from "@/components/molecule/ProjectsGrid"
import { client } from "@/sanity/client"
import { PROJECTS_QUERY } from "@/sanity/queries"

export default async function Projects() {
  const projects = await client.fetch<ProjectCardData[]>(
    PROJECTS_QUERY,
    {},
    { next: { revalidate: 60 } },
  )

  return (
    <section id="projects" className="px-6 py-[72px]">
      <div className="mx-auto max-w-[1080px]">
        <SectionLabel title="03 / projects" />
        <Title size="h2">Projects</Title>
        <ProjectsGrid projects={projects} />
      </div>
    </section>
  )
}
