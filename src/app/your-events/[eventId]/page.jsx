"use client";

import HostsCard from "@/components/HostsCard";
import VisibilityCard from "@/components/VisibilityCard";
import EventService from "@/services/event/eventService";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function page({ params }) {
  const { eventId } = React.use(params);

  const {
    data: event,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["event", eventId],
    queryFn: () => EventService.getEventById(eventId),
    enabled: !!eventId,
  });

  // const eventIdBigInt = {
  //   type: "struct",
  //   low: BigInt(eventId || "1"),
  //   high: BigInt(0),
  // };

  // const { data, isLoading, error, isFetching } = useContractFetch(
  //   contractAbi,
  //   "event_details",
  //   contractAddress,
  //   [eventIdBigInt]
  // );

  // const processEventData = (rawData) => {
  //   if (!rawData) return null;

  //   return {
  //     name: rawData.name?.replace(/"/g, "") || "Unknown Event",
  //     location: rawData.location || "Unknown Location",
  //     organizer: rawData.organizer?.toString() || "Unknown Organizer",
  //     totalRegister: Number(rawData.total_register) || 0,
  //     totalAttendees: Number(rawData.total_attendees) || 0,
  //     eventType: rawData.event_type?.variant === "Free" ? "Free" : "Paid",
  //     isClosed: rawData.is_closed === true,
  //     paidAmount: Number(rawData.paid_amount) || 0,
  //   };
  // };

  // useEffect(() => {
  //   if (data) {
  //     const processed = processEventData(data);
  //     console.log("Processed event data:", processed);
  //     setEventData(processed);
  //   }
  // }, [data]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-white">Loading event details...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="p-6 bg-red-100 text-red-700">Error fetching event</div>
      </div>
    );
  }

  return (
    <div className="text-white overflow-x-hidden flex flex-col items-center bg-primaryBackground bg-[#1E1D1D] min-h-screen">
      <main className="pt-[74px] pb-[197px] grid grid-cols-[340px_750px] w-full">
        <div className="px-[80px]">
          <ul className="flex flex-col gap-y-6 text-base font-medium">
            <li>Overview</li>
            <li>Participants</li>
            <Link href="/registration">Registration</Link>
            <li>Insights</li>
          </ul>
        </div>
        <div>
          <h2 className="text-[24px] leading-[30px] font-semibold mb-8">
            Workshop: {event?.name}
          </h2>
          <div className="flex flex-col gap-y-6">
            <div className="flex space-x-5">
              <button className="w-full py-[12px] text-center bg-[#1E1D1D] text-sm">
                <span>Invite Participants</span>
                <Image
                  src="/assets/add-team.svg"
                  alt=""
                  className="ml-2 inline"
                  width={30}
                  height={30}
                />
              </button>

              <Link
                className="w-full py-[12px] text-center bg-[#1E1D1D] text-sm"
                href={`/event-details?event_id=${eventId}`}
              >
                <span>Share Event</span>
                <Image
                  src="/assets/share-08.svg"
                  alt=""
                  className="ml-2 inline"
                  width={30}
                  height={30}
                />
              </Link>
            </div>
            <VisibilityCard />
            <HostsCard />
          </div>
        </div>
      </main>
    </div>
  );
}

export default page;
