"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { contractAbi } from "@/abi/abi.js";
import { contractAddress } from "@/utils/address";
import { useContractFetch } from "@/utils/helpers";
import EventCard from "@/components/EventCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { data } from "autoprefixer";

const events = [false, true, false, true];

const YourEvents = () => {
  const {
    data: eventsData,
    isLoading,
    error,
  } = useContractFetch(contractAbi, "get_events", contractAddress, []);

  console.log(data);

  const [events, setEvents] = useState([]);

  useEffect(() => {
    if (eventsData) {
      const formattedEvents = Array.isArray(eventsData)
        ? eventsData
        : [eventsData];

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
              totalAttendees:
                event.total_attendees?.toString().replace("n", "") || "0",
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
    <div className="text-white overflow-x-hidden flex flex-col items-center text-center bg-primaryBackground bg-[#1E1D1D] min-h-screen">
      <Navbar />
      <main className="pt-[74px] pb-[197px]">
        <div className="flex justify-between mb-4 items-center w-[740px]">
          <h1 className="text-base leading-5 font-medium text-white">
            Event Name
          </h1>
          <button className="bg-[#34C759] text-white flex items-center px-3 py-2 gap-2 rounded text-sm">
            <Image
              src={"/assets/globe.svg"}
              className="inline"
              width={16}
              height={16}
              alt=""
            />
            <span>Public</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 10l5 5 5-5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7 10l5 5 5-5"
                stroke="currentColor"
                strokeWidth={"2"}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="w-[740px] flex flex-col gap-y-4">
          {isLoading ? (
            <p className="text-white">Loading events...</p>
          ) : error ? (
            <p className="text-red-500">{`Failed to fetch events: ${error.message}`}</p>
          ) : events.length > 0 ? (
            events.map((event, index) => (
              <EventCard key={index} event={event} />
            ))
          ) : (
            <p className="text-white">No events found.</p>
          )}
          {events.map((event, index) => (
            <EventCard isGoing={event} key={index} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default YourEvents;
