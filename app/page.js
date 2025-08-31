import Link from "next/link";
import Image from "next/image";

export default function HomePage(){
  return (
    <div className="page">
      <section className="hero">
        <div className="center-stack">
          <div className="logo-center"><Image src="/logo-mark.svg" width={120} height={120} alt="HelpHub247" priority/></div>
          <h1>Meet Carys — your always‑on AI partner</h1>
          <p>Chat in text or voice. Create, plan, and get answers fast.</p>
          <div className="cta-row">
            <Link href="/chat" className="btn primary">Open Chat</Link>
            <Link href="/about" className="btn">About Carys</Link>
          </div>
        </div>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} HelpHub247 • <Link href="/privacy">Privacy</Link> • <Link href="/terms">Terms</Link>
      </footer>

      <Link href="/chat" className="sticky-chat-bubble" aria-label="Chat with Carys">
        <span className="dot" /> Chat with Carys
      </Link>
    </div>
  );
}
