import { configureStore} from '@reduxjs/toolkit';

import gameSlice from './game-slice';
import authSlice from './auth-slice';

const store = configureStore({
  reducer: { game: gameSlice.reducer, auth: authSlice.reducer }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
