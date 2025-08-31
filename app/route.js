import { NextResponse } from "next/server";

export async function POST(req){
  try{
    const { messages=[] } = await req.json();
    // This endpoint is a placeholder now that ElevenLabs voice chat is primary.
    // It returns a friendly message, so the site remains functional.
    const last = messages[messages.length-1]?.content || "";
    const reply = `(Note) Voice chat is enabled. You said: "${last}". To use voice, open the Chat page.`;
    return NextResponse.json({ reply });
  }catch(err){
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
}
