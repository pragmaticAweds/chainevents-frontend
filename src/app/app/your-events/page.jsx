import React, { useEffect, useState } from "react";
import { contractAbi as contractABI } from "../abi/abi.js";
import { contractAddress } from "../utils/address.js";
import { useContractFetch } from "../utils/helpers.js"; 
import globe from "../assets/globe.svg";
import eventImg from "../assets/eventImg.jpeg";
import timeImg from "../assets/timeImg.svg";
import globeImg from "../assets/globeImg.svg";
import locationImg from "../assets/locationImg.svg";
import avatars from "../assets/avatars.jpeg";
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
    const { data: eventsData, isLoading, error } = useContractFetch(
        contractABI,
        "get_events",
        contractAddress,
        []
    );

    const [events, setEvents] = useState([]);

    useEffect(() => {
        if (eventsData) {
            const formattedEvents = Array.isArray(eventsData) ? eventsData : [eventsData];

            const processedEvents = formattedEvents
                .map((event) => {
                    try {
                        return {
                            id: event.event_id?.toString().replace("n", "") || "0",
                            name: event.name || "Unknown Event",
                            location: event.location || "Unknown Location",
                            venue: `${event.total_register?.toString().replace("n", "") || "0"} registered`,
                            time: new Date().toLocaleTimeString(),
                            isGoing: false,
                            isPaid: event.event_type?.variant?.name === "Paid",
                            isClosed: event.is_closed || false,
                            totalAttendees: event.total_attendees?.toString().replace("n", "") || "0",
                            paidAmount: event.paid_amount?.toString().replace("n", "") || "0",
                        };
                    } catch (err) {
                        return null;
                    }
                })
                .filter(Boolean);

            setEvents(processedEvents);
        }
    }, [eventsData]);

    return (
        <div className="my-5">
            <div className="flex justify-between my-5 items-center">
                <h1 className="text-3xl text-white">Your Events</h1>
                <button className="bg-[#1e1d1d] text-white w-[112px] height-[32px] flex items-center p-2 justify-between">
                    <img src={globe} className="inline" alt="globe" />
        <div className='my-5'>
            <div className='flex justify-between my-5 items-center'>
                <h1 className="text-3xl text-white">Event Name</h1>
                <button className='bg-[#1e1d1d] text-white w-[112px] height-[32px] flex items-center p-2 justify-between'>
                    <Image src={'/assets/globe.svg'} className='inline' width={200} height={200} alt=''/>
                    <span>Public</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth={'2'} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
            <div>
                {isLoading ? (
                    <p className="text-white">Loading events...</p>
                ) : error ? (
                    <p className="text-red-500">{`Failed to fetch events: ${error.message}`}</p>
                ) : events.length > 0 ? (
                    events.map((event, index) => <EventCard key={index} event={event} />)
                ) : (
                    <p className="text-white">No events found.</p>
                )}
                {events.map((event, index) => <EventCard isGoing={event } key={index}/>)}
            </div>
        </div>
    );
};

const EventCard = ({ event }) => {
    return (
        <div className="p-5 w-full border border-white bg-[#1E1D1D] my-3">
            <div className="flex justify-between items-center">
                <div className="flex space-x-3">
                    <img src={eventImg} alt="event-img" />
                    <div className="flex flex-col space-y-1">
                        <h1 className="text-[#D9D9D9]">
                            <img src={timeImg} alt="time-img" className="inline" /> {event.time}
                        </h1>
                        <h1 className="text-white text-xl">Name: {event.name}</h1>
                        <h1 className="text-[#D9D9D9]">
                            <img src={globeImg} alt="location-img" className="inline" /> Location: {event.location}
                        </h1>
                        <h1 className="text-[#D9D9D9]">
                            <img src={locationImg} alt="venue-img" className="inline" /> {event.venue}
                        </h1>
                        <div className="flex space-x-3 items-center">
                            {!event.isGoing && (
                                <button className="bg-[#D9D9D9] p-[10px] text-xs flex ">
                                    <span>Manage Event </span>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 4l8 8-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            )}
                            {event.isGoing && <button className="bg-[#34C759] p-[10px] text-white text-xs">Going</button>}
                            <img src={avatars} alt="avatars" />
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
                        <h1 className="font-bold text-center text-xl">Event #{event.id}</h1>
                        <h2 className="text-center">{event.isPaid ? "Paid" : "Free"}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default YourEvents;

    )
}
export default YourEvents
