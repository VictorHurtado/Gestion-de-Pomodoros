import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Container, Box } from '@mui/system';
import { Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';

import { useOpen } from './hooks/useOpen';

import { Clock } from './components/clock/clock';
import { ModalForm } from './components/modals/modalForm'
import { LoginForm } from './components/modals/widgets/loginForm';
import { LogoutButton } from './components/buttons/logout';

import { getToken } from './utils/tokenActions'
import './static/css/App.css';
import { updateAllProperties } from './stores/user/user_reducer';
function App() {
    const { open, handleOpen, handleClose } = useOpen();
    const userActive = useSelector((state: any) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        const user = getToken()
        if (Object.keys(user).length === 0) return
        if(Object.keys(userActive).length === 0) dispatch(updateAllProperties( user))
    }, []);

    function isUser() {
  
        return Object.keys(userActive).length === 0
    }
    return (
        <div className="App">
            <Container maxWidth='xl' sx={{
                minHeight: '100vh',
                paddingY: '1rem',
            }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', 'marginX': 'auto', 'marginBottom': '1rem' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row'}} onClick={isUser()?  () =>{ handleOpen()}:()=>{}}>
                        <Avatar> {isUser() ? 'I' : `${userActive.username[0]}`}</Avatar>

                        <Box>
                            <Typography variant="subtitle2" sx={{ marginLeft: '0.5rem' }} align="left" > {isUser() ? "Invitado" : `${userActive.username}`},</Typography>
                            <Typography variant="body1" sx={{ marginLeft: '0.5rem' }} align="left" fontSize={13}>{isUser() ? "Iniciar Sesión" : "Bienvenido"}</Typography>
                        </Box>
                    </Box>
                    <Box> 
                        <LogoutButton onclick={()=>console.log("cerrando")}></LogoutButton>
                    </Box>
                </Box>
                <Clock />
                <ModalForm open={open} handleClose={handleClose} title="Inicio de Sesión" > <LoginForm onClose={handleClose}></LoginForm>    </ModalForm>
            </Container>
            
        </div>

    );
}

export default App;
