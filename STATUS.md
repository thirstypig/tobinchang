# STATUS — tobinchang

**Last updated:** 2026-11-11

## One-line description
Placeholder personal site for Tobin Chang, plus an operator's manual showing him how to build and run the site himself.

## Scope / positioning
- Front page is an explicit placeholder: "The real site isn't built yet... it's Tobin's to build."
- Front page carries an ideas panel (photos, reviews, a blog, projects, a "now" page, etc.), links to two other family sites, and a signed note about handing over the domain.
- `/howto` is a beginner's operator's manual: GitHub account, Terminal, AI helper, the everyday edit/push loop, new pages, a prompt pack, troubleshooting, glossary.
- Light/dark theme toggle on both pages.

## Stack & hosting
- Static HTML/CSS with a little JS (`assets/theme.js`, `assets/manual.css`); no build step, no package manifest.
- GitHub Pages (`CNAME` = tobinchang.com, `.nojekyll`).
- Local dev port 3130 (workspace port registry).
- No CI workflows.

## URLs
- Live: https://tobinchang.com
- Manual: https://tobinchang.com/howto
- Repo: github.com/thirstypig/tobinchang

## Shipped (last 60 days)
- Nothing in the window. Last commit: 2026-07-31.
- For context, everything landed on 2026-07-31: placeholder front page and manual, theme toggle, ideas panel, links to the family sites, the domain-handover note, and a link to jameschang.co/now.

## In progress
- None recorded.

## Open bugs / known issues
- None recorded.
- Note: `README.md` and `MASTER-PORTS.md` on disk are gitignored workspace copies, so the repo has no README of its own.
- `docs/superpowers/specs/` exists but is empty.

## Next phases (in order)
- None recorded in the repo. From the site copy:
  1. Tobin builds the real home page (the placeholder CSS block is marked "Delete this block when the real home page lands").
  2. Transfer the domain and hosting to Tobin when he's ready (no date set).

## Decisions changed recently
- None recorded.
