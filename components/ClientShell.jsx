"use client";
import ThemeProvider from "./ThemeProvider";
import Navbar from "./Navbar";

export default function ClientShell({ children }) {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white text-gray-900 dark:bg-neutral-950 dark:text-gray-100">
        <Navbar />
        <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
      </div>
    </ThemeProvider>
  );
}
