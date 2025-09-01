import ClientShell from "../../components/ClientShell";

export const metadata = { title: "Reviews" };

const FAKE = [
  { name: "Amelia R.", text: "Carys planned my trip in minutes. Unreal.", stars: 5 },
  { name: "Lewis D.", text: "Voice chat feels like a real assistant.", stars: 5 },
  { name: "Priya K.", text: "Clean UI and great summaries.", stars: 4 },
];

export default function ReviewsPage() {
  return (
    <ClientShell>
      <main className="container">
        <div className="grid-2">
          {FAKE.map((r, i) => (
            <div key={i} className="card">
              <div style={{fontWeight:700}}>{r.name}</div>
              <div style={{color:"#fbbf24", margin:"6px 0"}}>{"★".repeat(r.stars)}{"☆".repeat(5-r.stars)}</div>
              <p style={{margin:0}}>{r.text}</p>
            </div>
          ))}
        </div>
      </main>
    </ClientShell>
  );
}
