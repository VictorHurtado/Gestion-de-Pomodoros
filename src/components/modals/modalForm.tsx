import React from 'react'
import {  Dialog, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import {SettingsForm} from './widgets/settingsForm'
interface Props {
    open: boolean,
    handleClose: () => void,
}
const ModalForm: React.FC<Props> = ({ open, handleClose }: Props) => {

    return (
        <Dialog open={open} onClose={handleClose} >
            <DialogTitle>Configurar Pomodoro</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    A continuación diligencia los siguientes campos
                </DialogContentText>
                <SettingsForm onClose={handleClose}/>
            </DialogContent>
            
        </Dialog>
    )
}

export { ModalForm }