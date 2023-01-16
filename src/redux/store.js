import {configureStore} from '@reduxjs/toolkit';
import adminSlice from './modules/adminSlice';

export const store = configureStore({
  reducer: {
    admin: adminSlice,
  },
});
