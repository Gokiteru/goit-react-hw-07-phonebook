// import { configureStore } from "@reduxjs/toolkit";
// import { contactsReducer } from "./contactsReducer";

// export const store = configureStore({
//     reducer: {
//         contactsReducer,
//     },
// })

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { persistReduce } from './contactSlice';

export const store = configureStore({
  reducer: { contacts: persistReduce },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);
