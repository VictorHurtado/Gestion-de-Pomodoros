import * as React from 'react';
import CircularProgress, {
    CircularProgressProps,
} from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


export function CircularProgressWithLabel(
    props: CircularProgressProps & { value: number, label:string },
) {
    return (
        <Box sx={{ position: 'relative', display: 'inline-flex'}}>
            <CircularProgress variant="determinate" {...props} size="20rem" />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography variant='h1' align="center" color="primary">
                    {`${Math.round(props.value)}`}
                </Typography>
                
            </Box>
        </Box>
    );
}

