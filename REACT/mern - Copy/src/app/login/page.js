"use client";
import CustomNavbar from "@/components/navbar/page";
import React from "react";
import { Input, Button } from "@nextui-org/react";
import { MailIcon } from './MailIcon';
import {EyeFilledIcon} from "./EyeFilledIcon";
import {EyeSlashFilledIcon} from "./EyeSlashFilledIcon";
import Link from "next/link";


export default function App(props) {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  

  const login = () => {
    const user = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
    if (user == "user@email.com" && pass == "pass") {
    document.getElementById("loginstatus").innerHTML = `Logged in as ${user}`;

  }
  else{
    alert(`
    Invalid email or password.
    Please check your email and password.
    `)
  }
  };

  return (


<div className="bg-gradient-to-r from-cyan-500 to-blue-500">
  <CustomNavbar/>
      <div className="flex justify-center  flex-col items-center h-screen">
        <cnavbar></cnavbar>
        <div>
          <h1 id="loginstatus" className="text-6xl text-black mb-14">Not Logged In</h1>
        </div>
      <div className="bg-gray-900 p-4 mb-4 rounded-lg shadow-lg w-96">
      <h2 className="text-2xl text-center font-semibold ">Login</h2>
      <form className="w-full h-full">
        <div className="text-white mb-4">
        <Input
        id="email"
        isClearable
        type="email"
        label="Email"
        variant="bordered"
        placeholder="Enter your email"
        defaultValue="user@email.com"
        onClear={() => console.log("input cleared")}
        className="w-full p-2"
      />
        
        <Input
        id="password"
        label="Password"
        variant="bordered"
        placeholder="Enter your password"
        endContent={
          <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
            {isVisible ? (
              <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            ) : (
              <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            )}
          </button>
        }
        type={isVisible ? "text" : "password"}
        className="w-full p-2 bg-opacity-60"
      />
      </div>
      <div className="flex gap-2">
      <Button id="loginbutton"className="flex-1 p-2" color="primary" variant="shadow" onClick={login}>
          Login
        </Button> 
         
      </div>
      <div className="mt-4">
         
        <Link href="/register">Not Registered? Click Me!</Link>
      </div>
      </form>
    </div>
    
  </div>
</div>

  );
}
