// app/page.js
export default function HomePage() {
  return (
    <main className="container">
      <section className="center" style={{ marginTop: 40 }}>
        <img
          src="/logo.png"
          alt="HelpHub247"
          width="220"
          height="58"
          style={{ height: "auto" }}
        />
        <h1 style={{ marginTop: 14, marginBottom: 8 }}>Welcome to HelpHub247</h1>
        <p style={{ color: "var(--muted)", marginBottom: 24 }}>
          Your AI assistant, Carys — always ready to help.
        </p>

        <a
          href="/chat"
          className="menu-item"
          style={{
            display: "inline-grid",
            gridTemplateColumns: "36px 1fr",
            alignItems: "center",
            gap: 10,
            padding: "12px 18px",
            color: "#fff",
            background:
              "linear-gradient(180deg, rgba(59,130,246,.9), rgba(37,99,235,.9))",
            border: "1px solid rgba(59,130,246,.45)",
            borderRadius: 14,
            textDecoration: "none",
          }}
        >
          <span className="mi-ic" aria-hidden>💬</span>
          <span className="mi-label">Chat now</span>
        </a>
      </section>
    </main>
  );
}
