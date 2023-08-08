import React from "react";
import ReactDOM from "react-dom";
import WordCloud from "react-d3-cloud";
import data from "../Data/data1.json";
// import "./index.js";

const fontSize = (word) => word.value / 20;
const rotate = (word) => (word.value % 90) - 45;

export default function Wc() {
  const newData = data.map((item) => ({
    text: item.text,
    value: Math.random() * 1000
  }));
  return (
    <WordCloud
    width={900}
      height={500}
      data={newData}
      fontSize={fontSize}
      rotate={rotate}
      padding={2}
    />
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Wc />, rootElement);
