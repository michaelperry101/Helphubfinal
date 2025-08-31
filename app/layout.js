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
    icon: "/helphub-logo.png",   // 👈 switched to PNG
    shortcut: "/helphub-logo.png",
    apple: "/helphub-logo.png",
  },
  openGraph: {
    title: "HelpHub — Carys",
    description: "Your AI assistant, powered by Carys.",
    images: ["/helphub-logo.png"],  // 👈 OG image in PNG
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <SidebarProvider>
            <div className="flex min-h-screen bg-gray-50 text-gray-900">
              {/* Sidebar */}
              <Sidebar />

              {/* Main content */}
              <div className="flex-1 flex flex-col">
                <Header />
                <main className="flex-1 p-4">{children}</main>
              </div>
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
