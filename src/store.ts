import { configureStore } from '@reduxjs/toolkit';
import businessReducer from './features/businessSlice';
import beefReducer from './features/beefSlice';

export const store = configureStore({
  reducer: {
    business: businessReducer,
    beef: beefReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
