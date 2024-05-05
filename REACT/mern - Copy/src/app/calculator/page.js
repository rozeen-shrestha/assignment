"use client";
import React, { useState } from "react";
import { Input, Button } from "@nextui-org/react";

export default function App(props) {
  const buttons =[
    ["AC", "+/-","%","/"],
    ["7","8","9","X"],
    ["4","5","6","-"],
    ["1","2","3","+"],
    ["0",".","🔙","="],
  ]
  let [result, setr] = useState("0");
  let [operator, setOperator] = useState(null);
  let [prevValue, setPrevValue] = useState(null);
  const handleNumberClick = (value) => {
    if (result === "0") {
      setr(value);
    } else {
      setr(result + value);
    }
  };
  const HandleButtons=()=>{
    buttons.map((arr)=>{
    <div className="flex gap-2 mb-2 items-center">  e  </div>
     arr.forEach(element => {
      
     });

    })
  }

  const handleOperatorClick = (operator) => {
    setOperator(operator);
    setPrevValue(result);
    setr("0");
  };

return (
<div className="bg-gradient-to-r from-cyan-500 to-blue-500">
  <div className="flex justify-center  flex-col items-center h-screen">
      <div className="bg-gray-900 p-4 mb-4 rounded-lg shadow-lg w-76">
          <div className="flex gap-2 w-75 mb-2 h-12 items-center">
            <p className="text-white w-full text-2xl text-right">{result}</p>
          </div>
          {HandleButtons()}
      </div>
      
  </div>
</div>
  );
}
