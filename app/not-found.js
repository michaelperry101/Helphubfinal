import Link from "next/link";
import ClientShell from "../components/ClientShell";

export default function NotFound() {
  return (
    <ClientShell>
      <main className="container">
        <div className="card">
          <h2>Page not found</h2>
          <p>The page you’re looking for doesn’t exist.</p>
          <Link className="btn" href="/">Go Home</Link>
        </div>
      </main>
    </ClientShell>
  );
}
