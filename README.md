# Bitwise Studio — Local Demo

This folder contains a minimal React demo for Bitwise Studio's conversion UX.

Run locally:

```bash
npm install
npm run dev
```

Open http://localhost:5173

Files:
- `index.html` — app shell
- `main.jsx` — entry
- `app.jsx` — main component
- `converter.jsx` — converter UI and logic
- `style.css` — styles

PWA / Publishing
- `manifest.json` and `service-worker.js` have been added for PWA installability (local mock icons in `icons/`).
- To publish as a PWA: host the site over HTTPS (GitHub Pages, Netlify, Vercel work well). On an HTTPS host the site will be installable to Android and desktop.
- To publish to Play Store: either wrap with Capacitor or publish the hosted PWA via a Trusted Web Activity (TWA).

Quick GitHub Pages publish (static):
1. Commit and push this repo to GitHub.
2. In the repo Settings -> Pages, set source to the `main` branch root (or `gh-pages` branch) and save.
3. Use the provided GitHub Pages URL (HTTPS) — the PWA manifest + service worker will enable "Add to home screen" on supported browsers.

One-step publish scripts
- I added `publish.sh` (Linux/macOS) and `publish.ps1` (Windows PowerShell) to simplify publishing. Example usage:

	- Bash:
		```bash
		./publish.sh git@github.com:YourUser/bitwise-studio.git
		```

	- PowerShell:
		```powershell
		.\publish.ps1 -repo "git@github.com:YourUser/bitwise-studio.git"
		```

Replace the repo URL with your repository (SSH or HTTPS) before running. These scripts initialize the repo, commit all files, create `main` branch and push in one command.

Next steps you can ask me to implement:
- Bitwise playground (toggle bits, AND/OR/XOR)
- IEEE-754 floating-point explorer
- Practice mode and persistence

Analytics
- I added a Plausible snippet to `index.html`. To enable analytics:
	1. Sign up at https://plausible.io (or use another provider like Google Analytics).
	2. Add your site/domain to Plausible and copy the domain name.
	3. Open `index.html` and replace `YOUR_DOMAIN_HERE` in the Plausible script with your domain (example: `mydomain.com`).
	4. Deploy to your HTTPS host (GitHub Pages or your domain). Plausible will start showing data after visits are received.

Optional: If you prefer Google Analytics (GA4), add your measurement ID in the commented GA snippet in `index.html` and follow GA setup steps.
