"use client";
import ClientShell from "../../components/ClientShell";
import { useState } from "react";

export const metadata = { title: "Settings" };

export default function SettingsPage() {
  const [voice, setVoice] = useState("uk");
  const [autosave, setAutosave] = useState(true);

  return (
    <ClientShell>
      <main className="container">
        <div className="card">
          <h2>Settings</h2>
          <label className="label">Voice preference</label>
          <select className="select" value={voice} onChange={e=>setVoice(e.target.value)}>
            <option value="uk">English (UK)</option>
            <option value="us">English (US)</option>
          </select>

          <div style={{height:12}} />

          <label className="label">Autosave transcripts</label>
          <div>
            <label style={{display:"inline-flex", gap:8, alignItems:"center"}}>
              <input type="checkbox" checked={autosave} onChange={e=>setAutosave(e.target.checked)} />
              Enable autosave
            </label>
          </div>
        </div>
      </main>
    </ClientShell>
  );
}
