import styles from "./styles/Education.module.css";

const education = [
  {
    school: "California Polytechnic State University-San Luis Obispo",
    degree: "Bachelor's degree, Computer Science",
    dates: "2021 – 2025",
    logo: "/calpoly-its-logo.avif"
  },
  {
    school: "California State University, Bakersfield",
    degree: "Dual Enrollment",
    dates: "Aug 2020 – Jun 2021",
    logo: "/csu-bakersfield-logo.png"
  },
  {
    school: "Bakersfield College",
    degree: "Concurrent/Dual Enrollment",
    dates: "Jan 2020 – Jan 2021",
    logo: "/bc-logo.jpg"
  },
  {
    school: "Ridgeview High School",
    degree: "High School Diploma",
    dates: "Aug 2017 – May 2021",
    logo: "/ridgeview-logo.jpg"
  }
];

export default function Education() {
  return (
    <section className={styles.education}>
      <h2 className={styles.heading}>Education</h2>
      <ul className={styles.list}>
        {education.map((edu, idx) => (
          <li className={styles.item} key={idx}>
            <div className={styles.logoWrapper}>
              <img src={edu.logo} alt={edu.school + " logo"} className={styles.logo} />
            </div>
            <div className={styles.info}>
              <div className={styles.school}>{edu.school}</div>
              <div className={styles.degree}>{edu.degree}</div>
            </div>
            <div className={styles.dates}>{edu.dates}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}