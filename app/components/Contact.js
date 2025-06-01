// app/components/Contact.js
"use client"; // optional
import styles from "./styles/Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={`${styles.contact} container section`}>
      <h2 className={styles.heading}>Contact</h2>
      <p className={styles.text}>
        📧 Email me at{" "}
        <a href="mailto:juan.zavala@calpoly.edu" className={styles.link}>
          juan.zavala@calpoly.edu
        </a>
      </p>
      <div className={styles.socials}>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconLink}
        >
          <img src="/icons/github.svg" alt="GitHub" className={styles.icon} />
        </a>
        <a
          href="https://www.linkedin.com/in/yourlinkedin"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconLink}
        >
          <img
            src="/icons/linkedin.svg"
            alt="LinkedIn"
            className={styles.icon}
          />
        </a>
        <a
          href="https://twitter.com/yourhandle"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconLink}
        >
          <img
            src="/icons/twitter.svg"
            alt="Twitter"
            className={styles.icon}
          />
        </a>
      </div>
    </section>
  );
}
