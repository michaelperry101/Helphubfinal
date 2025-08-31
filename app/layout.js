import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { SidebarProvider } from "@/components/SidebarContext";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata = {
  title: "HelpHub247 — Carys AI",
  description: "Your AI assistant for everything—now with voice.",
  manifest: "/manifest.json",
  icons: {
    icon: "/icons/icon-192.png",
    apple: "/icons/icon-192.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <Script id="set-theme" strategy="beforeInteractive">
          {`try{var t=localStorage.getItem('hh_theme')||'light';document.documentElement.dataset.theme=t;}catch(e){}`}
        </Script>
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <SidebarProvider>
            <Header />
            <Sidebar />
            <main className="app-content">{children}</main>
            <div id="modal-root"></div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
