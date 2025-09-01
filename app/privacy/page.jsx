import ClientShell from "../../components/ClientShell";

export const metadata = { title: "Privacy" };

export default function PrivacyPage() {
  return (
    <ClientShell>
      <main className="container">
        <div className="card">
          <h2>Privacy Policy</h2>
          <p>We respect your privacy. Conversations can be deleted at any time. We don’t sell personal data.</p>
          <p>Voice features are provided via ElevenLabs; their processing is governed by their policy.</p>
        </div>
      </main>
    </ClientShell>
  );
}
