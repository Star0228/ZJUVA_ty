import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Wc from '../Cloud/Cloudimage';
import DataGridDemo from '../Cloud/Reviews';
import AUtocomplete from '../Cloud/Autocomplete';
import { useState } from 'react';
import MainViewer from '../HPs/mainviewer';
import Controller from '../HPs/controller';
import Radar from '../TRIANGLE/radar'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function GridWeb() {
    const [APPItem,setAPPItem] = useState('8 Ball Pool');
    const [CategorySelect, setCategorySelect] = useState([]);
    const [SizeSelect, setSizeSelect] = useState([]);
    const [TypeSelect, setTypeSelect] = useState([]);
    const [RankingSelect, setRankingSelect] = useState([]);
    return (
        <Box
            marginTop={2}
            sx={{ flexGrow: 1 }}>
            <Grid container spacing={0.1} >
                <Grid item xs={6} md={4.5} marginX={2}>
                    <Item sx={{ bgcolor: '#E0E0E0', height: '45vh' }}>
                    <Controller  CategorySelect={CategorySelect} setCategorySelect={setCategorySelect} SizeSelect={SizeSelect} setSizeSelect={setSizeSelect} TypeSelect={TypeSelect} setTypeSelect={setTypeSelect} RankingSelect={RankingSelect} setRankingSelect={setRankingSelect}/>
                        </Item>
                </Grid>
                <Grid item xs={6} md={7} >
                    <Item sx={{ bgcolor: '#E0E0E0', height: '45vh' }}>
                        <Box marginTop={7} height={400}>
                        <MainViewer CategorySelect={CategorySelect} SizeSelect={SizeSelect} TypeSelect={TypeSelect} RankingSelect={RankingSelect}/>
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
                            <AUtocomplete Item={APPItem} setItem={setAPPItem}/>
                            <Wc AppItem={APPItem}/>
                        </div>  
                    </Item>
                </Grid>
                <Grid item xs={6} md={4.5} >
                    <Item sx={{ bgcolor: '#E0E0E0', height: '40vh' }}>
                        <Box >
                        <Radar />
                        </Box>
                    </Item>
                </Grid>
            </Grid>

        </Box>
    );
}