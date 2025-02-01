import React from 'react'
import Image from 'next/image'

const events = [false, true, false, true]
// import globe from '../../../assets/globe.svg'
// import eventImg from "../../../assets/eventImg.jpeg"
// import timeImg from "../../../assets/timeImg.svg"
// import globeImg from "../../../assets/globeImg.svg"
// import locationImg from "../../../assets/locationImg.svg"
// import avatars from "../../../assets/avatars.jpeg"

const YourEvents = () => {
    return (
        <div className='my-5'>
            <div className='flex justify-between my-5 items-center'>
                <h1 className="text-3xl text-white">Event Name</h1>
                <button className='bg-[#1e1d1d] text-white w-[112px] height-[32px] flex items-center p-2 justify-between'>
                    <Image src={'/assets/globe.svg'} className='inline' width={200} height={200} alt=''/>
                    <span>Public</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth={'2'} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                </button>

            </div>
            <div>
                {events.map((event, index) => <EventCard isGoing={event } key={index}/>)}
            </div>
        </div>
    )
}
const EventCard = ({isGoing}) => {
    return (
        <div className="p-5 w-full border border-white bg-[#1E1D1D] my-3">
            <div className="flex justify-between items-center">
                <div className='flex space-x-3'>
                    <img src={'/assets/eventImg.jpeg'} alt="event-img" />
                    <div className='flex flex-col space-y-1'>
                        <h1 className='text-[#D9D9D9]'><Image src={'/assets/timeImg.svg'} width={50} height={50} alt="time-img" className='inline'/> 10: 00 AM</h1>
                        <h1 className='text-white text-xl'> Workshop: Leveraging The Graph to build Your Dapp</h1>
                        <h1 className='text-[#D9D9D9]'><Image width={30} height={30} src={'/assets/globeImg.svg'} alt="time-img" className='inline'/> Lagos, Nigeria</h1>
                        <h1 className='text-[#D9D9D9]'><Image width={30} height={30} src={'/assets/locationImg.svg'} alt="time-img" className='inline' /> Colab Innovation Campus</h1>
                        <div className='flex space-x-3 items-center'>
                            {!isGoing && <button className='bg-[#D9D9D9] p-[10px] text-xs flex '>
                                <span>Manage Event </span>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 4l8 8-8 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>

                            </button>}
                           {isGoing && <button className='bg-[#34C759] p-[10px] text-white text-xs'>
                                Going

                            </button>}
                            <Image src={'/assets/avatars.jpeg'} alt="avatars" width={30} height={30}/>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="w-[90px] h-[90px] bg-[#fff] rounded-full flex flex-col items-center justify-center">
                        <h1 className="font-bold text-center text-xl">
                            AUG 24
                        </h1>
                        <h2 className="text-center">
                            Saturday
                        </h2>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default YourEvents
