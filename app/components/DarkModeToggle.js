"use client";
import { useEffect, useState } from "react";
import DarkModeToggle from "./components/DarkModeToggle";

export default function Layout({ children }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    // Check for saved preference
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
    <>
      <DarkModeToggle toggleTheme={toggleTheme} dark={dark} />
      {children}
    </>
  );
}