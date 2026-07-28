import { Profile } from '../../data';
import styles from './Hero.module.scss';
import clsx from 'clsx';

interface HeroProps {
  profile: Profile;
}

function Hero({ profile }: HeroProps) {
  return (
    <section className={clsx(styles.hero, styles.section)} id="home">
      <div className={clsx('container', styles.heroGrid)}>
        <div>
          <p className={styles.eyebrow}>{profile.title}</p>
          <h1>
            Hello, I’m <span>Omar Alberto</span>.
          </h1>
          <p className={styles.heroCopy}>{profile.heroCopy}</p>
          <div className={styles.heroActions}>
            <a className={clsx(styles.button, styles.primary)} href={`mailto:${profile.email}`}>
              Email Me
            </a>
            <a className={clsx(styles.button, styles.secondary)} href="#projects">
              View Work
            </a>
          </div>
        </div>
        <div className={styles.heroImage}>
          <div className={styles.heroCard}>
            <p>
              Full-stack engineer experienced in AI-driven solutions, scalable backends, and cloud deployments across Docker, AWS, and Kubernetes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
