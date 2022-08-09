export function calculateNextMode(mode: string, qtCurrent:number): string {
    if(mode == "longBreak" ) return "work";
    if( mode === "shortBreak") return "work"
    if( mode === "work" && qtCurrent<3)  return "shortBreak"
    return "longBreak"
}