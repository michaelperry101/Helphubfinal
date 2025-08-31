# HelpHub247 — Final Build

A sleek Next.js app with:
- Centered logo header + animated hamburger
- Sidebar with sections and icons
- Home page with sticky “Chat with Carys” bubble
- Chat page embedding the ElevenLabs ConvAI widget
- Settings (theme, voice prefs, mute, data controls)
- About, Reviews, Terms, Privacy, Subscribe, Login placeholders
- PWA manifest + icons + service worker

## Quick start
```bash
npm i
npm run dev
# set ELEVENLABS agent id inside app/chat/page.jsx if needed
```

### Replace logos
Place your real files in `public/`:
- `public/logo-small.png` (header)
- `public/logo-mark.svg` (homepage center logo)
Keep the filenames or update imports in `components/Header.jsx` and `app/page.js`.
