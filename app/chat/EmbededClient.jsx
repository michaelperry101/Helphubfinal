"use client";
import Script from "next/script";
import { useEffect } from "react";

/**
 * Renders the ElevenLabs convai web component INSIDE the page content.
 * No external floating bubble; it sits where we place it.
 */
export default function EmbedClient() {
  // Ensure custom element upgrades after script loads (defensive)
  useEffect(() => {
    // noop, but reserved if you later need to tweak attributes dynamically
  }, []);

  return (
    <>
      <Script
        src="https://unpkg.com/@elevenlabs/convai-widget-embed"
        strategy="afterInteractive"
      />
      {/* Your agent id embedded directly */}
      <elevenlabs-convai
        agent-id="agent_3001k3vqn59yfb6tmb5mjwwd17jc"
        style={{
          display: "block",
          width: "100%",
          maxWidth: "900px",
          margin: "0 auto",
          height: "70vh",
          border: "1px solid #1f2937",
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: "0 10px 30px rgba(0,0,0,.45)"
        }}
      ></elevenlabs-convai>
    </>
  );
}
