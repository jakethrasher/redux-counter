import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
    reducer:{
        //creates state.counter on state object
        counter: counterReducer
    }
});
