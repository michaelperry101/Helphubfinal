import ClientShell from "../../components/ClientShell";

export const metadata = { title: "About Carys" };

export default function AboutPage() {
  return (
    <ClientShell>
      <main className="container">
        <div className="card">
          <h2>About Carys</h2>
          <p>
            Carys is your round-the-clock AI copilot. She plans, researches, drafts and speaks
            with a warm, natural voice powered by ElevenLabs.
          </p>
          <p>
            Highlights: fast answers, memory for context, clear sources (when needed), and a friendly tone.
          </p>
        </div>
      </main>
    </ClientShell>
  );
}
