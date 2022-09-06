---
id: 20220905121855-RTK
---

[Redux Toolkit](https://redux-toolkit.js.org) (RTK) is the official recommended approach for writing Redux logic, since it was introduced some 3 years ago. It builds in the current suggested best practices, simplifies most Redux tasks, prevents common mistakes, and makes it easier to write Redux applications. RTK wraps Redux core to include utilities that help simplify many common use cases.

There's a bunch of great things in RTK, summarised in <cite><a href="https://redux-toolkit.js.org/introduction/getting-started#whats-included">the RTK docs</a></cite> as:

-   [`configureStore()`](https://redux-toolkit.js.org/api/configureStore): wraps `createStore` to provide simplified configuration options and good defaults. It can automatically combine your slice reducers, add whatever Redux middleware you supply, and makes it much easier to set up the [Redux DevTools](https://github.com/reduxjs/redux-devtools) extension.
-   [`createReducer()`](https://redux-toolkit.js.org/api/createReducer): lets you supply a lookup table of action types to case reducer functions, rather than writing switch statements. In addition, it automatically uses the [`immer` library](https://github.com/immerjs/immer) to let you write simpler immutable updates with code that looks mutative, like `state.todos[3].completed = true`.
-   [`createAction()`](https://redux-toolkit.js.org/api/createAction): generates an action creator function for the given action type string. 
-   [`createSlice()`](https://redux-toolkit.js.org/api/createSlice): accepts an object of reducer functions, a slice name, and an initial state value, and automatically generates a slice reducer with corresponding action creators and action types.
-   [`createAsyncThunk`](https://redux-toolkit.js.org/api/createAsyncThunk): accepts an action type string and a function that returns a promise, and generates a thunk that dispatches `pending/fulfilled/rejected` action types based on that promise. Thunks as a pattern for writing async logic has always been a thing, for doing something like show a loading state while waiting on an external request then dispatch success or failure. 
-   [`createEntityAdapter`](https://redux-toolkit.js.org/api/createEntityAdapter): generates a set of reusable reducers and selectors to manage normalized data in the store
-   The [`createSelector` utility](https://redux-toolkit.js.org/api/createSelector) from the [Reselect](https://github.com/reduxjs/reselect) library, re-exported for ease of use.

You can optionally add [RTK query](https://redux-toolkit.js.org/rtk-query/overview), which helps with data fetching and caching from external APIs. Like Redux, it works with whatever UI layer you are using, but there's optionally extra help for React generating hooks. The pattern is to create one [API slice](https://redux-toolkit.js.org/rtk-query/overview#create-an-api-slice) for the base API you will be hitting, and some extra things per endpoint you talk to.

### Further Reading

