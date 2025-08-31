// app/layout.js
import "./globals.css";
import Script from "next/script";

// ⬇️ Use RELATIVE imports (no "@/")
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { SidebarProvider } from "../components/SidebarContext";
import { ThemeProvider } from "../components/ThemeProvider";

export const metadata = {
  title: "HelpHub247",
  description: "Your AI-powered assistant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Prevent theme flash before hydration */}
        <Script id="set-theme" strategy="beforeInteractive">
          {`
            try {
              var t = localStorage.getItem('hh_theme') || 'light';
              document.documentElement.dataset.theme = t;
            } catch (e) {}
          `}
        </Script>
      </head>
      <body>
        <ThemeProvider>
          <SidebarProvider>
            <Header />
            <Sidebar />
            <main className="app-content">{children}</main>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
