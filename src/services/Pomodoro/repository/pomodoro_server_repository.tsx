import { Pomodoro } from "../../../stores/pomodoro/pomodoro.d";
import {sendPomodoroServer} from '../api/pomodoro_server_api';

async function savePomodoro(pomodoro:Pomodoro,token:string){

    const response=  await sendPomodoroServer(pomodoro, token);
  
    return response;

}
export {savePomodoro}