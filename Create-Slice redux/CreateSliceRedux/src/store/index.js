import {configureStore} from '@reduxjs/toolkit'
import userSlice from "./reducers/counter"

const store = configureStore({
    reducer:{
   
     counter: userSlice
    }
})

export default store;
