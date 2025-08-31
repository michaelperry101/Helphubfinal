export const metadata = { title: "Reviews" };
export default function ReviewsPage() {
  const reviews = [
    { name: "Amelia R.", text: "Absolute lifesaver for my team." },
    { name: "Leo K.", text: "Fast, accurate, and friendly." },
  ];
  return (
    <main className="container page">
      <h1>Reviews</h1>
      <ul>
        {reviews.map((r, i) => (
          <li key={i}>
            <strong>{r.name}</strong>: {r.text}
          </li>
        ))}
      </ul>
    </main>
  );
}
