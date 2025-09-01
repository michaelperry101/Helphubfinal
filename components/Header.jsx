// components/Header.jsx
"use client";

import Image from "next/image";
import { useSidebar } from "@/components/SidebarContext";

export default function Header() {
  const { toggleSidebar } = useSidebar();

  return (
    <header className="w-full border-b bg-white">
      <div className="mx-auto max-w-6xl h-14 flex items-center px-3 relative">
        {/* Hamburger – top-left, blend in, no box */}
        <button
          aria-label="Open menu"
          onClick={toggleSidebar}
          className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex flex-col justify-center gap-1 p-0"
          style={{ width: 24, height: 18 }}
        >
          <span className="block h-[2px] w-6 bg-gray-800 rounded"></span>
          <span className="block h-[2px] w-6 bg-gray-800 rounded"></span>
          <span className="block h-[2px] w-6 bg-gray-800 rounded"></span>
        </button>

        {/* Centered logo (won’t be covered) */}
        <div className="w-full flex justify-center">
          {/* If you switched to PNG, update the src here */}
          <Image
            src="/logo.png"
            alt="HelpHub247"
            width={140}
            height={32}
            priority
          />
        </div>

        {/* Right spacer to keep logo centered */}
        <div className="absolute right-3 top-1/2 -translate-y-1/2" />
      </div>
    </header>
  );
}
