// app/layout.js
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
        {/* You can reuse the same container class for your top-level wrapper */}
        <main className="container">
          {children}
        </main>
      </body>
    </html>
  );
}
