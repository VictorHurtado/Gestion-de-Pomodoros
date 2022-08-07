
import { Container,Box } from '@mui/system';
import { Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { Clock } from './components/clock/clock';

import './static/css/App.css';

function App() {

    return (
        <div className="App">
            <Container maxWidth='xl' sx={{
                minHeight: '100vh',
                paddingY: '1rem',
                
            }}>
                <Box sx={{display: 'flex',flexDirection: 'row',  'marginX':'auto', 'marginBottom':'1rem'}}>
                    <Avatar>H</Avatar>
                    
                    <Box>
                        <Typography variant="subtitle2" sx={{marginLeft:'0.5rem'}} align="left" >Invitado</Typography>
                        <Typography variant="body1" sx={{marginLeft:'0.5rem'}} align="left" fontSize={13}>Inicia sesión</Typography>
                    </Box>
                    </Box>
                <Clock></Clock>
            </Container>
        </div>

    );
}

export default App;
