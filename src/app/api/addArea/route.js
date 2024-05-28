import { connect } from '../../../dbconfig/dbConfig'
import { ParkingArea } from '../../../models/parkingArea'
import { NextRequest, NextResponse } from "next/server"


connect()

export async function POST(request) {
    try {
        const reqBody = await request.json();
        const { name, location, capacity } = reqBody;
        console.log(reqBody);

        // const area = await ParkingArea.findOne({ areaName });
        // if (area) {
        //     return NextResponse.json({ error: "Area already exists", status: 400 })
        // }

        const newParkingArea = new ParkingArea({
            name: parkingArea.areaName,
            location: parkingArea.location,
            capacity: parkingArea.capacity
        });

        console.log("K xa tani");
        const savedArea = await newParkingArea.save();
        return NextResponse.json({
            message: "Area Added Successfully",
            savedArea
        })

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}