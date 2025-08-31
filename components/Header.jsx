"use client";
import Link from "next/link";
import Image from "next/image";
import { useSidebar } from "./SidebarContext";
import { usePathname } from "next/navigation";

export default function Header(){
  const { open, toggle } = useSidebar();
  const pathname = usePathname();

  return (
    <header className="header">
      <div className="container header-inner">
        <button
          aria-label="Menu"
          className={`hamburger ${open ? "active":""}`}
          onClick={toggle}
        >
          <span className="bars">
            <span></span><span></span><span></span>
          </span>
        </button>

        <Link href="/" className="logo-link" aria-label="Go home">
          <Image src="/logo.png" alt="HelpHub247" width={140} height={42} priority />
        </Link>
      </div>
    </header>
  );
}
