# AudiLens Website — Deployment Guide

## Files
- `index.html` — Landing page
- `product.html` — Product / model deep dive
- `about.html` — Company mission and approach
- `team.html` — Team and hiring
- `contact.html` — Contact and PoC request form
- `style.css` — Shared styles
- `shared.js` — Nav, footer, and animations
- `CNAME` — Custom domain config for GitHub Pages

---

## Deploy to GitHub Pages (15 minutes)

### Step 1 — Create a GitHub repo
1. Go to github.com → New repository
2. Name it `audiolens-site` (or anything)
3. Set to **Public** (required for free GitHub Pages)
4. Do NOT initialize with README

### Step 2 — Push these files
```bash
cd /path/to/audiolens-site
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/audiolens-site.git
git push -u origin main
```

### Step 3 — Enable GitHub Pages
1. Go to your repo → Settings → Pages
2. Source: **Deploy from a branch**
3. Branch: `main` / `/ (root)`
4. Save — site will be live at `https://YOUR_USERNAME.github.io/audiolens-site` within 60 seconds

### Step 4 — Connect your custom domain (audi-lens.com)
1. Go to your domain registrar (GoDaddy, Namecheap, etc.)
2. Add these DNS records:

| Type | Host | Value |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | YOUR_USERNAME.github.io |

3. Back in GitHub Pages settings → Custom domain → enter `audi-lens.com` → Save
4. Check "Enforce HTTPS" once it activates (15–60 minutes)

The CNAME file in this repo handles the GitHub side automatically.

---

## Updating the site

Edit any HTML file, then:
```bash
git add .
git commit -m "Update [page name]"
git push
```
Changes are live in ~30 seconds.

---

## Contact form note
The contact form currently shows a success message on submit but does NOT send emails (GitHub Pages is static — no server). To receive actual form submissions, sign up for a free [Formspree](https://formspree.io) account and replace the form action with your Formspree endpoint. Takes 5 minutes.
