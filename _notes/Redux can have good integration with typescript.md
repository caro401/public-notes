---
id: 20220905114134-redux-typescript
---

It is often useful to know the type of your Redux store. Redux toolkit helps you create the types of your store automatically when you [create the store](https://redux-toolkit.js.org/api/configureStore). [Here's an example](https://github.com/learnwithjason/lets-learn-redux-toolkit/blob/main/src/app/store.ts).  The types automatically update whenever you change the shape of your store.

```js
// src/app/store.ts

import { configureStore } from '@reduxjs/toolkit';
import // your store slices here;

export const store = configureStore({
	reducer: {
		// your reducers here
		// eg counter: counterReducer,
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware()
		  // add your own middlewares here
		  // eg .concat(apiSlice.middleware);
	},
});

// Get RTK to generate your state and dispatch types
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
```

You can use the [`hooks.ts`](https://github.com/learnwithjason/lets-learn-redux-toolkit/blob/main/src/app/hooks.ts) pattern they have recently started [recommending](https://redux-toolkit.js.org/tutorials/typescript#define-typed-hooks) to define some types for your hooks that match your store shape. This uses the types you defined where you made the store. It needs to live in a separate file to avoid circular dependencies.

```js
// src/app/hooks.ts

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from './store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
```

These patterns together give you really nice autocomplete in your editor, telling you exactly what your store contains and what you can do to it without the risk of your types getting out of sync with your actual store code.

### Further Reading

- [RTK typescript tutorial](https://redux-toolkit.js.org/tutorials/typescript)

### Sources

- [Learn with Jason](https://www.youtube.com/watch?v=9zySeP5vH9c)