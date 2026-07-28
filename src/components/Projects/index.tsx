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
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
