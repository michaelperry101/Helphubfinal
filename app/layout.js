// app/layout.js
import "./globals.css";

export const metadata = {
  title: "HelpHub247",
  description: "Your AI-powered assistant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body>
        {/* Client-only shell mounts header + sidebar and provides context */}
        <div id="app-root">
          {/* Do NOT import client hooks here – keep this file server-only */}
          {/* Inject the client shell via a script tag-friendly wrapper */}
          {/** We’ll mount the client shell via a normal React import in a separate client file */}
          {children}
        </div>
        {/* Render client shell at the end so all pages get header/sidebar */}
        {/* This import is safe in a server file because the component itself is client */}
        {require("../components/ClientShell").default()}
      </body>
    </html>
  );
}
