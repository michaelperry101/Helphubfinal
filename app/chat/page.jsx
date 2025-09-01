// app/chat/page.jsx  (SERVER)
import ClientShell from "../../components/ClientShell";
import EmbedClient from "./EmbedClient";

export const metadata = { title: "Chat — Carys" };

export default function ChatPage() {
  return (
    <ClientShell>
      <main className="container" style={{ paddingTop: 24 }}>
        <div className="card" style={{ padding: 0 }}>
          <EmbedClient />
        </div>
      </main>
    </ClientShell>
  );
}
