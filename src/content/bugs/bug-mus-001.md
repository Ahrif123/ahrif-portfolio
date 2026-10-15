---
code: BUG-MUS-001
title: Comment actions are misaligned (Reply vs. Delete and Report)
project: MUSÉA
module: Artwork page, comments
severity: Low
priority: Medium
status: Open
found: 2026-10-15
environment: Production (musea-eta.vercel.app), desktop Chrome
steps:
  - Log in and open any artwork that has comments.
  - Look at the action row under your own comment (Reply, Delete) and under another user's comment (Reply, Report).
expected: 'Reply and Delete/Report sit on the same line and use the same text style.'
actual:
  - 'Delete and Report sit about 3px lower than Reply.'
  - 'Delete and Report are underlined, but Reply is not.'
cause: The action links use different styles, and the row lines up their boxes instead of their text.
---