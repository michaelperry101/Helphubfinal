import ClientShell from "../../components/ClientShell";

export const metadata = { title: "Terms" };

export default function TermsPage() {
  return (
    <ClientShell>
      <main className="container">
        <div className="card">
          <h2>Terms of Service</h2>
          <p>Use Carys responsibly. Don’t upload illegal content. No warranties; use at your own risk.</p>
        </div>
      </main>
    </ClientShell>
  );
}
