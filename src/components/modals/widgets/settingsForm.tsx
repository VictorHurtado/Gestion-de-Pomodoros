import React,{useState,useRef} from 'react'
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';

import { useDispatch } from 'react-redux';

import { AutoForm,AutoField, ErrorField, SubmitField } from 'uniforms-mui';

import { bridge as schema } from '../../../uniforms/settings/settingsForm';

interface Props{
    onClose: ()=>void;
}

export const SettingsForm = ({onClose}:Props) => {
    const [settings,setSettings]= useState({});
    const dispatch = useDispatch();

    
    return (
        <AutoForm  schema={schema} onSubmit={model=>console.log(model)} >
            <h4>IT meeting guest questionnaire</h4>
            <AutoField name="Pomodoro" />
            <ErrorField name="Pomodoro">
                <span>No es un tiempo valido!</span>
            </ErrorField>
            <AutoField name="DescansoCorto" />
            <ErrorField
                name="DescansoCorto"
                errorMessage="No es un tiempo valido!"
            />
            <AutoField name="DescansoLargo" />
            <ErrorField
                name="DescansoLargo"
                errorMessage="No provee un tiempo valido!"
            />
           
           <DialogActions>
                <Button variant="contained" onClick={onClose}>Cancel</Button>
                <SubmitField onClick={()=>console.log(settings)}> Guardar</SubmitField>
            </DialogActions>
        </AutoForm>
    )
}
