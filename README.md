# 12P2 Memory Pinboard

Static class presentation site with 25 polaroid profiles, four-digit memory challenges, wish animations and a no-repeat gift wheel.

## Local development

```powershell
npm run dev
```

## Local media editor

Run the editor on the same computer that has the GitHub credentials for this repository:

```bash
npm run editor
```

Open `http://127.0.0.1:4190/`. The editor can upload a photo for each member, upload one background audio file, open a live preview, then build, commit, rebase and push to `main`. It binds only to localhost and uses a random per-process token for write and deploy requests. Keep the terminal window open while using it.

Browsers may block audible autoplay until the first tap or key press. The public site attempts autoplay on load and retries on the first interaction.

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
