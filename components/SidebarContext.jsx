// components/SidebarContext.jsx
"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const SidebarContext = createContext(null);

export function useSidebar() {
  const ctx = useContext(SidebarContext);
  if (!ctx) throw new Error("useSidebar must be used within SidebarProvider");
  return ctx;
}

export default function SidebarProvider({ children }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("sidebar-open", open);
  }, [open]);

  const value = useMemo(
    () => ({
      open,
      toggle: () => setOpen((v) => !v),
      close: () => setOpen(false),
      openSidebar: () => setOpen(true),
      setOpen,
    }),
    [open]
  );

  return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>;
}
