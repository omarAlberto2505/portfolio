import { skills } from './data';
import styles from './Skills.module.scss';


function Skills() {
  return (
    <section className={styles.section} id="skills">
      <div className="container">
        <div className={styles.sectionHeading}>
          <span>Skills</span>
          <h2>Technical strengths and toolset.</h2>
        </div>
        <div className={styles.skillsGrid}>
          {skills.map((skill) => (
            <article key={skill.title} className={styles.skillCard}>
              <h3>{skill.title}</h3>
              <p>{skill.details}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
