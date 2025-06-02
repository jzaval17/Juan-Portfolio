import styles from "./styles/Education.module.css";

const education = [
  {
    school: "California Polytechnic State University-San Luis Obispo",
    degree: "Bachelor's degree, Computer Science",
    dates: "2021 – 2025",
    details: [
      "Grade: Senior",
      "Activities and societies: Latinx Cultural Association (LCA), Latinx Business Student Association (LBSA), Society of Hispanic Professional Engineers (SHPE)",
      "Skills: Team Leadership"
    ],
    logo: "/calpoly-logo.png"
  },
  {
    school: "California State University, Bakersfield",
    degree: "Dual Enrollment",
    dates: "Aug 2020 – Jun 2021",
    details: [
      "Grade: 4.0 GPA"
    ],
    logo: "/csu-bakersfield-logo.png"
  },
  {
    school: "Bakersfield College",
    degree: "Concurrent/Dual Enrollment",
    dates: "Jan 2020 – Jan 2021",
    details: [
      "Grade: 3.25 GPA"
    ],
    logo: "/bc-logo.png"
  },
  {
    school: "Ridgeview High School",
    degree: "High School Diploma",
    dates: "Aug 2017 – May 2021",
    details: [
      "Activities and societies: Marching Band, Cross Country, Track and Field, Associated Student Body (ASB)"
    ],
    logo: "/ridgeview-logo.png"
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
            <div className={styles.details}>
              <div className={styles.school}>{edu.school}</div>
              <div className={styles.degree}>{edu.degree}</div>
              <div className={styles.dates}>{edu.dates}</div>
              <ul className={styles.bullets}>
                {edu.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}