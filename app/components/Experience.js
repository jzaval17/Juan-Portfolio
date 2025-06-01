// app/components/Experience.js
"use client";
import Image from "next/image";
import styles from "./styles/Experience.module.css";

const experiences = [
  {
    company: "Cal Poly Information Technology Services",
    logo: "/calpoly-its-logo.avif",      // put calpoly-its-logo.png into public/
    role: "IT Support Lead",
    dates: "May 2024 – Present",
    location: "San Luis Obispo, CA",
    bullets: [
      "Lead weekly student standups to communicate technical updates and streamline workflow processes.",
      "Support technicians in infrastructure upgrades and resolve hardware/network issues across campus offices.",
      "Deployed 100+ systems in 3 months, improving employee onboarding efficiency by 20%.",
      "Resolved 50+ infrastructure issues, reducing downtime and boosting team productivity by 20%.",
    ],
  },
  {
    company: "Cal Poly Computer Science Department | AI for Search & Rescue",
    logo: "/cs-logo.jpg",      // put calpoly-cs-logo.png into public/
    role: "Machine Learning Researcher",
    dates: "January 2025 – Present",
    location: "San Luis Obispo, CA",
    bullets: [
      "Developed and tested ML/DL models (K-means, KNN, SVM) to identify patterns in Search and Rescue datasets, achieving over 80 % accuracy in missing person prediction.",
      "Cleaned and preprocessed large-scale SAR datasets using Pandas, improving model input quality and performance.",
    ],
  },
  {
    company: "University Housing",
    logo: "/university-housing-logo.png",  // put university-housing-logo.png into public/ (or remove <Image> wrapper if you don’t have a logo)
    role: "Student Lead",
    dates: "June 2023 – September 2023",
    location: "San Luis Obispo, CA",
    bullets: [
      "Streamlined dorm move-in by coordinating furniture logistics and leading 30+ volunteers, improving move-in efficiency.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className={`${styles.experience} container section`}>
      <h2 className={styles.heading}>Work Experience</h2>
      <div className={styles.list}>
        {experiences.map((exp, idx) => (
          <div key={idx} className={styles.job}>
            <div className={styles.logoWrapper}>
              <Image
                src={exp.logo}
                alt={exp.company}
                width={48}
                height={48}
                className={styles.logo}
              />
            </div>
            <div className={styles.details}>
              <h3 className={styles.company}>{exp.company}</h3>
              <p className={styles.role}>{exp.role}</p>
              <p className={styles.dates}>{exp.dates}</p>
              <p className={styles.location}>{exp.location}</p>
              <ul className={styles.bullets}>
                {exp.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
