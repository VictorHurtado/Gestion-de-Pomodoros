import React, { useState } from 'react'
import { Box } from '@mui/system';
import { Card, Button } from '@mui/material';

//Interfaces
import { Pomodoro } from '../../stores/pomodoro/pomodoro.d';

//states
import { useSelector } from 'react-redux';

//custom hooks
import { useOpen } from '../../hooks/useOpen';
import { useCountdown } from '../../hooks/useCountdown';
//custom components
import { ModalForm } from '../modals/modalForm';
import { CircularPlayButton } from '../buttons/circularPlayButton';
import { CircularProgressWithLabel } from './widgets/ciruclarProgress'

//style and utils
import { CardClass, BoxHeaderClass } from './classes/clockClasses';
import { transformSecondsToFormat } from '../../utils/getTime';

export const Clock = () => {
  const time = useSelector((state: Pomodoro) => state.time);
  const { open, handleOpen, handleClose } = useOpen();
  const { start, stop, reset, ticking, timeLeft, progress } = useCountdown({ minutes: 1, onStartCallback: () => console.log("Iniciando"), onStopCallback: () => console.log("Pausado"), onCompleteCallback: () => console.log('Termino') });
  console.log('timeLeft: ' + timeLeft);

  return (
    <React.Fragment>
      <Box>
        <Box sx={BoxHeaderClass}><Button variant="outlined" onClick={() => handleOpen()}>Configuración</Button></Box>

        <Card elevation={2} sx={CardClass}>

          <CircularProgressWithLabel value={-progress} label={`${transformSecondsToFormat(timeLeft)} `} />
          {/* {days + hours + minutes + seconds <= 0 ? <h1>Exipiro</h1> : } */}





        </Card>
        <CircularPlayButton onclick={() => {!ticking ? start():stop() }} />
      </Box>
      <ModalForm open={open} handleClose={handleClose} />
    </React.Fragment>

  )
}
