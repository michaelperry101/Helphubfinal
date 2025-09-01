// components/Providers.jsx
"use client";

import { SidebarProvider } from "@/components/SidebarContext";

export default function Providers({ children }) {
  // Light theme only for now (no dark toggle to keep things stable)
  return <SidebarProvider>{children}</SidebarProvider>;
}
