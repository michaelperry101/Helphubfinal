"use client";
import Link from "next/link";
import { useSidebar } from "./SidebarContext";
import { usePathname, useRouter } from "next/navigation";
import { Home, MessageSquare, Settings, Info, Star, Shield, FileText, CreditCard, LogIn } from "lucide-react";

function Item({ href, icon:Icon, children, onClick }){
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link href={href} onClick={onClick} className="menu-item" aria-current={active ? "page":undefined}>
      <span className="icon"><Icon size={18} /></span>
      <span>{children}</span>
    </Link>
  );
}

export default function Sidebar(){
  const { open, close } = useSidebar();

  return (
    <>
      <div className={`sidebar ${open ? "open":""}`} role="dialog" aria-modal="true" aria-label="Main navigation">
        <div className="close-row">
          <strong>Menu</strong>
          <button className="btn" onClick={close}>Close</button>
        </div>
        <nav>
          <div className="menu-section">Main</div>
          <div className="menu">
            <Item href="/" icon={Home} onClick={close}>Home</Item>
            <Item href="/chat" icon={MessageSquare} onClick={close}>Chat</Item>
            <Item href="/reviews" icon={Star} onClick={close}>Reviews</Item>
            <Item href="/about" icon={Info} onClick={close}>About Carys</Item>
          </div>
          <div className="menu-section">Account</div>
          <div className="menu">
            <Item href="/subscribe" icon={CreditCard} onClick={close}>Subscribe</Item>
            <Item href="/settings" icon={Settings} onClick={close}>Settings</Item>
            <Item href="/privacy" icon={Shield} onClick={close}>Privacy</Item>
            <Item href="/terms" icon={FileText} onClick={close}>Terms</Item>
            <Item href="/login" icon={LogIn} onClick={close}>Log in</Item>
          </div>
        </nav>
      </div>
      <div className={`overlay ${open ? "show":""}`} onClick={close} />
    </>
  );
}
