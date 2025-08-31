// components/ClientShell.jsx
"use client";

import SidebarProvider from "./SidebarContext";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useEffect } from "react";

export default function ClientShell() {
  // Ensure body class is correct on mount (no flash)
  useEffect(() => {
    document.body.classList.add("js-mounted");
  }, []);

  return (
    <SidebarProvider>
      <Header />
      <Sidebar />
      {/* Content spacer so pages aren’t under the fixed header */}
      <div className="app-content-spacer" />
    </SidebarProvider>
  );
}
