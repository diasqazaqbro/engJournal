import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { rootReducer } from './rootReducer'

export function makeStore() {
	const store = configureStore({
		reducer: rootReducer,
	})
	setupListeners(store.dispatch)
	return store
}

export const appStore = makeStore()

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof appStore.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof appStore.dispatch
