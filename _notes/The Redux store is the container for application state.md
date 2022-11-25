---
---

The [[Redux is a predictable state container for js|Redux]] store is a JavaScript object with a few special functions and abilities:

-  The state inside the Redux store appears as read-only to the rest of the app, since this must be a single source of truth. 
-   The only way to cause an update to the state is to create an **action** object that describes something that happened in the application, and then **dispatch** the action to the store
-   When an action is dispatched, the store runs the root **reducer** function to calculate the new state based on the old state and the action. Reducers are pure functions that take the previous state and an action, and return the next state
-   Finally, the store notifies **subscribers** that the state has been updated so the UI can be updated with the new data.

Any given piece of data should only exist in one location, rather than being duplicated in many places. This might be your Redux store, but could also just be inside a component if the data isn't used globally.

You probably want to use [[Redux Toolkit encapsulates suggested best practices|RTK]] to create your store.

```js
import { configureStore } from '@reduxjs/toolkit'

import todosReducer from './features/todos/todosSlice'
import filtersReducer from './features/filters/filtersSlice'

const store = configureStore({
  reducer: {
    todos: todosReducer,
    filters: filtersReducer
  }
})

export default store
```

This tiny bit of code:
-  combined your imported reducers into the root [[Redux reducers are pure functions to update state|reducer function]], which will handle a root state that looks like `{todos, filters}`
-  created a Redux store using that root reducer
-  automatically added the `thunk` middleware
-  automatically added more middleware to check for common mistakes like accidentally mutating the state
- automatically set up the Redux DevTools Extension connection
Neat!