import ClientShell from "../../components/ClientShell";

export const metadata = { title: "Subscription" };

export default function SubscribePage() {
  return (
    <ClientShell>
      <main className="container">
        <div className="card">
          <h2>Upgrade to Pro</h2>
          <p>Longer chats, priority speed, and premium voice.</p>
          <div className="grid-2">
            <div className="card">
              <h3>Free</h3>
              <p>Great for quick questions.</p>
              <button className="btn">Stay Free</button>
            </div>
            <div className="card">
              <h3>Pro</h3>
              <p>Best for power users & teams.</p>
              <button className="btn btn-primary">Subscribe</button>
            </div>
          </div>
        </div>
      </main>
    </ClientShell>
  );
}
