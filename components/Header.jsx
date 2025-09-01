// components/Header.jsx
"use client";
import { useTheme } from "next-themes";
import { useSidebar } from "./SidebarContext";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const { toggleSidebar } = useSidebar();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isDark = (mounted ? theme : resolvedTheme) === "dark";

  return (
    <header className="sticky top-0 z-30 border-b border-neutral-200 bg-white/90 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/70">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-3 sm:px-4">
        <button
          aria-label="Open menu"
          onClick={toggleSidebar}
          className="group inline-flex items-center gap-2 rounded-md px-2 py-1.5 hover:bg-neutral-100 dark:hover:bg-neutral-800"
        >
          {/* Hamburger (no box, blends in) */}
          <span className="relative block h-4 w-5">
            <span className="absolute left-0 top-0 h-0.5 w-full rounded bg-neutral-900 transition-all group-hover:w-4/5 dark:bg-neutral-100" />
            <span className="absolute left-0 top-1.5 h-0.5 w-full rounded bg-neutral-900 transition-all group-hover:w-full dark:bg-neutral-100" />
            <span className="absolute left-0 top-3 h-0.5 w-full rounded bg-neutral-900 transition-all group-hover:w-4/5 dark:bg-neutral-100" />
          </span>
          <span className="sr-only">Menu</span>
        </button>

        <Link href="/" className="flex items-center gap-2">
          {/* Your logo; uses PNG you said you switched to */}
          <Image
            src="/logo.png"
            alt="HelpHub247"
            width={120}
            height={28}
            priority
            className="h-6 w-auto"
          />
        </Link>

        <button
          aria-label="Toggle theme"
          onClick={() => setTheme(isDark ? "light" : "dark")}
          className="rounded-md px-2 py-1.5 text-sm text-neutral-600 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800"
        >
          {mounted && isDark ? "🌙" : "☀️"}
        </button>
      </div>
    </header>
  );
}
