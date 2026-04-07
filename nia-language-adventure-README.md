# 🌟 Vidya Upavan

A kid-friendly video tracker for learning **Sanskrit & Marathi** — 57 videos across 4 phases, hosted on GitHub Pages with YouTube embedding.

---

## 🚀 How to Host on GitHub Pages (5 minutes)

1. **Create a GitHub account** at github.com (free)
2. Click **New Repository** → name it `nia-language-adventure`
3. Upload `index.html` to the repository
4. Go to **Settings → Pages → Source → main branch → Save**
5. Your app is live at: `https://YOUR-USERNAME.github.io/nia-language-adventure`

---

## ▶️ How to Add YouTube Videos

Each video card has a small input box at the bottom. You can:

**Option A — In the app (easiest):**
- Paste the full YouTube URL or just the video ID (the 11-character code after `?v=`)
- Click **Save** — it stores in the browser automatically

**Option B — In the code (permanent):**
- Open `index.html` and find the VIDEOS list near the bottom
- Find the video by its ID (e.g. `S1-01`) and add the YouTube ID:
  ```
  {id:"S1-01", ... yt:"YOUR_VIDEO_ID_HERE", ...}
  ```

---

## 📱 Features

- ✅ **57 videos** pre-loaded across 4 phases
- 🎯 **Progress tracking** — mark videos done, see overall % completion
- ▶️ **YouTube embedding** — watch directly in the app
- 🔍 **Search & filter** by track (Sanskrit / Marathi / Bridge)
- ⭐ **Star counter** — one star per completed video
- 🎉 **Confetti** when Nia marks a video done
- 📱 **Mobile friendly** — works on phones and tablets
- 💾 **Auto-saves** progress and YouTube links in the browser

---

## 📂 Video Series Structure

| Phase | Topic | Videos |
|-------|-------|--------|
| Phase 1 | Sounds & Alphabets | 12 |
| Phase 2 | Words & Vocabulary | 18 |
| Phase 3 | Sentences & Grammar | 14 |
| Phase 4 | Stories & Culture | 13 |
| **Total** | | **57** |

Each phase has: 🪷 Sanskrit · 🌿 Marathi · 🌉 Bridge videos

---

## 🛠 Customisation

All video data is in the `VIDEOS` array inside `index.html`.
To add a new video, copy any existing entry and change the fields:
```js
{
  id:    "S1-06",        // unique code
  phase: 1,              // 1, 2, 3, or 4
  track: "S",            // S=Sanskrit, M=Marathi, B=Bridge
  title: "Your title",   // shown on card
  yt:    "VIDEO_ID",     // YouTube video ID (11 chars)
  dev:   "संस्कृत"       // Devanagari word shown on thumbnail
}
```

---

Made with ❤️ for Vidya Upavan · CBSE Class 5
