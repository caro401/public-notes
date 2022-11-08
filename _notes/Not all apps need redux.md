---
id: 20220823030041-dont-need-redux
---

You can feel a bit of resistance to [[Redux is a predictable state container for js|Redux]] when your application doesn't actually need it, or it isn't a good fit for your application. Redux may be useful when:

-   You have large amounts of application state that are needed in many places in the app
-   The app state is updated frequently
-   The logic to update that state may be complex
-   The app has lots of code and might be worked on by many people
-   You need to see how that state is being updated over time

But it is not the only tool that can address some of these things. You should know what the tradeoffs are for the various tools you could adopt into you project before you choose one.

### Further Reading

-   [When (and when not) to reach for Redux](https://changelog.com/posts/when-and-when-not-to-reach-for-redux)
-   [The Tao of Redux, Part 1 - Implementation and Intent](https://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-1/)
-   [You Might Not Need Redux](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367) by Dan Abramov who created Redux!
- [react community tools and practices](https://react-community-tools-practices-cheatsheet.netlify.app/) from Mark Erikson has a decent section on the options for state management in React.

### Sources

- [Redux docs](https://redux.js.org/faq/general#when-should-i-use-redux) (!)
- [Learn with Jason](https://www.youtube.com/watch?v=9zySeP5vH9c)