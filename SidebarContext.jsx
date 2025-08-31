"use client";
import { createContext, useContext, useState, useCallback } from "react";

const Ctx = createContext(null);

export function SidebarProvider({ children }) {
  const [open, setOpen] = useState(false);
  const toggle = useCallback(() => setOpen(v => !v), []);
  const close = useCallback(() => setOpen(false), []);
  const value = { open, toggle, close, setOpen };
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useSidebar(){
  const ctx = useContext(Ctx);
  if(!ctx) throw new Error("useSidebar must be used within SidebarProvider");
  return ctx;
}
