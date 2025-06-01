// app/components/Hero.js
"use client"; // make sure this is a client component if you want the waving animation
import Image from "next/image";
import styles from "./styles/Hero.module.css";

export default function Hero() {
  return (
    <section className={`${styles.hero} container`}>
      <div className={styles.heroContent}>
        {/* 1. Put your headshot here in public/profile.jpg */}
        <div className={styles.profilePicWrapper}>
          <Image
            src="/Juan-pfp.JPG"
            alt="Juan Zavala"
            width={128}
            height={128}
            className={styles.profilePic}
          />
        </div>

        <h1 className={styles.title}>
          Nice to meet you! <br />
          I’m <span className={styles.name}>Juan</span>{" "}
          <span className="wave">👋</span>
        </h1>
        <p className={styles.tagline}>
          Fourth-year Computer Science student at Cal Poly, Data-enthusiast turned
          aspiring software engineer.
        </p>
      </div>
    </section>
  );
}
