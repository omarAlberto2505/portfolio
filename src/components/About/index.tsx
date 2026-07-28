import type { Profile } from '../../data';
import styles from './About.module.scss';

interface AboutProps {
  profile: Profile;
}

function About({ profile }: AboutProps) {
  return (
    <section className={styles.section} id="about">
      <div className="container">
        <div className={styles.sectionHeading}>
          <span>About Me</span>
          <h2>Building scalable systems and intelligent web experiences.</h2>
        </div>
        <div className={styles.contentGrid}>
          <div>
            <p>
              I am a full-stack engineer with a strong background in building Microsoft Copilot Agents,
              MCP servers, and scalable backend services. My work blends modern frontend development
              with cloud-native architecture, API design, and intelligent tooling.
            </p>
            <p>
              I have delivered solutions across React, TypeScript, JavaScript, Go, Python, and SQL while
              leveraging Docker, AWS, Kubernetes, and enterprise integration patterns.
            </p>
          </div>
          <div className={styles.aboutDetails}>
            <div>
              <strong>Location</strong>
              <span>{profile.location}</span>
            </div>
            <div>
              <strong>Email</strong>
              <span>{profile.email}</span>
            </div>
            <div>
              <strong>Education</strong>
              <span>{profile.education}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
