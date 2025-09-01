"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import ColorModeToggle from "./ColorModeToggle";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/reviews", label: "Reviews" },
  { href: "/subscribe", label: "Subscribe" },
  { href: "/settings", label: "Settings" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // close on route change in app router (hashchange fallback)
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur dark:bg-neutral-900/80">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="Helphub247" className="h-6 w-auto" />
          <span className="font-semibold">Helphub247</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-4 md:flex">
          {LINKS.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white"
            >
              {l.label}
            </Link>
          ))}
          <ColorModeToggle />
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-2 md:hidden">
          <ColorModeToggle />
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(v => !v)}
            className="rounded-md border px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </nav>

      {/* Mobile slide-down */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 pb-4">
          {LINKS.map(l => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
