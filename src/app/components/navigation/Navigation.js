import Link from "next/link";
import React from "react";
import Button from "../button/Button";


export default function Navigation() {
  
  return (
    <div>
      <div className="navigation-bar py-2 bg-gray-950 text-white ">
        <div className="container mx-auto flex justify-between items-center">
          <div className="logo">
               <Link href={'/'}> <img src="./images/logo-img.png" alt="EasyWayPark" /></Link> 
          </div>
        <div className="nav-items flex gap-8 text-sm uppercase ">
            <Link href={""} className="hover:scale-105 transition-all">Your Dashboard</Link>
            <Link href={""} className="hover:scale-105 transition-all">About Us</Link>
            <Link href={""} className="hover:scale-105 transition-all">Contact</Link>
          </div>
          <div className="login-register flex gap-6 text-sm">
            <Link href={"./login"}><Button title={"Login"} /></Link>
            <Link href={""}><Button title={"Register"}/></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
