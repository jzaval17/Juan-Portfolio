// app/components/About.js
"use client"; // optional, but if you want any client-only behavior
import styles from "./styles/About.module.css";

export default function About() {
  return (
    <section id="about" className={`${styles.about} container section`}>
      <h2 className={styles.heading}>About</h2>
      <p className={styles.text}>
        I’m a fourth-year Computer Science major at Cal Poly who loves building
        things that help people. I enjoy working out, bowling, experimenting with
        Raspberry Pi projects 🛠, and exploring data science 🚀. When I’m not
        coding, you can find me hiking in the hills around San Luis Obispo or
        trying out new recipes. Feel free to{" "}
        <a href="#contact" className={styles.link}>
          reach out!
        </a>
      </p>
    </section>
  );
}
