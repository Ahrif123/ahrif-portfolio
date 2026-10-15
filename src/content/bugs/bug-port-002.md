---
code: BUG-PORT-002
title: Markup circle in the hero only covers "Reply"
project: Portfolio
module: Homepage hero
severity: Low
priority: Medium
status: Verified
found: 2026-10-15
environment: Local dev (localhost:4321), desktop Chrome
steps:
  - Open the homepage at desktop width.
  - Wait for the magenta circle to finish drawing.
expected: 'The circle wraps around both "Reply" and "Delete".'
actual:
  - 'The circle only wraps around "Reply".'
cause: A site-wide rule that stops images overflowing (max-width 100%) also shrank the circle, which is meant to be wider than its container.
fix: Turned that rule off for the circle only, then retested at 360, 768 and 1440px.
---