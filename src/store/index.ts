import { configureStore } from '@reduxjs/toolkit';
import { createApi } from '../service/api';
import { redirect } from './middleware/redirect';
import { rootReducer } from './root-reducer';

export const api = createApi();

export const store = configureStore({
  reducer: rootReducer, middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: { extraArgument: api } }).concat(redirect)
});
