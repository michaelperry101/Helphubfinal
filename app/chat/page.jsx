"use client";
import Script from "next/script";
import { useEffect, useState } from "react";

export default function ChatPage(){
  const [ts, setTs] = useState("");
  useEffect(()=>{ setTs(String(Date.now())); },[]);

  return (
    <div className="page eleven-wrap">
      <div className="card eleven-card">
        {/* Embedded ElevenLabs ConvAI */}
        <elevenlabs-convai agent-id="agent_3001k3vqn59yfb6tmb5mjwwd17jc"></elevenlabs-convai>
        <Script src={"https://unpkg.com/@elevenlabs/convai-widget-embed?ts="+ts} strategy="afterInteractive" />
        <div className="eleven-note">Voice chat loads above. If you don't see it, ensure third‑party scripts aren’t blocked.</div>
      </div>
    </div>
  );
}
