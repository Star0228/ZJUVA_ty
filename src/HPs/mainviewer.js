import ReactEcharts from 'echarts-for-react'
import * as echarts from 'echarts';
import origindata from './thankshuguan.json'
import { Height } from '@mui/icons-material';

const tag = {
  label: 'exported'
}


function Stander({ AppElement }) {
  return ({
    label: AppElement['App'],
    data: [{
      x: AppElement['Reviews'],
      y: AppElement['Rating'],
      id: AppElement['App'],
    }],
    markerSize: AppElement.IogInstall,
    color: AppElement.PreparedColor
  }
  )
}


export default function MainViewer({ CategorySelect, SizeSelect, TypeSelect, RankingSelect }) {
  var series = origindata.map(
    (e) => {
      var datawithempty = e.obs.map(
        (ob) => {
          let Category = false;
          let Size = false;
          let Type = false;
          let Ranking = false;
          for (let ic = 0; ic < CategorySelect.length; ic++) {
            if (ob.Category === CategorySelect[ic]) {
              Category = true;
            }
          }
          for (let is = 0; is < SizeSelect.length; is++) {
            if (ob.SizeRange === SizeSelect[is]) {
              Size = true;
            }
          }
          for (let it = 0; it < TypeSelect.length; it++) {
            if (ob.Type === TypeSelect[it]) {
              Type = true;
            }
          }
          for (let ir = 0; ir < RankingSelect.length; ir++) {
            if (ob['Content Rating'] === RankingSelect[ir]) {
              Ranking = true;
            }
          }
          let legal = Category && Size && Type && Ranking;
          if (legal === true) {
            return [ob.Reviews,ob.Rating,ob.LogInstall,ob.App]
          }else{
            return []
          }
        }
      )
      var data = datawithempty.filter(item => item != [])
      var element =
      {
        name: e.name,
        data: data,
        type: 'scatter',
        symbolSize: function (data) {
          return data[2]*5
        },
        emphasis: {
          focus: 'series',
          label: {
            show: true,
            formatter: function (param) {
              return param.data[3];
            },
            position: 'top'
          }
        },
      }
      return (element);
    }
  );
  var option;
  option = {
    title: {
      text: ' ',
      left: '5%',
      top: '3%'
    },
    color:['#1f77b4','#aec7e8','#ff7f0e','#ffbb78','#2ca02c','#98df8a','#d62728','#ff9896','#9467bd','#8c564b','#c49c94','#e377c2','"#f7b6d2','#7f7f7f','#c7c7c7','#bcbd22','#dbdb8d','#17becf','#9edae5'],
    legend: {
      right: '0%',
      top: '0%',//控制图例上下移动，100%保证图内不出现图例
      data: ['GAME', 'COMMUNICATION','TOOLS','PRODUCTIVITY','PHOTOGRAPHY','SOCIAL','FAMILY','PERSONALIZATION','BOOKS_AND_REFERENCE','SHOPPING','VIDEO_PLAYERS','VIDEO_PLAYERS','NEWS_AND_MAGAZINES','ENTERTAINMENT','BUSINESS','HEALTH_AND_FITNESS','MAPS_AND_NAVIGATION','EDUCATION','FINANCE']
    },
    xAxis: {
      type: 'log',
      name: 'Reviews',
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      }
    },
    yAxis: {
      name: 'Rating',
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      },
      scale: true
    },
    series: series
  };
  return (
    <div Height={800}>
      <ReactEcharts option={option} />
    </div>
      
    
  );
}