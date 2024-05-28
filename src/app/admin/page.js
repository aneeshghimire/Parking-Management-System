import React from 'react'
import Layout from '@/app/components/layout/Layout'
import Link from 'next/link'

export default function page() {
    return (
        <Layout>
            <div className="container mx-auto p-10 flex justify-between items-center">
                <div className="container p-10">
                    <h2 className="text-3xl font-sans" > Welcome Admin,</h2>
                </div>
                {/* Select Options */}
            </div>
            <div className="flex flex-row flex-grow pd-10 m-10">
                <div className="container mr-10 p-10 bg-yellow-200 rounded-lg">
                    <Link href="/addParkingSpot">
                        <h3>Add Parking Area</h3>
                    </Link>
                </div>
                <div className="container mr-10 p-10 bg-fuchsia-950"></div>
                <div className="container mr-10 p-10 bg-fuchsia-950"></div>
            </div>
        </Layout>
    )
}
