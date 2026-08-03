import type { Project } from '../../data';
import styles from './Projects.module.scss';

interface ProjectsProps {
  projects: Project[];
}

function Projects({ projects }: ProjectsProps) {
  return (
    <section className={styles.section} id="projects">
      <div className="container">
        <div className={styles.sectionHeading}>
          <span>Projects</span>
          <h2>Selected work from my resume.</h2>
        </div>
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <article key={project.title} className={styles.projectCard}>
              <div className={styles.projectTitle}>
                <h3>{project.title}</h3>
                {project.status && <span className={styles.status}>{project.status}</span>}
              </div>
              <p>{project.description}</p>
              {project.stack && (
                <ul className={styles.stack}>
                  {project.stack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              )}
              {project.links && (
                <div className={styles.links}>
                  {project.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
