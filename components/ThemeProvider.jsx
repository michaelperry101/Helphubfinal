"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function ThemeProvider({ children }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"    // start in LIGHT mode
      enableSystem={false}
      storageKey="hh-theme"
    >
      {children}
    </NextThemesProvider>
  );
}
