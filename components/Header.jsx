"use client";
import Link from "next/link";
import Image from "next/image";
import { useSidebar } from "./SidebarContext";

export default function Header() {
  const { open, toggle } = useSidebar();

  return (
    <header className="app-header">
      <div className="header-left">
        <button
          aria-label="Open menu"
          className={`hamburger ${open ? "is-active" : ""}`}
          onClick={toggle}
        >
          <span/><span/><span/>
        </button>
      </div>

      <div className="header-center">
        <Link href="/" className="logo-link" aria-label="HelpHub Home">
          <Image src="/logo.png" alt="Logo" width={34} height={34} className="logo" />
          <span className="brand">HelpHub247</span>
        </Link>
      </div>

      <div className="header-right"></div>
    </header>
  );
}
