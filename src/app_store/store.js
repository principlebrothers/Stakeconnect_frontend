import { configureStore } from '@reduxjs/toolkit';
import { stakeConnectApi } from '../components/api/apiSlice';

const store = configureStore({
  reducer: {
    [stakeConnectApi.reducerPath]: stakeConnectApi.reducer,
  },
  middleware: (getDefaultMiddlewear) => getDefaultMiddlewear().concat(stakeConnectApi.middleware),
});

export default store;
