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
              I have delivered solutions across React, Angular, TypeScript, JavaScript, Go, Python, Ruby on Rails, Net Core and SQL while
              leveraging Docker, AWS, Github Actions, Kubernetes, and enterprise integration patterns.
            </p>
            <p>
              Beyond the code, I mentor teammates through pair programming and knowledge sharing, run peer
              code reviews, and work inside Agile/Scrum ceremonies — planning, refinement, stand-ups, reviews
              and retrospectives — coordinating Jira tickets with QA, Product Owners and stakeholders.
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
            <div>
              <strong>Languages</strong>
              <span>{profile.languages}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
