// app/layout.tsx
import "./globals.css";  // Tailwind CSS & global styles
import { ReactNode } from "react";

export const metadata = {
  title: "My personal Portfolio",
  description: "A modern single-page portfolio built with Next.js and Tailwind CSS",
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
