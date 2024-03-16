import React from 'react'

export default function Featurecard({icon,text}) {
  return (
    <div>
        <div className="container border-r border-r-black px-5">
            <div className="content flex flex-col items-center gap-y-5">
            {icon}
            <p className=' text-center'>{text}</p>
            </div>
        </div>
    </div>
    
  )
}
