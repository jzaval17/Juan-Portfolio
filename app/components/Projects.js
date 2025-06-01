// app/components/Projects.js
"use client";
import Image from "next/image";
import styles from "./styles/Projects.module.css";

const projects = [
  {
    name: "Tower Detection Using Mask RCNN w/ CostQuest",
    logo: "/CQALogo.svg", // place this file in public/project-logos/
    tech: "Python, Machine Learning",
    link: "https://www.costquest.com/", // Added CostQuest website link
    bullets: [
      "Collaborated on the data cleaning, preprocessing, and feature engineering pipeline for satellite imagery, improving model training quality and reducing noise by 30 %.",
      "Deployed a Mask R-CNN model to identify towers, shadows, and buildings with 92 % mAP, enhancing geospatial analysis for infrastructure mapping.",
    ],
  },
  {
    name: "Pawsitive Studying Application",
    logo: "/PSApp.png", // place this file in public/project-logos/
    tech: "JavaScript, React Native/Expo, Express, MongoDB, Azure",
    bullets: [
      "Led backend development efforts and analyzed user metrics to drive a 20 % improvement in user focus.",
      "Conducted data analysis on user engagement metrics to demonstrate a 20 % improvement in focus on assignments, providing actionable insights for feature optimization.",
    ],
  },
 {
    name: "Sea Level Rise Prediction",
    logo: "/sea-level-logo.png", 
    tech: "Python, Pandas, Matplotlib, Scikit-learn, Streamlit",
    bullets: [
      "Cleaned and preprocessed historic NOAA sea level data using Pandas, improving model input quality and reducing missing values by 15%.",
      "Trained Linear Regression and SVM models to forecast sea level trends, achieving an R² of 0.93 on test data.",
      "Built an interactive Streamlit dashboard to visualize historical and predicted sea level trends, enabling stakeholders to explore scenarios in real time.",
    ],
  },
  // If you add more projects, just give each a `logo` field and put the file in public/project-logos/
];

export default function Projects() {
  return (
    <section id="projects" className={`${styles.projects} container section`}>
      <h2 className={styles.heading}>Projects</h2>
      <div className={styles.list}>
        {projects.map((proj, idx) => (
          <div key={idx} className={styles.project}>
            <div className={styles.logoWrapper}>
              <Image
                src={proj.logo}
                alt={`${proj.name} logo`}
                width={48}
                height={48}
                className={styles.logo}
              />
            </div>
            <div className={styles.details}>
              <h3 className={styles.name}>
                {proj.name === "Tower Detection Using Mask RCNN w/ CostQuest" ? (
                  <>
                    Tower Detection Using Mask RCNN w/&nbsp;
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#2563eb", textDecoration: "underline" }}
                    >
                      CostQuest
                    </a>
                  </>
                ) : (
                  proj.name
                )}
              </h3>
              <p className={styles.tech}>{proj.tech}</p>
              <ul className={styles.bullets}>
                {proj.bullets.map((b, i) => (
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
