import React from "react";
import Featurecard from "./featurecard/Featurecard";
import { IoMdClock } from "react-icons/io";
import { FaAmazonPay } from "react-icons/fa";
import { MdOutlineLaptopChromebook } from "react-icons/md";
import { Chakra_Petch } from "next/font/google";

const chakra_petch = Chakra_Petch({ subsets: ["latin"], weight: ["600"] });

export default function Feature() {
  return (
    <div>
      <div className="container mx-auto flex flex-col gap-y-10 py-10">
        <h2 className="font-semibold text-2xl text-center">OUR FEATURES</h2>
        <div className="mx-auto flex justify-center gap-y-10 flex-wrap">
          <Featurecard
            icon={<FaAmazonPay className="text-6xl text-blue-500" />}
            text={"Effortless Payments: Pay for Parking with Ease"}
            bRight={"1px solid black"} bLeft={"1px solid black"}
          />
          <Featurecard
            icon={<IoMdClock className="text-6xl text-blue-500" />}
            text={"Real-Time Availability: Find Parking Instantly, Every Time"}
            bRight={"1px solid black"}
          />
          <Featurecard
            icon={
              <MdOutlineLaptopChromebook className="text-6xl text-blue-500" />
            }
            text={"Seamless Reservations: Secure Your Spot Hassle-Free"}
            bLeft={"1px solid black"}
            bRight={"1px solid black"}
          />
        </div>
      </div>
    </div>
  );
}
