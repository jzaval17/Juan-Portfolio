"use client";
import Link from "next/link";
import styles from "./styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      {/* Left: Social Icons */}
      <div className={styles.socials}>
        <a
          href="https://github.com/jzaval17"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconLink}
        >
          <img
            src="/github-logo.png"
            alt="GitHub"
            className={styles.icon}
          />
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

      {/* Center: Your Name (site “logo”) */}
      <div className={styles.center}>
        <Link href="/" className={styles.logo}>
          Juan Zavala
        </Link>
      </div>

      {/* Right: Nav Links (“About Me” & “Resume”) */}
      <nav className={styles.nav}>
        <a href="#about" className={styles.link}>
          About Me
        </a>
        <Link href="/resume" className={styles.link}>
          Resume
        </Link>
      </nav>
    </header>
  );
}
