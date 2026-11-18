# 12P2 Memory Pinboard

Static class presentation site with 25 polaroid profiles, four-digit memory challenges, wish animations and a no-repeat gift wheel.

## Local development

```powershell
npm run dev
```

Open `http://127.0.0.1:5188`.

## Production build

```powershell
npm run build
npm run preview
```

Vercel uses `npm run build` and publishes `dist`.

## Current interactive sample

- Member: Lê Quang Minh
- Challenge and content live in `app.js` while the content editor is still being designed.
- Gift assignments are stored as a persistent member-to-number map in browser `localStorage`. Each member can draw once, and assigned numbers disappear from the remaining pool. The official presentation wheel must run on one designated device.
