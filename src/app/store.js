import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    wright: counterReducer,
    wrong:counterReducer,
    time:counterReducer,
    coret:counterReducer,
    ansrd:counterReducer,
    totlscore:counterReducer,
  },
});
