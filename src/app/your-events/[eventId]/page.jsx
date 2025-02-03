"use client";
import { contractAbi } from "@/abi/abi";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { contractAddress } from "@/utils/address";
import { useContractFetch } from "@/utils/helpers";
import React, { useEffect, useState } from "react";

function page({ params }) {
  const [eventData, setEventData] = useState(null);
  const { eventId } = React.use(params);

  const eventIdBigInt = {
    type: "struct",
    low: BigInt(eventId || "1"),
    high: BigInt(0),
  };

  const { data, isLoading, error, isFetching } = useContractFetch(
    contractAbi,
    "event_details",
    contractAddress,
    [eventIdBigInt]
  );

  const processEventData = (rawData) => {
    if (!rawData) return null;

    return {
      name: rawData.name?.replace(/"/g, "") || "Unknown Event",
      location: rawData.location || "Unknown Location",
      organizer: rawData.organizer?.toString() || "Unknown Organizer",
      totalRegister: Number(rawData.total_register) || 0,
      totalAttendees: Number(rawData.total_attendees) || 0,
      eventType: rawData.event_type?.variant === "Free" ? "Free" : "Paid",
      isClosed: rawData.is_closed === true,
      paidAmount: Number(rawData.paid_amount) || 0,
    };
  };

  useEffect(() => {
    if (data) {
      const processed = processEventData(data);
      console.log("Processed event data:", processed);
      setEventData(processed);
    }
  }, [data]);

  if (isLoading || isFetching) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-white">Loading event details...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="p-6 bg-red-100 text-red-700">
          Error fetching event details: {error.message}
        </div>
      </div>
    );
  }

  return (
    <div className="text-white overflow-x-hidden flex flex-col items-center text-center bg-primaryBackground bg-[#1E1D1D] min-h-screen">
      <Navbar />
      <main className="pt-[74px] pb-[197px]">Individual Event </main>
      <Footer />
    </div>
  );
}

export default page;
