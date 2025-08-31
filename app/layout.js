// app/layout.js
import "./globals.css";
import Header from "../components/Header.jsx";
import Sidebar from "../components/Sidebar.jsx";
import { SidebarProvider } from "../components/SidebarContext.jsx";
import { ThemeProvider } from "../components/ThemeProvider.jsx";

export const metadata = {
  title: "HelpHub247",
  description: "Your AI-powered assistant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
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
