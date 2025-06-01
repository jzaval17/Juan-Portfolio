// app/layout.js
import Header from "./components/Header";
import DarkModeToggle from "./components/DarkModeToggle";
import "./globals.css";
import { AnimatePresence, motion } from "framer-motion";

export const metadata = {
  title: "Juan Zavala — Portfolio",
  description: "Portfolio of Juan Zavala, fourth-year CS student at Cal Poly",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        {/* 1. Sticky header */}
        <Header />
        <DarkModeToggle />

        {/* 2. Main page content */}
        <main className="container">
          <AnimatePresence mode="wait">
            <motion.div
              key={typeof window !== "undefined" ? window.location.pathname : ''}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </main>
      </body>
    </html>
  );
}
