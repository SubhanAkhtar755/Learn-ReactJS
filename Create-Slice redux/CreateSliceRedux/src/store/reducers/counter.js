import { createSlice } from '@reduxjs/toolkit'

const INITAIL_STATE = {
    count: 2
    
    };
    
const userSlice = createSlice({
    name: 'userSlice',
    initialState: INITAIL_STATE,
    reducers: {
        increment: (state , action) => {
            state.count = state.count + 1;
            console.log(action.payload.name);
            
        }
    }
 
})

export const { increment } = userSlice.actions;

export default userSlice.reducer;