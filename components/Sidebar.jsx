// components/Sidebar.jsx
"use client";

import Link from "next/link";
import { useSidebar } from "@/components/SidebarContext";

export default function Sidebar() {
  const { open, closeSidebar } = useSidebar();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/30 transition-opacity duration-200 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeSidebar}
      />
      {/* Drawer */}
      <aside
        className={`fixed left-0 top-0 h-full w-72 bg-white border-r shadow-sm transition-transform duration-200 will-change-transform z-40 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="p-4 space-y-2">
          <Link href="/" className="block px-3 py-2 rounded hover:bg-gray-100" onClick={closeSidebar}>Home</Link>
          <Link href="/about" className="block px-3 py-2 rounded hover:bg-gray-100" onClick={closeSidebar}>About</Link>
          <Link href="/reviews" className="block px-3 py-2 rounded hover:bg-gray-100" onClick={closeSidebar}>Reviews</Link>
          <Link href="/subscribe" className="block px-3 py-2 rounded hover:bg-gray-100" onClick={closeSidebar}>Subscribe</Link>
          <Link href="/settings" className="block px-3 py-2 rounded hover:bg-gray-100" onClick={closeSidebar}>Settings</Link>
          <Link href="/privacy" className="block px-3 py-2 rounded hover:bg-gray-100" onClick={closeSidebar}>Privacy</Link>
          <Link href="/terms" className="block px-3 py-2 rounded hover:bg-gray-100" onClick={closeSidebar}>Terms</Link>
        </nav>
      </aside>
    </>
  );
}
