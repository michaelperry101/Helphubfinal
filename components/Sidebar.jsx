// components/Sidebar.jsx
"use client";
import { useSidebar } from "./SidebarContext";

export default function Sidebar() {
  const { open, closeSidebar } = useSidebar();

  return (
    <>
      {/* Backdrop */}
      <div
        aria-hidden
        onClick={closeSidebar}
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${
          open ? "bg-black/50 opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Bottom Sheet */}
      <aside
        role="dialog"
        aria-modal="true"
        className={`fixed bottom-0 left-0 right-0 z-50 transform-gpu transition-transform duration-300
          bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800
          shadow-[0_-10px_30px_rgba(0,0,0,.15)] rounded-t-2xl`}
        style={{
          transform: open ? "translateY(0%)" : "translateY(100%)",
          willChange: "transform",
        }}
      >
        <div className="mx-auto max-w-4xl px-4 py-4">
          {/* Handle bar */}
          <div className="mx-auto mb-3 h-1.5 w-12 rounded-full bg-neutral-300 dark:bg-neutral-700" />

          {/* Content */}
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
              Menu
            </h2>
            <button
              onClick={closeSidebar}
              className="rounded-md px-2 py-1 text-sm text-neutral-600 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800"
            >
              Close
            </button>
          </div>

          <nav className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
            <a className="nav-link" href="/">Home</a>
            <a className="nav-link" href="/chat">Chat</a>
            <a className="nav-link" href="/settings">Settings</a>
            <a className="nav-link" href="/subscribe">Subscribe</a>
            <a className="nav-link" href="/about">About</a>
            <a className="nav-link" href="/reviews">Reviews</a>
            <a className="nav-link" href="/privacy">Privacy</a>
            <a className="nav-link" href="/terms">Terms</a>
          </nav>
        </div>
      </aside>
    </>
  );
}
