import Link from "next/link";
import Image from "next/image";
import ClientShell from "../components/ClientShell";

export const metadata = { title: "HelpHub247 — Home" };

export default function HomePage() {
  return (
    <ClientShell>
      <main className="container">
        <section className="hero">
          <div className="hero-card">
            <div style={{display:"grid",gridTemplateColumns:"auto 1fr",gap:12,alignItems:"center"}}>
              <Image src="/logo.png" width={40} height={40} alt="Logo" className="logo"/>
              <div>
                <h1 className="hero-title">Meet Carys — your helpful AI</h1>
                <p className="hero-sub">
                  Ask questions, plan, create, and talk — now with natural voice via ElevenLabs.
                </p>
              </div>
            </div>

            <div className="hero-actions">
              <Link className="btn btn-primary" href="/chat">Start chatting</Link>
              <Link className="btn" href="/about">Learn more</Link>
            </div>
          </div>
        </section>
      </main>

      <Link href="/chat" className="chat-fab" aria-label="Chat with Carys">
        💬 Chat with Carys
      </Link>
    </ClientShell>
  );
}
