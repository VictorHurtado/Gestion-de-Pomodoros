
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pomodoro } from "./pomodoro.d";
// Define a type for the slice state

  
const initialState:Pomodoro ={

    completed: false,
    time: '2500',
    typeOf: 1,
    startTime: '',
    finishTime: '',
    idUser: '',
    settings:{
        work:'25',
        shortBreak:'5',
        LongBreak:'25'
    }
}
const pomodoroSlicer = createSlice({
    name: "pomodoroSlicer",
    initialState,
    reducers: {
        updatePomodoroTime: (state:Pomodoro, action: PayloadAction<string>) => {
            state.time = action.payload;
        },
        updatePomodoroSettings: (state:Pomodoro, action: PayloadAction<Object>)=>{
            state.settings = action.payload;

        }
    }
})
export const { updatePomodoroTime } = pomodoroSlicer.actions

export default pomodoroSlicer.reducer 