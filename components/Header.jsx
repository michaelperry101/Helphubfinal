// components/Header.jsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useSidebar } from "./SidebarContext";

export default function Header() {
  const { open, toggle } = useSidebar();

  return (
    <header className="app-header">
      {/* Animated hamburger top-left (no box) */}
      <button
        aria-label="Toggle menu"
        className={`hamburger ${open ? "is-active" : ""}`}
        onClick={toggle}
      >
        <span />
        <span />
        <span />
      </button>

      {/* Centered logo that goes home */}
      <Link href="/" className="logo-link" aria-label="HelpHub247 home">
        {/* Put /public/logo.png in your repo */}
        <Image src="/logo.png" width={152} height={40} alt="HelpHub247" priority />
      </Link>

      {/* Right-side spacer for symmetry; add icons later if needed */}
      <div className="header-right" />
    </header>
  );
}
