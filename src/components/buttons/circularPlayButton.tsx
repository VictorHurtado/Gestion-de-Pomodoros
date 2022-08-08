import React, {useState} from 'react'
import { Button} from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import { CircularButtonClass } from './styles/circularButton.d'



interface Props{

  onclick:()=>void;
}
export const CircularPlayButton = ({onclick}:Props)=> {
  const [play, setPlay] = useState<Boolean>(false)
  // const dispatch = useDispatch()



  function handleClick(){
    setPlay(!play)
    onclick();
    // dispatch(updatePomodoroTime('2600'))
  }
  return (
    <Button variant="contained" color="primary"  sx={CircularButtonClass} onClick={ handleClick }> 
      {play? <PauseIcon/>:<PlayArrowIcon/>}
    </Button>
  )
}
