
import { configureStore} from '@reduxjs/toolkit'

import pomodoro_reducer from './pomodoro/pomodoro_reducer';

const pomodoroStore = configureStore({
    reducer: pomodoro_reducer,
});

export {
    pomodoroStore
}