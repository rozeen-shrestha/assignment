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
  

  const register = () => {
    const user = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
    const cpass = document.getElementById("confirmpassword").value;
    console.log(pass)
    if (pass !==  cpass) {
    alert("Passwords do not match");
  }
  else if(pass == null){
    alert("Password cannot be empty");
  }
  else if(user == null){
    alert("Username cannot be empty");
  }
  else if(pass === cpass&& user != null && pass != null){
    alert(`
    Registered Successfully,
    user: ${user}
    password: ${pass}
    `);
    
  }
  };

  return (


<div className="bg-gradient-to-r from-cyan-500 to-blue-500">
  <CustomNavbar/>
      <div className="flex justify-center  flex-col items-center h-screen">
      <div className="bg-gray-900 p-4 mb-4 rounded-lg shadow-lg w-96">
      <h2 className="text-2xl text-center font-semibold ">Register</h2>
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
      <Input
        id="confirmpassword"
        label="Confirm Password"
        variant="bordered"
        placeholder="Confirm your password"
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
      <Button id="loginbutton"className="flex-1 p-2" color="primary" variant="shadow" onClick={register}>
          Register
        </Button> 
         
      </div>
      <div className="mt-4">
         
        <Link href="/login">Already Registered? Login Instead!</Link>
      </div>
      </form>
    </div>
    
  </div>
</div>

  );
}
