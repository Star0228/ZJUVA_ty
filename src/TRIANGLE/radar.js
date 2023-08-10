import ReactEcharts from 'echarts-for-react'
import * as echarts from 'echarts'
import database from './200ver.json'
import Button1 from './button1';
import Button2 from './button2';
import { useState } from 'react';
import { Box } from '@mui/material';
function Radar(){
    const [app_name1,setApp_name1]=useState('')
    const [app_name2,setApp_name2]=useState('')
    const [app1,setApp1]=useState(database[0])
    const [app2,setApp2]=useState(database[1])
    var option;
    option={
    title:{
        text: '软件实力面板'
    },
    legend: {
        data: [app1.App, app2.App]
    },
    radar: {
        shape: 'circle',
        indicator: [
        { name: '评分', max: 5 },
        { name: '下载数', max: 12 },
        { name: '评论数', max: Math.log10(78158307) },
        ]
    },
    series: [
        {
        name: 'Budget vs spending',
        type: 'radar',
        data: [
            {
            value: [app1.Rating, app1.Installs.length, Math.log10(app1.Reviews+1),],
            name: app1.App
            },
            {
            value: [app2.Rating, app2.Installs.length, Math.log10(app2.Reviews+1),],
            name: app2.App
            }
        ]
        }
    ]
    }
    return (
        <div>
            <Button1 app1={app1} setApp1={setApp1}/>
            <Button2 app2={app2} setApp2={setApp2}/>
            <Box marginTop={2}>
            <ReactEcharts option={option} />
            </Box>
            
        </div>
    )
}

export default Radar;