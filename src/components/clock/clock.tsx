import React from 'react'
import { Box } from '@mui/system';
import { Card, Button } from '@mui/material';

//Interfaces

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
  const settings = useSelector((state:any) => state.settings);
 
  const { open, handleOpen, handleClose } = useOpen();
  const { start, stop, reset, ticking, timeLeft, progress } = useCountdown({ minutes:settings.work , onStartCallback: () => console.log("Iniciando"), onStopCallback: () => console.log("Pausado"), onCompleteCallback: () => console.log('Termino') });

  return (
    <React.Fragment>
      <Box>
        <Box sx={BoxHeaderClass}><Button variant="outlined" onClick={() => handleOpen()}>Configuración</Button></Box>

        <Card elevation={2} sx={CardClass}>

          <CircularProgressWithLabel value={-progress} label={`${transformSecondsToFormat(timeLeft)} `} />

        </Card>
        <CircularPlayButton onclick={() => {!ticking ? start():stop() }} />
      </Box>
      <ModalForm open={open} handleClose={handleClose} />
    </React.Fragment>

  )
}
