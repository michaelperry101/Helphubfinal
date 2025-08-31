// components/Header.jsx
"use client";
import Link from "next/link";
import { useEffect } from "react";

export default function Header() {
  // Minimal toggle using a custom event. Your Sidebar listens for this.
  useEffect(() => {
    const btn = document.querySelector("[data-toggle-sidebar]");
    if (!btn) return;
    const onClick = () => window.dispatchEvent(new CustomEvent("toggle-sidebar"));
    btn.addEventListener("click", onClick);
    return () => btn.removeEventListener("click", onClick);
  }, []);

  return (
    <header className="header">
      <div className="header-inner">
        {/* Hamburger (left) */}
        <button
          className="hamburger"
          type="button"
          aria-label="Toggle menu"
          data-toggle-sidebar
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        {/* Centered logo (clicking goes Home) */}
        <Link href="/" className="logo-link" aria-label="HelpHub Home">
          {/* IMPORTANT: ensure /public/helphub-logo.png exists */}
          <img
            src="/helphub-logo.png"
            alt="HelpHub247"
            width="200"
            height="60"
            className="logo-img"
            loading="eager"
          />
        </Link>

        {/* Right spacer so center stays true */}
        <div className="right-slot" aria-hidden />
      </div>
    </header>
  );
}
