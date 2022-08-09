import { Users } from "./users.d";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState:Users = {};

const usersSlicer = createSlice({
    name: 'users',
    initialState,  
    reducers: {
        setUsername: (state:Users, action: PayloadAction<string>) =>{
            state.username = action.payload;

        },
        setPassword: (state:Users,  action: PayloadAction<number>) =>{
            state.idUser = action.payload;

        },
        
        deleteUser: (state:Users, action: PayloadAction<Users>)=>{
    
            delete state.idUser;
            delete state.username;
            delete state.token;
            delete state.refreshToken;
        },
        updateAllProperties: (state:Users, action: PayloadAction<Users>) =>{

            state.username= action.payload.username;
            state.idUser= action.payload.idUser;
       
        }
    }
});
export const { updateAllProperties, deleteUser} = usersSlicer.actions

export default usersSlicer.reducer 