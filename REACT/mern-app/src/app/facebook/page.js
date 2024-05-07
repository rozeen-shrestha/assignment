'use client';
import React from 'react'
import { useState } from 'react'
import { AiOutlineLike } from "react-icons/ai";
import {Popover, PopoverTrigger, PopoverContent,Typography, Button} from "@nextui-org/react";
import { FcLike } from "react-icons/fc";
import { FaRegLaughBeam } from "react-icons/fa";
import { TbMoodCry } from "react-icons/tb";


const page = () => {
  let [color, setColor] = useState('black')
  let [reactionstat, setreactionStat] = useState(<AiOutlineLike/>)
  let [reaction, setreaction] = useState('Like')
  let [likestats, setlikestats] = useState('default')

  const status = (stat)=>{
    switch(stat){
     case "Like":
      if (likestats == 'success' && reaction == 'Liked'){
        setlikestats('default')
        setreactionStat(<AiOutlineLike/>)
       setreaction('Like')
      }
      else{
      setlikestats('success')
       setreactionStat(<AiOutlineLike/>)
       setreaction('Liked')
      }
      break;
     case "Love":
      if (likestats == 'success' && reaction == 'Loved'){
        setlikestats('default')
        setreactionStat(<AiOutlineLike/>)
        setreaction('Like')
      }
      else{
       setreactionStat(<FcLike/>)
       setlikestats("success")
       setreaction('Loved')
      }
      break;
     case "Laugh":
      if (likestats == 'success' && reaction == 'Laughed'){
        setlikestats('default')
        setreactionStat(<AiOutlineLike/>)
       setreaction('Like')
      }
      else{
      setlikestats("success")
       setreactionStat(<FaRegLaughBeam/>)
       setreaction('Laughed')
      }
      break;
     case "Cry":
      if (likestats == 'success' && reaction == 'Cried'){
        setlikestats('default')
        setreaction('Like')
      }
      else{
       setreactionStat(<TbMoodCry/>)
       setlikestats("success")
       setreaction('Cried')
      }
      break;
     default:
      
      
    }

  }

  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="flex justify-center  flex-col items-center h-screen">
      <div className="bg-gray-900 p-4 mb-4 rounded-lg shadow-lg w-96">
      
      <Popover placement="top" offset={20} showArrow={!likestats === "success"}>
      <PopoverTrigger>
        <Button className="text-black" color={likestats} startContent={reactionstat}>
          {reaction}
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="px-2 flex gap-4 items-center text-black py-2">
          <Button onClick={() => status("Like")} isIconOnly>
            <AiOutlineLike color={likestats} />
          </Button>
          <Button onClick={() => status("Love")}  isIconOnly>
            <FcLike color={likestats} />
          </Button>
          <Button onClick={() => status("Laugh")} isIconOnly>
            <FaRegLaughBeam color={likestats} />
          </Button>
          <Button onClick={() => status("Cry")} isIconOnly>
            <TbMoodCry color={likestats} />
          </Button>
        </div>
      </PopoverContent>
    </Popover>
    </div>
    
  </div>
</div>
  )
}

export default page
