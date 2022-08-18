---
id: 20220818051909-priority-hints 
title: "Priority hints tell the browser what to load first"
---

You can use "Priority hints" to help [some browsers](https://caniuse.com/mdn-html_elements_link_fetchpriority) know what is important for your user to see first, or is less important. 

For eaxmple, you could add `fetchpriority="high"` to your hero image, or something else large on your main page, to help with your Largest Contentful Paint or [LCP](https://web.dev/lcp/) metric, which is relevant for [Core Web Vitals](https://web.dev/vitals/). This gives the user the impression that your page is loading fast.

Browsers have heuristics to decide what to load first, but they don't apply early enough in the rendering process to help with LCP.

### Further reading

-  [Priority Hints Deep-dive](https://web.dev/priority-hints/) from web.dev
-  Etsy did a detailed  [Priority Hints case-study](https://www.etsy.com/codeascraft/priority-hints-what-your-browser-doesnt-know-yet)
-   [The specification for priority hints](https://wicg.github.io/priority-hints/)
-   [CanIUse](https://caniuse.com/mdn-html_elements_link_fetchpriority) priority hints everywhere yet?

### Sources

- [This article by Addy Osmani](https://addyosmani.com/blog/fetch-priority/), found via the [CSS Weekly](https://css-weekly.com/issue-517/) newsletter