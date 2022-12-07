import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'user',
    initialState:{uid:null, uname:null},
    reducers:{
        setUser:function (state, action){
            state.uid = action.payload.uid;
            state.uname = action.payload.uname;
        },
        logout:function (state) {
            state.uid= null;
            state.uname= null;
        }
    }
})

export const {setUser, logout} = userSlice.actions;
export default userSlice.reducer;