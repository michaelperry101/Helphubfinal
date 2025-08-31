"use client";
import { useEffect, useState } from "react";

export default function SettingsPage(){
  const [theme, setTheme] = useState("light");
  const [haptics, setHaptics] = useState(true);
  const [analytics, setAnalytics] = useState(false);
  const [voice, setVoice] = useState("en-GB");
  const [mute, setMute] = useState(false);

  useEffect(()=>{
    try{
      const t = localStorage.getItem("hh_theme") || "light";
      const h = localStorage.getItem("hh_haptics") === "0" ? false : true;
      const a = localStorage.getItem("hh_analytics") === "1";
      const v = localStorage.getItem("hh_voice") || "en-GB";
      const m = localStorage.getItem("hh_mute") === "1";
      setTheme(t); setHaptics(h); setAnalytics(a); setVoice(v); setMute(m);
    }catch{}
  },[]);

  useEffect(()=>{
    try{
      localStorage.setItem("hh_theme", theme);
      document.documentElement.dataset.theme = theme;
    }catch{}
  },[theme]);

  function save(k,v){ try{ localStorage.setItem(k,v); }catch{} }

  return (
    <div className="page container">
      <h1>Settings</h1>
      <div className="settings-grid">
        <div className="card settings-card">
          <h2>Appearance</h2>
          <div className="settings-row">
            <span>Theme</span>
            <div style={{display:"flex",gap:8}}>
              <button className={"btn"+(theme==="light"?" primary":"")} onClick={()=>setTheme("light")}>Light</button>
              <button className={"btn"+(theme==="dark"?" primary":"")} onClick={()=>setTheme("dark")}>Dark</button>
              <button className={"btn"+(theme==="system"?" primary":"")} onClick={()=>setTheme("system")}>System</button>
            </div>
          </div>
          <div className="settings-row">
            <span>Haptic feedback</span>
            <button className={"switch "+(haptics?"on":"")} onClick={()=>{setHaptics(!haptics); save("hh_haptics", !haptics ? "1":"0");}}></button>
          </div>
        </div>

        <div className="card settings-card">
          <h2>Voice</h2>
          <div className="settings-row">
            <span>Accent preference</span>
            <select className="btn" value={voice} onChange={(e)=>{setVoice(e.target.value); save("hh_voice", e.target.value);}}>
              <option value="en-GB">English (UK)</option>
              <option value="en-US">English (US)</option>
              <option value="en-AU">English (AU)</option>
            </select>
          </div>
          <div className="settings-row">
            <span>Mute Carys voice</span>
            <button className={"switch "+(mute?"on":"")} onClick={()=>{ const nv=!mute; setMute(nv); save("hh_mute", nv?"1":"0");}}></button>
          </div>
        </div>

        <div className="card settings-card">
          <h2>Privacy & Data</h2>
          <div className="settings-row">
            <span>Anonymous analytics</span>
            <button className={"switch "+(analytics?"on":"")} onClick={()=>{ const nv=!analytics; setAnalytics(nv); save("hh_analytics", nv?"1":"0");}}></button>
          </div>
          <div className="settings-row">
            <span>Clear local data</span>
            <button className="btn" onClick={()=>{ try{localStorage.clear(); location.reload();}catch{}}}>Clear</button>
          </div>
        </div>

        <div className="card settings-card">
          <h2>Account</h2>
          <p>Sign in with Google or email to sync chats across devices. (Placeholder UI)</p>
          <div className="settings-row">
            <button className="btn">Continue with Google</button>
            <button className="btn">Continue with Email</button>
          </div>
        </div>
      </div>
    </div>
  );
}
