// app/layout.js
import Header from "./components/Header";
import DarkModeToggle from "./components/DarkModeToggle";
import "./globals.css";
import PageTransition from "./components/PageTransition";
import { usePathname } from "next/navigation";

export const metadata = {
  title: "Juan Zavala — Portfolio",
  description: "Portfolio of Juan Zavala, fourth-year CS student at Cal Poly",
};

export default function RootLayout({ children }) {
  const pathname = typeof window !== "undefined" ? window.location.pathname : "";
  return (
    <html lang="en">
      <head />
      <body>
        <Header />
        <DarkModeToggle />
        <main className="container">
          <PageTransition pathname={pathname}>
            {children}
          </PageTransition>
        </main>
      </body>
    </html>
  );
}
