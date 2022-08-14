import { Pomodoro} from "../../../stores/pomodoro/pomodoro.d";
import {ErrorsCode, pomodoroResponse, Response} from './pomodoro.errors'



const url = 'http://localhost:8080/';




async function sendPomodoroServer(pomodoro:Pomodoro, token:string) {
    
    return await fetch(url + 'pomodoro/pomodoros/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ token,
        },
        body: JSON.stringify(pomodoro)
    })
        .then(async function (response) {
            var usersData:Response; 
            if(response.status > 400){
                console.log(await response.json())
               return usersData = pomodoroResponse[ErrorsCode.ErrorAuht]
            }  
            usersData= {...pomodoroResponse[ErrorsCode.Success], data: await response.json()} as Response
            return  usersData;
        })
        .catch(function (error) {
            console.log(error);
            return  {...pomodoroResponse[ErrorsCode.Failure], data:error}
        });
}
export {
    sendPomodoroServer
};