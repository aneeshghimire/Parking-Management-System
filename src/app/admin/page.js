"use client"
import React from 'react'
import Layout from '@/app/components/layout/Layout'
import Link from 'next/link'
import Feature from '@/app/admin/feature/feature'
import { Chakra_Petch } from "next/font/google";

const chakra_petch = Chakra_Petch({ subsets: ["latin"], weight: ["600"] });

export default function Admin() {
    return (
        <Layout>
            <div className="container  p-10 pr-24 pl-24 flex justify-between items-center">
                <div className="container p-10">
                    <h2 className="text-3xl font-sans" > Welcome <span className={`text-blue-500 underline text-4xl  leading-snug ${chakra_petch.className}`}>Admin</span>!</h2>
                </div>
            </div>

            <div className=" p-10 ">
                <hr className="border-gray-300 " />
            </div>

            <div className="flex flex-col mb-10">
                <div className="container p-10 ">
                    <h2 className={`text-blue-500 text-4xl font-semibold text-center leading-snug ${chakra_petch.className}`}> Features</h2>
                </div>
                <div className="flex flex-row justify-between gap-10 p-10 pr-24 pl-24 ">
                    <Link href="/admin/addParkingSpot" className="hover:scale-115 w-1/3 text-center">
                        <Feature text={"Add Parking Area"} />
                    </Link>
                    <Link href="/admin/addParkingSpot" className="hover:scale-115 w-1/3 text-center">
                        <Feature text={"View Total Users"} />
                    </Link>
                    <Link href="/admin/viewParkingAreas" className="hover:scale-115 w-1/3 text-center">
                        <Feature text={"View Parking Areas"} />
                    </Link>


                </div>
            </div>

        </Layout>
    )
}
