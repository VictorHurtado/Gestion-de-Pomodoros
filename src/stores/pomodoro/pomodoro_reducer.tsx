
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

}
const pomodoroSlicer = createSlice({
    name: "pomodoroSlicer",
    initialState,
    reducers: {
        updatePomodoroTime: (state:Pomodoro, action: PayloadAction<string>) => {
            state.time = action.payload;
        },
    }
})
export const { updatePomodoroTime} = pomodoroSlicer.actions

export default pomodoroSlicer.reducer 