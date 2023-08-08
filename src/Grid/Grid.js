import * as React from 'react';
import { createTheme, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Card, Container } from '@mui/material';
import FixedSizeGrid from '../Cloud/Cloudimage';
import Wc from '../Cloud/Cloudimage';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    // ...theme.typography.body1,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function GridWeb() {
    return (
        <Box
            marginTop={2}
            sx={{ flexGrow: 1 }}>
            <Grid container spacing={0.1} >
                <Grid item xs={6} md={3.5} marginX={2}>
                    <Item sx={{ bgcolor: '#E0E0E0', height: '45vh' }}>
                        11111</Item>
                </Grid>
                <Grid item xs={6} md={8} >
                    <Item  sx={{ bgcolor: '#E0E0E0', height: '45vh' }}>
                        22222                       
                         <Box >
                             Box
                         </Box>
                    </Item>
                </Grid>
            </Grid>
            <Grid container spacing={0.1} marginY={1}>
                <Grid item xs={6} md={7} marginX={2}>
                    <Item sx={{ bgcolor: '#E0E0E0', height: '40vh' }}>
                    <Box margin={2}>
                        <Wc/>
                    </Box>
                    
                    </Item>
                </Grid>
                <Grid item xs={6} md={4.5} >
                    <Item  sx={{ bgcolor: '#E0E0E0', height: '40vh' }}>
                        4444                       
                         <Box >
                             Box
                         </Box>
                    </Item>
                </Grid>
            </Grid>
            
        </Box>
    );
}