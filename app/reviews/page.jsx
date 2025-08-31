import { REVIEWS } from "@/data/reviews";

export const metadata = { title: "User Reviews" };

export default function ReviewsPage(){
  return (
    <div className="page container">
      <h1>User Reviews</h1>
      <div className="reviews-grid">
        {REVIEWS.map((r, idx)=> (
          <article key={idx} className="card review">
            <div className="avatar">{r.name.split(" ")[0][0]}</div>
            <div>
              <div className="name">{r.name} • {"⭐".repeat(r.rating)}</div>
              <div className="meta">{r.date}</div>
              <p style={{marginTop:6}}>{r.text}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
