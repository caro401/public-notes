---
id: 20220818051909-priority-hints 
title: "Priority hints tell the browser what to load first"
---

You can use "Priority hints" to help [some browsers](https://caniuse.com/mdn-html_elements_link_fetchpriority) know what is important for your user to see first, or is less important. This is currently still a draft, and only implemented in Chromium-based browsers so far. 

>  Tip: Add `fetchpriority="high"` to your [Largest Contentful Paint](https://web.dev/lcp) (LCP) image to get it to load sooner.  - [This article by Addy Osmani](https://addyosmani.com/blog/fetch-priority/)

Browsers have heuristics, but they don't apply early enough in the rendering process to help with your LCP metric

### Further reading

-   Learn more in our [Priority Hints Deep-dive on web.dev](https://web.dev/priority-hints/)
-   Check out [Etsy's Priority Hints case-study](https://www.etsy.com/codeascraft/priority-hints-what-your-browser-doesnt-know-yet)
-   Calibre's [Priority Hints guidance](https://calibreapp.com/blog/priority-hints)
-   Specification: [https://wicg.github.io/priority-hints/](https://wicg.github.io/priority-hints/)

### Sources

- [This article by Addy Osmani](https://addyosmani.com/blog/fetch-priority/), found via the CSS Weekly newslette