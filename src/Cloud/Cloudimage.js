import React from "react";
import ReactDOM from "react-dom";
import WordCloud from "react-d3-cloud";
import  '@fontsource/big-shoulders-stencil-text/900.css';
import data from '../Data/cloud2.json';

const fontSize = (word) => word.value-1 ;
const rotate = (word) => (Math.random() * 1000 % 90) - 45;

export default function Wc({InputValue}) {
  if(InputValue === "8 Ball Pool"){
    var data1=data['8 Ball Pool'];
  var newData = data1.map((item) => ({
   text:item.text,
  value: item.value   
 })); 
  }else if(InputValue === "Adobe Acrobat Reader"){
    var data1=data['Adobe Acrobat Reader'];
    var newData = data1.map((item) => ({
     text:item.text,
    value: item.value   
   })); 
  }else if(InputValue==="Amazon Shopping"){
    var data1=data["Amazon Shopping"];
    var newData = data1.map((item) => ({
     text:item.text,
    value: item.value   
   })); 
  }else if(InputValue==="Angry Birds 2"){
    var data1=data["Angry Birds 2"];
    var newData = data1.map((item) => ({
     text:item.text,
    value: item.value   
   })); 
  }else if(InputValue==="Asphalt 8  Airborne"){
    var data1=data["Asphalt 8  Airborne"];
    var newData = data1.map((item) => ({
     text:item.text,
    value: item.value   
   })); 
  }else if(InputValue==="Dream League Soccer 2018"){
    var data1=data["Dream League Soccer 2018"];
    var newData = data1.map((item) => ({
     text:item.text,
    value: item.value   
   })); 
  }else if(InputValue==="Facebook"){
    var data1=data["Facebook"];
    var newData = data1.map((item) => ({
     text:item.text,
    value: item.value   
   })); 
  }else if(InputValue==="Google"){
    var data1=data[ "Google"];
    var newData = data1.map((item) => ({
     text:item.text,
    value: item.value   
   })); 
  }else if(InputValue==="Firefox Browser fast & private"){
    var data1=data["Firefox Browser fast & private"];
    var newData = data1.map((item) => ({
     text:item.text,
    value: item.value   
   })); 
  }else {
    var data1=data["Gmail"];
    var newData = data1.map((item) => ({
     text:item.text,
    value: item.value   
   })); 
  }
  return (
    <div>
      <WordCloud
    width={150}
      height={60}
      data={newData}
      fontSize={fontSize}
      rotate={rotate}
      padding={0.5}
    />
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<Wc />, rootElement);
