# Prem Tiwari — Resume Website

A clean, responsive personal resume site (dark/light mode) built with plain HTML, CSS, and a tiny bit of JavaScript. No build step required.

🔗 **Live site:** _https://premtiwari14f.github.io/prem-tiwari-resume/_ (available after enabling GitHub Pages)

## Run locally

Just open `index.html` in a browser, or serve it:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Structure

| File | Purpose |
|------|---------|
| `index.html` | Page content and layout |
| `style.css` | Styling, theming, responsive design |
| `script.js` | Dark/light mode toggle + footer year |

## Deploy on GitHub Pages

1. Push this repo to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Select branch **`main`** and folder **`/ (root)`**, then **Save**.
5. Your site goes live at `https://<username>.github.io/prem-tiwari-resume/` in a minute.

## Customize

- Update the LinkedIn / LeetCode / CodeChef links in `index.html` (currently placeholder `#`).
- Edit colors via the CSS variables at the top of `style.css`.
