import { configureStore } from '@reduxjs/toolkit';
import spotsReducer from '../components/modules/spots/spotsSlice';

export const store = configureStore({
  reducer: {
    spots: spotsReducer,
  },
});
