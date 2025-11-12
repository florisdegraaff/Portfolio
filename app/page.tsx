import {client} from '@/lib/sanity/client'
import {projectsQuery} from '@/lib/sanity/queries'
import type {ProjectsQueryResult} from '@/lib/sanity/sanity.types'
import styles from './page.module.css'

export default async function Home() {
  const projects: ProjectsQueryResult = await client.fetch(projectsQuery)

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>Portfolio</h1>
        
        <section className={styles.projects}>
          <h2>Projects</h2>
          {projects.length === 0 ? (
            <p>No projects found.</p>
          ) : (
            <ul className={styles.projectList}>
              {projects.map((project) => (
                <li key={project._id} className={styles.projectItem}>
                  <h3>{project.name || 'Untitled Project'}</h3>
                  <p className={styles.projectMeta}>
                    Created: {new Date(project._createdAt).toLocaleDateString()}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
    </div>
  )
}

