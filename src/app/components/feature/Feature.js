import React from 'react'
import Featurecard from './featurecard/Featurecard'
import { IoMdClock } from "react-icons/io";
import { FaAmazonPay } from "react-icons/fa";
import { MdOutlineLaptopChromebook } from "react-icons/md";
import { Chakra_Petch } from 'next/font/google';

const chakra_petch = Chakra_Petch({ subsets: ["latin"], weight: ["600"] });

export default function Feature() {
  return (
    <div>
        <div className="container mx-auto py-10 flex flex-col gap-y-10 ">
            <div className="featured-heading text-center">
                <h2 className={`text-3xl font-semibold ${chakra_petch.className}`}>OUR FEATURES</h2>
            </div>
            <div className='flex justify-between'>
            <Featurecard icon={<FaAmazonPay className='text-6xl text-blue-500'/>} text={"Effortless Payments: Pay for Parking with Ease"}/>
            <Featurecard icon={<IoMdClock className='text-6xl text-blue-500'/>} text={"Real-Time Availability: Find Parking Instantly, Every Time"}/>
            <Featurecard icon={<MdOutlineLaptopChromebook className='text-6xl text-blue-500'/>} text={"Seamless Reservations: Secure Your Spot Hassle-Free"}/>
            </div>
           
        </div>
    </div>
  )
}
