"use client"
import React, { useEffect,useState } from 'react'
// import availableParkingSlots from '../../../parkingSlotsData'
import Card from '../components/card/Card'
import Layout from '../components/layout/Layout'
import axios from "axios"

function ParkingArea() {

    const [availableParkingSlots,setAvailableParkingSlots] = useState([]);
    
    useEffect(()=>{
        getData();
    },[]);

    async function getData(){
       const response = await axios.get('/api/getParkingAreaData');
       console.log(response.data.areas);
       setAvailableParkingSlots(response.data.areas);
    }

  return (
    <Layout>
            <div className='container mx-auto w-5/6 flex gap-y-10 flex-col'>
                <span className='text-2xl uppercase leading-relaxed font-bold my-4'>Available Parking Slots</span>
                <div className='flex'>
                    {
                        availableParkingSlots.map((item,index)=>(
                            <Card key={index} data={item} />
                        ))   
                    }
                </div>
            </div>

    </Layout>
  )
}

export default ParkingArea