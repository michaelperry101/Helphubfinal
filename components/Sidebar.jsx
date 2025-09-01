"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSidebar } from "./SidebarContext";

function Item({ href, label }) {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link href={href} className={`menu-item ${active ? "active" : ""}`}>
      <span>{label}</span>
    </Link>
  );
}

export default function Sidebar() {
  const { open, close } = useSidebar();
  return (
    <aside className={`sidebar ${open ? "open" : ""}`}>
      <div className="sidebar-inner" onClick={close}>
        <h4>General</h4>
        <Item href="/" label="Home" />
        <Item href="/chat" label="Chat" />
        <Item href="/about" label="About Carys" />
        <Item href="/reviews" label="Reviews" />
        <div className="menu-spacer" />
        <h4>Account</h4>
        <Item href="/login" label="Login / Sign up" />
        <Item href="/subscribe" label="Subscription" />
        <Item href="/settings" label="Settings" />
        <div className="menu-spacer" />
        <h4>Legal</h4>
        <Item href="/privacy" label="Privacy" />
        <Item href="/terms" label="Terms" />
      </div>
    </aside>
  );
}
