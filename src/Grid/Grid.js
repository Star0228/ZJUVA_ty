import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Wc from '../Cloud/Cloudimage';
import DataGridDemo from '../Cloud/Reviews';
import AUtocomplete from '../Cloud/Autocomplete';
import { useState } from 'react';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function GridWeb() {
    const [InputValue,setInputvalue] = useState('8 Ball Pool');
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
                    <Item sx={{ bgcolor: '#E0E0E0', height: '45vh' }}>
                        22222
                        <Box >
                            Box
                        </Box>
                    </Item>
                </Grid>
            </Grid>
            <Grid container spacing={0.1} marginY={1}>
                <Grid item xs={6} md={3} marginX={1}>
                    <Item sx={{ bgcolor: '#E0E0E0', height: '40vh' }}>
                        <DataGridDemo />
                    </Item>
                </Grid>
                <Grid item xs={6} md={4} marginX={1}>
                    <Item sx={{ bgcolor: '#E0E0E0', height: '40vh' }}>
                        <div>
                            <AUtocomplete InputValue={InputValue} setInputvalue={setInputvalue}/>
                            <Wc InputValue={InputValue}/>
                        </div>
                        
                    </Item>
                </Grid>
                <Grid item xs={6} md={4.5} >
                    <Item sx={{ bgcolor: '#E0E0E0', height: '40vh' }}>
                        <p >444</p>
                        <Box >
                            Box
                        </Box>
                    </Item>
                </Grid>
            </Grid>

        </Box>
    );
}