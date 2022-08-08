import {Settings} from './settings.d'
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState:Settings = {
    work:25,
    shortBreak:5,
    longBreak:25
};

const settingsSlicer = createSlice({
    name: 'settings',
    initialState,  
    reducers: {
        setWork: (state:Settings, action: PayloadAction<number>) =>{
            state.work = action.payload;

        },
        setShortBreak: (state:Settings,  action: PayloadAction<number>) =>{
            state.shortBreak = action.payload;

        },
        setLongBreak: (state:Settings,  action: PayloadAction<number>) =>{
            state.longBreak = action.payload;

        },
        updateAllSettings: (state:Settings, action: PayloadAction<Settings>) =>{

            state.work= action.payload.work;
            state.shortBreak= action.payload.shortBreak;
            state.longBreak= action.payload.longBreak;
        }
    }
});
export const { updateAllSettings} = settingsSlicer.actions

export default settingsSlicer.reducer 