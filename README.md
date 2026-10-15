# Ahrif Hajjie Cruz: QA portfolio

Live site: **https://ahrif-portfolio.vercel.app**

My portfolio as a QA tester who also builds the front end. The site is a QA
project in itself: it has its own automated test suite, a bug log, and a CI
pipeline that runs the tests on every push.

[![Playwright tests](https://github.com/Ahrif123/ahrif-portfolio/actions/workflows/playwright.yml/badge.svg)](https://github.com/Ahrif123/ahrif-portfolio/actions/workflows/playwright.yml)

## What's inside

- **Homepage:** experience, featured project and contact details
- **[QA samples](https://ahrif-portfolio.vercel.app/qa):** a 21-case test suite (Excel) and bug reports written in the format I used on an HRIS platform
- **[MUSÉA case study](https://ahrif-portfolio.vercel.app/work/musea):** an art community I built and then tested like a client product

## How it's tested

The Playwright suite runs on desktop Chrome and a Pixel 7 on every push:

| ID | Check |
|---|---|
| TC_PORT_001 | Every page loads with the right title and heading |
| TC_PORT_002 | Menu links land on their sections below the sticky header |
| TC_PORT_003 | Mobile menu opens, closes, and closes on Escape |
| TC_PORT_004 | No sideways scrolling on any page |
| TC_PORT_005 | Every internal link and download works |
| TC_PORT_010 | No WCAG 2.1 A/AA accessibility violations (axe) |
| TC_PORT_020 | Every page has a title, description, canonical link and share image |
| TC_PORT_021 | Search engines can read the Person structured data |

Bugs found along the way, including one caught by this suite (BUG-PORT-003,
a missing share image), are logged on the [QA samples page](https://ahrif-portfolio.vercel.app/qa).

## Built with

Astro, TypeScript, plain CSS with design tokens, Playwright, axe-core,
GitHub Actions and Vercel.

## Run it locally

```bash
npm install
npm run dev        # http://localhost:4321
npm test           # build the site and run the Playwright suite
npm run og         # regenerate the share image (needs the dev server running)
```

## Contact

cruzahrifhajjie@gmail.com · +63 969 170 7887 · [LinkedIn](https://www.linkedin.com/in/ahrif-hajjie-cruz-018540334/)