import "./globals.css";
import ClientShell from "../components/ClientShell";

export const metadata = {
  title: "Helphub247",
  description: "Your helpful AI assistant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
