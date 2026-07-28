import type { Contact as ContactType } from '../../data';
import styles from './Contact.module.scss';
import clsx from 'clsx';

interface ContactProps {
  contact: ContactType;
  resumeUrl: string;
}

function Contact({ contact, resumeUrl }: ContactProps) {
  return (
    <section className={clsx(styles.section, styles.contactSection)} id="contact">
      <div className="container">
        <div className={styles.sectionHeading}>
          <span>Contact</span>
          <h2>Let’s work together.</h2>
        </div>
        <p>{contact.prompt}</p>
        <div className={styles.contactActions}>
          <a className={clsx(styles.button, styles.primary)} href="mailto:omaralberto7276@gmail.com">
            Email Me
          </a>
          <a className={clsx(styles.button, styles.secondary)} href={resumeUrl} download>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
