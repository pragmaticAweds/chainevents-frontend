"use client";

import Image from "next/image";
import EventCard from "@/components/EventCard";

import { useQuery } from "@tanstack/react-query";
import { useAccount } from "@starknet-react/core";
import { ChevronDown } from "lucide-react";
import Pagination from "@/components/Pagination";
import Link from "next/link";
import EventService from "@/services/event/eventService";
import EventStripSkeleton from "@/components/skeletons/EventStripSkeleton";

const YourEvents = ({ page, per_page }) => {
  const { address } = useAccount();

  const {
    data: events,
    error,
    isLoading,
  } = useQuery({
    queryKey: [{ event_owner_address: address, page, per_page }],
    queryFn: EventService.getOwnerEvents,
    enabled: !!address,
  });

  return (
    <div className="text-white overflow-x-hidden flex flex-col items-center text-center bg-primaryBackground bg-[#1E1D1D] min-h-screen">
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
            <ChevronDown />
          </button>
        </div>
        <div className="w-[740px] flex flex-col gap-y-4">
          {!address ? (
            <p>Please connect your wallet to view your events.</p>
          ) : isLoading ? (
            <div className="flex flex-col gap-y-4">
              {[...Array(3)].map((_, index) => (
                <EventStripSkeleton key={index} />
              ))}
            </div>
          ) : error?.message ? (
            <p className="text-white">{error?.message}</p>
          ) : events?.length ? (
            <div className="">
              {events.map((event, index) => (
                <EventCard key={index} event={event} baseRoute="your-events" />
              ))}

              <div className="mt-[34px] flex w-full justify-end">
                <Pagination count={events.length} />
              </div>
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center">
              <p className="mt-2 mb-6 text-xl leading-5 text-[#C4C4C4] font-normal">
                You have no events.
              </p>

              <Link
                href={"/create-event"}
                className="bg-black py-4 px-[38px] flex items-center gap-x-[10px] rounded-full text-sm leading-[18px] font-semibold border-[.5px] border-white max-w-max"
              >
                <Image
                  src="/assets/add-circle.svg"
                  width={16}
                  height={16}
                  alt="#"
                />
                <span>Create new event</span>
              </Link>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default YourEvents;
