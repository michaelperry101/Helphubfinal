"use client";
import { SidebarProvider } from "./SidebarContext";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function ClientShell({ children }) {
  return (
    <SidebarProvider>
      <Header />
      <Sidebar />
      <div className="app-shell">{children}</div>
    </SidebarProvider>
  );
}
