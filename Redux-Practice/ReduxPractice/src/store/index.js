import {configureStore} from '@reduxjs/toolkit'
import userReducer from './reducers/user'


const store = configureStore({
    reducer:{
        user1: userReducer

    }
})

export default store;
