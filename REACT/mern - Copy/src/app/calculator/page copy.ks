"use client";
import React, { useState } from "react";
import { Input, Button } from "@nextui-org/react";



export default function App(props) {
  let [result, setr] = useState("")
  const num = (type)=> {
    setr(result + `${type}`)
  }
  const perc = () => {
    if (result !== "") {
    let matches = result.match(/([-+*/])(\d+)$/);
    let operator = matches[1];
    let number = parseInt(matches[2]);
    let newresult = eval(result.replace(matches[0], ''))
    number = (number/100)*newresult
    setr(newresult +`${operator}`+`${number}`)
    }
  };
  const ac = (type)=> {
    setr(result = "")
  }
  const negation = (type)=> {
    setr(result = eval(result*-1))
  }
  const solve = ()=> {
    const resultWithoutLeadingZeros = result.replace(/^0+/g, '0').replace(/\b0+(?=\d)/g, '');
    setr(eval(resultWithoutLeadingZeros))
  }
  return (


<div className="bg-gradient-to-r from-cyan-500 to-blue-500">
  <div className="flex justify-center  flex-col items-center h-screen">
      <div className="bg-gray-900 p-4 mb-4 rounded-lg shadow-lg w-76">
          <div className="flex gap-2 w-75 mb-2 h-12 items-center">
            <p className="text-white w-full text-2xl text-right">{result}</p>
          </div>
          <div className="flex gap-2 mb-2 items-center">
            <Button onClick={() => ac()} size="lg" className="rounded-full text-3xl" isIconOnly color="default" id="ac">AC</Button>
            <Button onClick={() => negation()} size="lg" className="rounded-full text-2xl" isIconOnly color="default" id="negation">+/-</Button>
            <Button onClick={() => perc()} size="lg" className="rounded-full text-3xl" isIconOnly color="default" id="percentage">%</Button>
            <Button onClick={() => num("/")} size="lg" className="text-4xl rounded-full" isIconOnly color="warning" id="divide">/</Button>
          </div>
          <div className="flex gap-2 mb-2 items-center">
            <Button onClick={() => num("7")} size="lg" className="text-3xl  rounded-full bg-gray-600" isIconOnly color="default" id="7">7</Button>
            <Button onClick={() => num("8")} size="lg" className="text-3xl rounded-full bg-gray-600" isIconOnly color="default" id="8">8</Button>
            <Button onClick={() => num("9")} size="lg" className="text-3xl rounded-full bg-gray-600" isIconOnly color="default" id="9">9</Button>
            <Button onClick={() => num("*")} size="lg" className="text-3xl rounded-full" isIconOnly color="warning" id="multiply">X</Button>
          </div>
          <div className="flex gap-2 mb-2 items-center">
            <Button onClick={() => num("4")} size="lg" className="text-3xl rounded-full bg-gray-600" isIconOnly color="default" id="4">4</Button>
            <Button onClick={() => num("5")} size="lg" className="text-3xl rounded-full bg-gray-600" isIconOnly color="default" id="5">5</Button>
            <Button onClick={() => num("6")} size="lg" className="text-3xl rounded-full bg-gray-600" isIconOnly color="default" id="6">6</Button>
            <Button onClick={() => num("-")}size="lg" className="rounded-full text-3xl" isIconOnly color="warning" id="subtract">-</Button>
          </div>
          <div className="flex gap-2 mb-2 items-center">
            <Button onClick={() => num("1")} size="lg" className="text-3xl rounded-full bg-gray-600" isIconOnly color="default" id="1">1</Button>
            <Button onClick={() => num("2")} size="lg" className="text-3xl rounded-full bg-gray-600" isIconOnly color="default" id="2">2</Button>
            <Button onClick={() => num("3")} size="lg" className="text-3xl rounded-full bg-gray-600" isIconOnly color="default" id="3">3</Button>
            <Button onClick={() => num("+")} size="lg" className="rounded-full text-3xl" isIconOnly color="warning" id="addition">+</Button>
          </div>
          <div className="flex gap-2 items-center">
            <Button onClick={() => num("0")} size="lg" className="text-3xl rounded-full flex-1 p-2 bg-gray-600" isIconOnly color="default" id="0"><p>0</p></Button>
            <Button onClick={() => num(".")} size="lg" className="rounded-full text-3xl bg-gray-600" isIconOnly color="default" id=".">.</Button>
            <Button onClick={() => solve()} size="lg" className="rounded-full text-3xl" isIconOnly color="warning" id="solve">=</Button>
          </div>
      </div>
      
  </div>
</div>
  );
}
