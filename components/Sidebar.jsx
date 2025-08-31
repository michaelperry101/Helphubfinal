// components/Sidebar.jsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSidebar } from "./SidebarContext";

const nav = [
  { href: "/", label: "Home", icon: "🏠" },
  { href: "/chat", label: "Chat", icon: "💬" },
  { href: "/about", label: "About Carys", icon: "👩‍💼" },
  { href: "/reviews", label: "Reviews", icon: "⭐" },
  { href: "/subscribe", label: "Subscribe", icon: "💎" },
  { href: "/settings", label: "Settings", icon: "⚙️" },
  { href: "/privacy", label: "Privacy", icon: "🔒" },
  { href: "/terms", label: "Terms", icon: "📄" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { open, close } = useSidebar();

  return (
    <aside className={`sidebar ${open ? "open" : ""}`} onClick={(e) => e.stopPropagation()}>
      <nav className="menu">
        {nav.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`menu-item ${active ? "active" : ""}`}
              onClick={close}
            >
              <span className="mi-ic" aria-hidden>{item.icon}</span>
              <span className="mi-label">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
