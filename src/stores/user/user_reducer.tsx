import { Users } from "./users.d";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState:Users = {
    
};

const usersSlicer = createSlice({
    name: 'users',
    initialState,  
    reducers: {
        setUsername: (state:Users, action: PayloadAction<string>) =>{
            state.username = action.payload;

        },
        setPassword: (state:Users,  action: PayloadAction<string>) =>{
            state.password = action.payload;

        },
        setToken: (state:Users, action: PayloadAction<string>)=>{
            state.token = action.payload;
        },
       
        updateAllProperties: (state:Users, action: PayloadAction<Users>) =>{

            state.username= action.payload.username;
            state.password= action.payload.password;
            state.token= action.payload.token;
        }
    }
});
export const { updateAllProperties} = usersSlicer.actions

export default usersSlicer.reducer 