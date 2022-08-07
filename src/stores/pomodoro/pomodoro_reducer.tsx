
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pomodoro } from "./pomodoro.d";
// Define a type for the slice state

  
const initialState:Pomodoro ={

    completed: false,
    time: '2500',
    typeOf: 1,
    startTime: '',
    finishTime: '',
    idUser: ''
}
const pomodoroSlicer = createSlice({
    name: "pomodoroSlicer",
    initialState,
    reducers: {
        updatePomodoroTime: (state:Pomodoro, action: PayloadAction<string>) => {
            state.time = action.payload;
        }
    }
})
export const { updatePomodoroTime } = pomodoroSlicer.actions

export default pomodoroSlicer.reducer 
// import { Pomodoro } from "./pomodoro.d";

// interface Action{
//     type: string;
//     payload: any;
// }

// export const PomodoroReducer= (state:Pomodoro, {payload,type}:Action)=>{

//     switch(type){
//         case UPDATE_POMODORO_TIME:
//             return {
//                 ...state,
//                 time: payload
//             }
//         default:
//             state
//     }
// }
