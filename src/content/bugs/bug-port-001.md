---
code: BUG-PORT-001
title: Missing space before the footer link
project: Portfolio
module: Footer
severity: Low
priority: Low
status: Verified
found: 2026-10-15
environment: Local dev (localhost:4321), desktop Chrome
steps:
  - Open any page.
  - Scroll to the bottom of the footer.
expected: 'The line reads "Built with Astro. Tested with Playwright on every push."'
actual:
  - 'The words run together: "Built with Astro.Tested with Playwright…"'
cause: Astro removes the space between text and a link when they sit on separate lines in the code.
fix: Added an explicit space before the link, then retested on desktop and mobile.
---