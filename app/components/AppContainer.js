"use client";
import PageTransition from "./PageTransition";
import { usePathname } from "next/navigation";

export default function AppContainer({ children }) {
  const pathname = usePathname();
  return (
    <PageTransition pathname={pathname}>
      {children}
    </PageTransition>
  );
}