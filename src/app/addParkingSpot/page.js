"use client"
import React from 'react'
import Layout from '@/app/components/layout/Layout'
import Button from "@/app/components/button/Button"
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";

export default function AddParkingSpot() {
    const router= useRouter()

    const [parkingArea, setArea] = useState({
        areaName: "",
        location: "",
        capacity: "",
    });

    const addSpot = async () => {
        try {
            const response =await axios.post("/api/addParkingArea", parkingArea);
            router.push("/admin");
        } catch (error) {
            console.log(error.message);
        }
    }
    return (
        <Layout>
            <div className="login-inputs flex flex-col items-center gap-y-8 bg-gray-50 w-2/3 px-2 py-5">
                <img src="./images/login-images/login-logo.png" width={100} alt="" />
                {/* <h2 className=" text-xl uppercase font-semibold text-blue-600">
                    Login to your account
                </h2> */}
                <div className="add-area flex flex-col gap-y-6">
                    <div className="flex flex-col gap-y-3">
                        <label htmlFor="ParkingArea" className="uppercase font-semibold">
                            Parking Area Name
                        </label>
                        <input
                            id="area"
                            type="text"
                            placeholder="Enter parking area name"
                            value={parkingArea.areaName}
                            onChange={(e) => setArea({ ...parkingArea, areaName: e.target.value })}
                            className=" outline-none border placeholder:text-gray-500 border-gray-400 border-opacity-30 px-5 py-2"
                        />
                    </div>
                    <div className="flex flex-col gap-y-3">
                        <label htmlFor="Location" className="uppercase font-semibold">
                            Parking Area Location
                        </label>
                        <input
                            id="area"
                            type="text"
                            placeholder="Location e.g. Kamaladi"
                            value={parkingArea.location}
                            onChange={(e) => setArea({ ...parkingArea, location: e.target.value })}
                            className=" outline-none border placeholder:text-gray-500 border-gray-400 border-opacity-30 px-5 py-2"
                        />
                    </div>
                    <div className="flex flex-col gap-y-3">
                        <label htmlFor="Location" className="uppercase font-semibold">
                            Capacity
                        </label>
                        <input
                            id="area"
                            type="number"
                            placeholder="Capacity of Area"
                            value={parkingArea.capacity}
                            onChange={(e) => setArea({ ...parkingArea, capacity: e.target.value })}
                            className=" outline-none border placeholder:text-gray-500 border-gray-400 border-opacity-30 px-5 py-2"
                        />
                    </div>
                    <div className="btn flex gap-x-3">
                        <Button
                            title={"Add Spot"}
                            bgcolor={"#1F51FF"}
                            padL={10}
                            padT={3}
                            color={"white"}
                            event={addSpot}

                        />


                    </div>
                </div>
            </div>
        </Layout>
    )
}
