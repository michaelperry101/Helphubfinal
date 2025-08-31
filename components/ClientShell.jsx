// components/ClientShell.jsx
"use client";

import { useEffect } from "react";
import SidebarProvider from "./SidebarContext";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function ClientShell({ children }) {
  // SidebarProvider will manage the open/close state via context
  useEffect(() => {
    // clean up body class if needed on unmount
    return () => document.body.classList.remove("sidebar-open");
  }, []);

  return (
    <SidebarProvider>
      <div className="app-shell">
        <Header />
        <Sidebar />
        <main className="app-content">{children}</main>
        {/* Scrim rendered by Sidebar component via portal OR inline if you prefer */}
      </div>
    </SidebarProvider>
  );
}
