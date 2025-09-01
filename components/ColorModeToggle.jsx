"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ColorModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      aria-label="Toggle color mode"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="rounded-md border px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      {isDark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
