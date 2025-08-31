export const metadata = { title: "About Carys" };

export default function AboutPage(){
  return (
    <div className="page container">
      <h1>About Carys</h1>
      <div className="card section">
        <h2>What makes Carys tick</h2>
        <p>
          Carys blends fast reasoning with a natural British voice to help you draft, plan, and decide.
          Ask for research, summaries, content, or spark ideas by talking—hands‑free.
        </p>
      </div>
      <div className="card section">
        <h2>Why HelpHub247</h2>
        <p>
          We believe assistance should feel effortless and private. Your preferences
          (like theme, voice, and mute) are stored locally unless you sign in.
        </p>
      </div>
    </div>
  );
}
