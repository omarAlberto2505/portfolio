import type { ExperienceItem } from '../../data';
import styles from './Experience.module.scss';

interface ExperienceProps {
  experience: ExperienceItem[];
}

function Experience({ experience }: ExperienceProps) {
  return (
    <section className={styles.section} id="experience">
      <div className="container">
        <div className={styles.sectionHeading}>
          <span>Experience</span>
          <h2>Professional roles and leadership.</h2>
        </div>
        <div className={styles.timeline}>
          {experience.map((item) => (
            <article key={`${item.company}-${item.period}`} className={styles.timelineItem}>
              <h3>{item.role}</h3>
              <span>{`${item.company} · ${item.location} · ${item.period}`}</span>
              {item.description}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
