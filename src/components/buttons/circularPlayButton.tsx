import React, {useState} from 'react'
import { Button} from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import { CircularButtonClass } from './styles/circularButton.d'
import { updatePomodoroTime } from '../../stores/pomodoro/pomodoro_reducer';
import { useDispatch } from 'react-redux';

export const CircularPlayButton = () => {
  const [play, setPlay] = useState<Boolean>(false)
  const dispatch = useDispatch()



  function handleClick(){
    setPlay(!play)
    dispatch(updatePomodoroTime('2600'))
  }
  return (
    <Button variant="contained" color="primary"  sx={CircularButtonClass} onClick={ handleClick }> 
      {play? <PlayArrowIcon/>: <PauseIcon/>}
    </Button>
  )
}
