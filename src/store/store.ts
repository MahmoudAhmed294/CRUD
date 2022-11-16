import { configureStore, ThunkAction ,Action } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { taskApi } from '../api/task';


 const store = configureStore({
  reducer: {
    [taskApi.reducerPath]: taskApi.reducer,

  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(taskApi.middleware),

});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;


export default store;
