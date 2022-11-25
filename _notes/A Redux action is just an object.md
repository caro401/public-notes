---
---


A Redux action is an object of special form. They correspond conceptually with an event that can happen  in your application, such as "add a todo" or "increment the counter".

The action object must have a `type` field, which is often used by the reducer to match on. The `type` value is often namespaced like `domain/eventName"`. An action may have additional data associated with it, conventionally stored under the  `payload` field. This can be any kind of data - a number, string, object, whatever makes sense in your application.  An action may also have an `meta` field with extra descriptive data, and an `action.error` field with error information.

```js
// an action
const incrementAction = {
	type: 'counter/incremented'
}

// an action with a payload
const addTodoAction = {
  type: 'todos/todoAdded',
  payload: 'Buy milk'
}
```

Usually you will use an [action creator](https://redux.js.org/tutorials/fundamentals/part-7-standard-patterns#action-creators) function rather than writing the object by hand
```js
// this is the action creator
const todoAdded = text => {
  return {
    type: 'todos/todoAdded',
    payload: text
  }
}


store.dispatch(todoAdded('Buy milk'))

```

Action creators have two primary purposes:

-   They prepare and format the contents of action objects, so you for example spell things consistently across your application
-   They encapsulate any additional work needed whenever we create those actions, such as generating a unique ID

If you always use action creators, you have a consistent approach for creating actions, whether or not there's any extra work that needs to be done. The same goes for thunks as well.


If you use the [[Redux Toolkit encapsulates suggested best practices|RTK]] `createSlice` API, you get actions generated automatically, based on the `name` you provide, and the name of the fields
```js
import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer

console.log(counterSlice.actions.increment())
// >>> {type: "counter/increment"}

```

### Sources

- [Redux fundamentals tutorial](https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow#actions)