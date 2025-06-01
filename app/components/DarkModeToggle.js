"use client";
import { useEffect, useState } from "react";
import styles from "./styles/DarkModeToggle.module.css";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      setDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = dark ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    setDark(!dark);
  };

  return (
    <button onClick={toggleTheme} className={styles.toggleBtn}>
      {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}