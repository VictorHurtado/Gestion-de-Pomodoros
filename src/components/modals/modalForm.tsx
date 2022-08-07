import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material'
import React from 'react'

interface Props {
  open: boolean,
  handleClose: ()=>void,
}
const ModalForm : React.FC<Props> = ({open,handleClose}:Props) => {
   
    return (
        <Dialog open={open} onClose={handleClose} >
            <DialogTitle>Configurar Pomodoro</DialogTitle>
            <DialogContent>
            <DialogContentText>
                A continuación diligencia los siguientes campos
            </DialogContentText>
            <TextField
                autoFocus
                margin="dense"
                id="time"
                label="Pomodoro"
                type="Number"
                fullWidth
                variant="standard"
            />
            <TextField
                autoFocus
                margin="dense"
                id="time"
                label="Pomodoro"
                type="TimeField"
                fullWidth
                variant="standard"
            />
            <TextField
                autoFocus
                margin="dense"
                id="time"
                label="Pomodoro"
                type="Number"
                fullWidth
                variant="standard"
            />
            </DialogContent>
            <DialogActions>
            <Button variant="contained" onClick={handleClose}>Cancel</Button>
            <Button variant="contained"  onClick={handleClose}>Subscribe</Button>
            </DialogActions>
        </Dialog>
    )
}

export {ModalForm}