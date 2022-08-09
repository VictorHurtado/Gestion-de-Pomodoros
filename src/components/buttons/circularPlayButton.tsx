import React, { useState } from 'react'
import { Button } from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import { CircularButtonClass } from './styles/circularButton.d'



interface Props {
  ticking: boolean;
  onclick: () => void;
}
export const CircularPlayButton = ({ onclick, ticking }: Props) => {

  // const dispatch = useDispatch()



  function handleClick() {

    onclick();
    // dispatch(updatePomodoroTime('2600'))
  }
  return (
    <Button variant="contained" color="primary" sx={CircularButtonClass} onClick={handleClick}>
      {ticking ? <PauseIcon /> : <PlayArrowIcon />}
    </Button>
  )
}
