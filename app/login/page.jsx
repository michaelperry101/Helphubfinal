import ClientShell from "../../components/ClientShell";
import Link from "next/link";

export const metadata = { title: "Login / Sign up" };

export default function LoginPage() {
  return (
    <ClientShell>
      <main className="container">
        <div className="card">
          <h2>Login or Create Account</h2>
          <div className="grid-2">
            <button className="btn btn-primary">Continue with Google</button>
            <button className="btn">Continue with Email</button>
          </div>
          <p style={{color:"#9fb0c6", marginTop:10}}>
            By continuing you agree to our <Link href="/terms">Terms</Link> and <Link href="/privacy">Privacy</Link>.
          </p>
        </div>
      </main>
    </ClientShell>
  );
}
