---
code: BUG-PORT-003
title: Share image is missing, so link previews show a blank box
project: Portfolio
module: SEO and social sharing
severity: Medium
priority: High
status: Verified
found: 2026-10-15
environment: Production build (localhost:4322), desktop Chrome and Pixel 7, found by automated test TC_PORT_020
steps:
  - Run the Playwright suite with npm test.
  - Check TC_PORT_020 on any page.
expected: 'Every page points to a share image that loads (status 200), so LinkedIn and Messenger previews show a picture.'
actual:
  - 'The og:image tag points to /og/default.png, which returns 404 on all 3 pages.'
  - 'The general link checker (TC_PORT_005) did not catch it, because the image is in the page metadata, not a visible link.'
cause: The SEO component referenced a share image that was never created.
fix: Added an /og page in the site's own design and a Playwright script that screenshots it to public/og/default.png. Reran the full suite and all tests pass.
---