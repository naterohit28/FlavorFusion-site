# Flavor Fusion website

The root `index.html` uses the supplied **Flavor Fusion Refined Standalone Source.html** design from FF website.zip. It is a static site: no install or build step is required.

Run `python -m http.server 4175` and visit http://localhost:4175 to preview locally.

`images/` includes the supplied logo, event and banana-leaf images, plus local copies of the stock photos referenced by the design. Google Fonts remains an external dependency. `refinements.css` and `navigation.js` fix the mobile logo, accessible menu operation and tablet service-card overflow. The export's hidden editor controls and parent-window messaging are removed; its original default layout settings are preserved.

Existing nested pages are retained for previously shared URLs. The new homepage uses the supplied in-page section navigation. Existing Vercel configuration is unchanged.

Validation: tested the homepage at 390, 768, 1024 and 1440 pixel widths in Edge; no horizontal overflow, missing images, missing section destinations, or JavaScript errors. Mobile navigation opens, dismisses with Escape, and supports keyboard focus. `git diff --check` passes.

Deploy through the existing Vercel Git integration by reviewing and merging the redesign pull request into the configured production branch. Verify the Vercel preview before merging. This repository does not require a framework preset or build command.
