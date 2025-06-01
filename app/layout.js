// app/layout.js
import Header from "./components/Header";
import DarkModeToggle from "./components/DarkModeToggle";
import "./globals.css";
import AppContainer from "./components/AppContainer";

export const metadata = {
  title: "Juan Zavala — Portfolio",
  description: "Portfolio of Juan Zavala, fourth-year CS student at Cal Poly",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Header />
        <DarkModeToggle />
        <main className="container">
          <AppContainer>
            {children}
          </AppContainer>
        </main>
      </body>
    </html>
  );
}
