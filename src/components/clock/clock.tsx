import React from 'react'
import { Box } from '@mui/system';
import { Card, Button } from '@mui/material';

//Interfaces
import {Pomodoro} from '../../stores/pomodoro/pomodoro.d';

//states
import { useSelector } from 'react-redux';

//custom hook for modal
import { useOpen } from '../../hooks/useOpen';

//custom components
import { ModalForm } from '../modals/modalForm';
import { CircularPlayButton } from '../buttons/circularPlayButton';
import { CircularProgressWithLabel } from './widgets/ciruclarProgress'

//style of components
import { CardClass, BoxHeaderClass } from './classes/clockClasses';

export const Clock = () => {
  const time = useSelector((state:Pomodoro) => state.time);
  const { open, handleClickOpen, handleClose } = useOpen();
  console.log(time);
  return (
    <React.Fragment>
      <Box>
        <Box sx={BoxHeaderClass}><Button variant="outlined" onClick={() => handleClickOpen()}>Configuración</Button></Box>

        <Card elevation={2} sx={CardClass}>
          <CircularProgressWithLabel value={80} label='2500' />
        </Card>
        <CircularPlayButton />
      </Box>
      <ModalForm open={open} handleClose={handleClose} />
    </React.Fragment>

  )
}
