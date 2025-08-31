// app/layout.js (SERVER)
import "./globals.css";

export const metadata = {
  title: "HelpHub247",
  description: "Chat with Carys",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Client shell handles sidebar state & header interactions */}
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}

// Import the client shell dynamically without SSR constraints
import ClientShell from "../components/ClientShell";
