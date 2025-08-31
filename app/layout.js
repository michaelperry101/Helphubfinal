// app/layout.js
import "./globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { SidebarProvider } from "@/components/SidebarContext";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata = {
  title: "HelpHub — Carys",
  description: "Your AI assistant, powered by Carys.",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon.png", type: "image/png", sizes: "192x192" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.png",
  },
  openGraph: {
    title: "HelpHub — Carys",
    description: "Your AI assistant, powered by Carys.",
    images: ["/helphub-logo.png"],
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Hard fallbacks in case metadata is cached oddly */}
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0ea5e9" />
      </head>
      <body>
        <ThemeProvider>
          <SidebarProvider>
            <div className="app-shell">
              <Sidebar />
              <div className="app-main">
                <Header />
                <main className="app-content">{children}</main>
              </div>
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
