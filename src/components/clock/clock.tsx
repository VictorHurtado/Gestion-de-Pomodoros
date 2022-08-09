import React, { useEffect } from 'react'
import { Box } from '@mui/system';
import { Card, Button } from '@mui/material';

//Interfaces

//states
import { useDispatch, useSelector } from 'react-redux';
import {setCurrent, setCurrentAutomatically} from '../../stores/settings/settings_reducer'
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
import { SettingsForm } from '../modals/widgets/settingsForm';
import { RestartButton } from '../buttons/restart'
import { ToggleButtonMode } from '../buttons/toggleButton'
import { calculateNextMode } from '../../utils/nextMode';



export const Clock = () => {
  const settings = useSelector((state: any) => state.settings);
  const { open, handleOpen, handleClose } = useOpen();
  const dispatch = useDispatch();
  const { start, stop, reset, ticking, timeLeft, progress } = useCountdown({
    minutes: settings[`${settings.current}`],
    onStartCallback: () => console.log("Iniciando"),
    onStopCallback: () => console.log("Pausado"),
    onCompleteCallback: () => {
      const next= calculateNextMode(settings.current, settings.qtCurrent)
      console.log("Actual :" +settings.current);
      console.log("Siguiente: "+calculateNextMode(settings.current, settings.qtCurrent))
      dispatch(setCurrentAutomatically(settings.current));
      dispatch(setCurrent(next));
     
      reset();
   
    }
  });

  return (
    <React.Fragment>
      <Box>
        <Box sx={BoxHeaderClass}>
          <Box>
            <ToggleButtonMode onclick={() => console.log("nuevo")}></ToggleButtonMode>
            <RestartButton onclick={reset}></RestartButton>
          </Box>

          <Button variant="outlined" onClick={() => handleOpen()}>Configuración</Button>
        </Box>

        <Card elevation={2} sx={CardClass}>

          <CircularProgressWithLabel value={-progress} label={`${transformSecondsToFormat(timeLeft)} `} />

        </Card>
        <CircularPlayButton ticking={ticking} onclick={() => { !ticking ? start() : stop() }} />
      </Box>
      <ModalForm open={open} handleClose={handleClose} title="Configurar Pomodoro" ><SettingsForm onClose={handleClose} /> </ModalForm>

    </React.Fragment>

  )
}
