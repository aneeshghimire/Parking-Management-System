import { connect } from '../../../dbconfig/dbConfig'
import { ParkingArea } from '../../../models/parkingArea'
import { NextRequest, NextResponse } from "next/server"


connect()

export async function POST(request) {
    try {
        const reqBody = await request.json();
        const { name, location, capacity } = reqBody;
        console.log(reqBody);
        const parkname = await User.findOne({ email })
        if (parkname) {
            return NextResponse.json({ error: "User already exists", status: 400 }
            )
        }
        const newParkingArea = new ParkingArea({
            name,
            location,
            capacity,
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