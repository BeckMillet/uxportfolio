import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../redux-example/counter/counterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
  
});
