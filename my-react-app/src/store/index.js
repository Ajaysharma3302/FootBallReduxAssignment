
import { configureStore } from '@reduxjs/toolkit';
import footballReducer from './fottballSlice';

const store = configureStore({
  reducer: {
    football: footballReducer,
  },
});

export default store;
