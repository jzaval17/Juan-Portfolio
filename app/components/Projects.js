// app/components/Projects.js
"use client"; // optional
import styles from "./styles/Projects.module.css";

const projects = [
  {
    name: "Mask R-CNN Tower Identification",
    description:
      "Co-built a Mask R-CNN model in Google Colab to detect & classify cellphone towers. Designed the labeling pipeline, applied custom augmentations, and tested inference on 200+ images.",
    link: "https://github.com/yourusername/tower-id",
  },
  {
    name: "Sea Level Rise Prediction",
    description:
      "In DATA 301, cleaned historic NOAA sea level data with Pandas, trained Linear Regression & SVM models, then built a Streamlit dashboard to visualize and forecast trends.",
    link: "https://github.com/yourusername/sea-level-analysis",
  },
  // Add more projects here if you want…
];

export default function Projects() {
  return (
    <section id="projects" className={`${styles.projects} container section`}>
      <h2 className={styles.heading}>Projects</h2>
      <ul className={styles.list}>
        {projects.map((proj, idx) => (
          <li key={idx} className={styles.item}>
            <h3 className={styles.name}>{proj.name}</h3>
            <p className={styles.desc}>
              {proj.description}{" "}
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                GitHub ›
              </a>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
