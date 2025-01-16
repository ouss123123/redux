import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice'; // updated import path

const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});

export default store;