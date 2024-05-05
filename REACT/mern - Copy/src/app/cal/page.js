'use client'
import React,{useState} from 'react'
import {Button} from "@nextui-org/react";
  const page = () => {
    // why created state? 
    // let num= 0 will cahnge but not update in the UI
    let [num, setNum] = useState('')
    //multi-array
    const digits = [
        ['7','8','9'],
        ['4','5','6'],
        ['1','2','3'],
        ['0']
        ]
    
    const symbols = ['+','-','/','*','=','⌫']

    
   
    const generateDigits = ()=> {
      return  digits.map((item)=>{
        return(
            <div className='flex'>
                {  item.map((val)=>{
                return( <div 
                onClick={()=>setNum(num+val)}
                className=' m-2 w-10 h-10 bg-gray-700 text-2xl text-white text-center rounded-lg'>
                    {val}
                    </div>)
            })}
            </div>
        )
         
        })


    }

    const handleSymbolChange = (symbol) => {
  
      switch (symbol) {
          case '=':
              const result = eval(num);
              setNum(result);
              break;
          case '⌫':
              if (num.length > 0) {
                  const newNum = num.slice(0, -1);
                  setNum(newNum);
              }
              break;
          default:
              const lastChar = num.charAt(num.length - 1);
              if (symbols.includes(lastChar)) {
                  setNum(num.slice(0, -1) + symbol);
              } else {
                  setNum(num + symbol);
              }
              break;
      }
  };
  

    return (
      <div className='bg-black'>
      <div className='bg-gray-700 w-14 text-white text-4xl'>
         {num}
      </div>
      <div className='flex'>
      <div className='flex-col'>
      {generateDigits()}
      <button onClick={()=>setNum("")}className='m-2 w-10 h-10 bg-gray-700 text-2xl text-white text-center rounded-lg'>AC</button>
     
    
      </div>
       <div className='flex-col'>
      {symbols.map((item)=>{
        return <div 
        onClick={()=>handleSymbolChange(item)}
        className=' m-2 w-10 h-10 bg-orange-700 text-2xl text-white text-center rounded-lg'>{item}</div>
      })}
      </div>
      </div>
     
      </div>
    )
  }

export default page