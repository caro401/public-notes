---
id: 20220905120113-redux
alias: "Redux"
---

Redux defines itself as:

> A Predictable State Container for JS Apps - <cite><a href="https://redux.js.org/">The Redux docs site</a></cite>

Redux is both a pattern and library for managing and updating application state, using events called *actions*. It helps you manage global application state, serving as a centralized store, with rules ensuring that the state can only be updated in a predictable fashion.

Redux can have [[Redux can have good integration with typescript|nice Typescript integration]]. It is often used with React via the [react-redux package](https://react-redux.js.org/), but doesn't have to be. [[Not all apps need redux]] though, make sure you really need it before adding it to yours.

Redux has been around a long time (from 2015), and the "best practices" for how to use it, and what the actual code looks like, has evolved quite a lot in recent times. I've only begun working on projects that use redux recently, migrating from an older style implementation to [[Modern Redux prioritises developer productivity|modern redux]] with [Redux Toolkit](https://redux-toolkit.js.org/) (aka [[Redux Toolkit encapsulates suggested best practices|RTK]]).

### Further Reading

- [react community tools and practices](https://react-community-tools-practices-cheatsheet.netlify.app/) from Mark Erikson has a decent section on the options for state management in React.