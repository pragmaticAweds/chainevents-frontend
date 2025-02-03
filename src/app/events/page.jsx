"use client";

import { useContractFetch } from "../../utils/helpers";
import { contractAbi } from "../../abi/abi";
import { contractAddress } from "../../utils/address";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import EventCard from "@/components/EventCard";

function EventsPage() {
  const {
    data: eventsData,
    isLoading,
    error,
  } = useContractFetch(contractAbi, "get_events", contractAddress, []);

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
        <div className="w-[740px] flex flex-col gap-y-4">
          {isLoading ? (
            <p className="text-white">Loading events...</p>
          ) : error ? (
            <p className="text-red-500">{`Failed to fetch events: ${error.message}`}</p>
          ) : events.length > 0 ? (
            events.map((event, index) => (
              <EventCard key={index} event={event} baseRoute="events" />
            ))
          ) : (
            <p className="text-white">No events found.</p>
          )}
          {events.map((event, index) => (
            <EventCard isGoing={event} key={index} baseRoute="events" />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default EventsPage;
