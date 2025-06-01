// app/components/Contact.js
"use client"; // optional
import styles from "./styles/Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={`${styles.contact} container section`}>
      <h2 className={styles.heading}>Contact</h2>
      <p className={styles.text}>
        📧 Email me at{" "}
        <a href="mailto:jazavala805@gmail.com" className={styles.link}>
          jazavala805@gmail.com
        </a>
      </p>
      <div className={styles.socials}>
        <a
          href="https://github.com/jzaval17"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconLink}
        >
          <img src="/github-logo.png" alt="GitHub" className={styles.icon} />
        </a>
        <a
          href="https://www.linkedin.com/in/jz805/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconLink}
        >
          <img
            src="/linkedin-logo.png"
            alt="LinkedIn"
            className={styles.icon}
          />
        </a>
      </div>
    </section>
  );
}
