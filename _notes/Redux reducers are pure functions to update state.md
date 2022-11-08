The function signature for a [[Redux is a predictable state container for js|Redux]] reducer is  `(state, action) => newState`. Reducers must follow these rules:

-   They should only calculate the new state value based on the `state` and `action` arguments
-   They are not allowed to modify the existing `state`,  rather they must make _immutable updates_, by copying the existing `state` and making changes to the copied values. Remember you have to do this all the way down a nested object, making a copy at each level.
-   They must not do any asynchronous logic, calculate random values, or cause other side effects

Essentially, they should be pure functions.  If you need do to effectful things, you need [middleware](https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-middleware-to-enable-async-logic), such as that coming from [redux-thunk](https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware)

The logic inside reducer functions typically follows the same series of steps:

```js
const initialState = { value: 0 }

function counterReducer(state = initialState, action) {
  // Check to see if the reducer cares about this action
  if (action.type === 'counter/incremented') {
    // If so, make a copy of `state`
    return {
      ...state,
      // and update the copy with the new value
      value: state.value + 1
    }
  }
  // otherwise return the existing state unchanged
  return state
}
```

A Redux app really only has one reducer function: the "root reducer" function that is attached when you create your store. That one root reducer function is responsible for handling all of the actions that are dispatched, and calculating what the entire new state result should be every time. It will look something like:

```js
import todosReducer from './features/todos/todosSlice'
import filtersReducer from './features/filters/filtersSlice'

export default function rootReducer(state = {}, action) {
  // always return a new object for the root state
  return {
    // the value of `state.todos` is whatever the todos reducer returns
    todos: todosReducer(state.todos, action),
    filters: filtersReducer(state.filters, action)
  }
}

// or equivalent but less obvious

import { combineReducers } from 'redux'
import todosReducer from './features/todos/todosSlice'
import filtersReducer from './features/filters/filtersSlice'

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  todos: todosReducer,
  filters: filtersReducer
})

export default rootReducer
```

Each of these reducers is managing its own part of the global state. The state parameter is different for every reducer, and corresponds to the part of the state it manages.