import type { CSSProperties } from 'react';
import styles from './Footer.module.scss';
import clsx from 'clsx';

interface FooterProps {
  profile: {
    githubUrl: string;
  };
  backgroundImage?: string;
}

function Footer({ profile, backgroundImage }: FooterProps) {
  const footerStyle: CSSProperties | undefined = backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage})`,
      }
    : undefined;

  return (
    <footer className={styles.siteFooter} style={footerStyle}>
      <div className={clsx('container', styles.footerInner)}>
        <p>© 2026 Omar Alberto Murillo Moreno. Built for GitHub Pages.</p>
        <div className={styles.footerLinks}>
          <a href="#home">Top</a>
          <a href={profile.githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
