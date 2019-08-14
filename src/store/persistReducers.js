import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'poc-mobix',
      storage,
      whitelist: ['album', 'track'],
    },
    reducers
  );

  return persistedReducer;
};
