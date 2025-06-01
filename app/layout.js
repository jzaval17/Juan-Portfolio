// app/layout.js
import Header from "./components/Header";
import "./globals.css";

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

        {/* 2. Main page content */}
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
