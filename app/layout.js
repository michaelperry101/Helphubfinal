// app/layout.js
import "./globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Providers from "@/components/Providers";

export const metadata = {
  title: "HelpHub247",
  description: "Your helpful hub.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900">
        <Providers>
          <div className="flex">
            <Sidebar />
            <div className="flex-1 min-h-screen flex flex-col">
              <Header />
              <main className="p-4">{children}</main>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
