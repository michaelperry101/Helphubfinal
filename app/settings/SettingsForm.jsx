"use client";
import { useState } from "react";

export default function SettingsForm() {
  const [voice, setVoice] = useState("uk");
  const [autosave, setAutosave] = useState(true);

  return (
    <>
      <h2>Settings</h2>

      <label className="label">Voice preference</label>
      <select className="select" value={voice} onChange={e=>setVoice(e.target.value)}>
        <option value="uk">English (UK)</option>
        <option value="us">English (US)</option>
      </select>

      <div style={{height:12}} />

      <label className="label">Autosave transcripts</label>
      <label style={{display:"inline-flex", gap:8, alignItems:"center"}}>
        <input
          type="checkbox"
          checked={autosave}
          onChange={e=>setAutosave(e.target.checked)}
        />
        Enable autosave
      </label>
    </>
  );
}
