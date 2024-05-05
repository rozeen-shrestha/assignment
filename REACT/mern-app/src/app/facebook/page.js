'use client'
import React from 'react'
import { AiTwotoneLike } from "react-icons/ai";
import { useState } from 'react';
import { Button } from '@nextui-org/react';



function page() {
    let [color, setColor] = useState("red")
    let [likestatus, setlikestatus] = useState('LIKE')
    const changestate = ()=>{
        if (color == "red"){
            setColor("blue")
            setlikestatus('UNLIKE')
        }
        else if (color == "blue"){
            setColor("red")
            setlikestatus('LIKE')
        }
            
        }
  return (
    <div className='bg-red flex'>
        <Button onClick={()=> changestate()} startContent={<AiTwotoneLike color={color}/>}> {likestatus}
      </Button>
    </div>
  )
}   

export default page
