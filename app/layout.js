// app/layout.js
import "./globals.css";
import { useState, useEffect } from "react";

export const metadata = {
  title: "HelpHub247",
  description: "Chat with Carys",
};

export default function RootLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (sidebarOpen) {
      document.body.classList.add("sidebar-open");
    } else {
      document.body.classList.remove("sidebar-open");
    }
  }, [sidebarOpen]);

  return (
    <html lang="en">
      <body>
        <div className="app-shell">
          {/* Header */}
          <header className="header">
            <div className="header-inner">
              <button
                className="hamburger"
                aria-label="Toggle sidebar"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </button>
              <a href="/" className="logo-link">
                <img src="/logo.png" alt="HelpHub Logo" className="logo-img" />
              </a>
            </div>
          </header>

          {/* Sidebar */}
          <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
            <div className="brand">
              <img src="/logo.png" alt="Logo" />
              <span>HelpHub</span>
            </div>
            <ul className="menu">
              <li>
                <a href="/chat">
                  <span className="icon">💬</span>
                  <span className="label">Chat</span>
                </a>
              </li>
              <li>
                <a href="/about">
                  <span className="icon">ℹ️</span>
                  <span className="label">About</span>
                </a>
              </li>
              <li>
                <a href="/reviews">
                  <span className="icon">⭐</span>
                  <span className="label">Reviews</span>
                </a>
              </li>
              <li>
                <a href="/settings">
                  <span className="icon">⚙️</span>
                  <span className="label">Settings</span>
                </a>
              </li>
            </ul>
          </aside>

          {/* Scrim (overlay) */}
          {sidebarOpen && (
            <div className="scrim show" onClick={() => setSidebarOpen(false)} />
          )}

          {/* Page content */}
          <main className="app-content">{children}</main>
        </div>
      </body>
    </html>
  );
}
