"use client";

import { use } from "react";
import HostsMember from "@/components/HostsMember";
import { BiEnvelope } from "react-icons/bi";
import { useQuery } from "@tanstack/react-query";
import EventService from "@/services/event/eventService";
import { Calendar, MapPin } from "lucide-react";
import { useAccount } from "@starknet-react/core";
import { tryCatch } from "@/utils/helpers";

function page({ searchParams }) {
  const { event_id } = use(searchParams);

  const { address } = useAccount();
  const {
    data: event,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["event", event_id],
    queryFn: () => EventService.getEventById(event_id),
    enabled: !!event_id && !!address,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const email = formData.get("email");

    try {
      const req = EventService.createEventAttendee({
        email,
        event_id: +event_id,
        user_address: address,
      });

      const [resp, error] = await tryCatch(req);

      console.log("resp::", resp);

      console.log("error:::", error);

      // return router.push("/dashboard");
    } catch (err) {
      // toast.error("An unexpected error occurred. Please try again.");
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-white">Loading event details...</div>
      </div>
    );
  }

  return (
    <main className="text-white flex flex-col items-center h-screen mt-16">
      <div className="mb-8 space-y-8 flex flex-col items-center">
        <h2 className="text-[24px] leading-[30px] font-semibold">
          Workshop: {event?.name}
        </h2>
        <div className="flex gap-x-8">
          <span className="flex items-center gap-x-2">
            <MapPin className="size-4" /> {event?.location}
          </span>
          <span className="flex items-center gap-x-2">
            <Calendar className="size-4" />
            {event?.created_at ? new Date(event?.created_at).toUTCString() : ""}
          </span>
        </div>
      </div>

      <h3 className="mb-6">Enter your email to attend event</h3>
      <form onSubmit={handleSubmit} className="flex gap-x-2">
        <div className="flex items-center custom-button-bg py-3 px-4 rounded-md">
          <BiEnvelope className="text-gray-400 mr-2" />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="bg-transparent border-none focus:outline-none text-white placeholder-gray-400 flex-1"
            required
          />
        </div>

        <button className="bg-[#2f2e2e] border w-full text-white py-3 px-6 rounded-xl flex items-center justify-center space-x-2 max-w-max">
          <span>Register</span>
        </button>
      </form>
      <div>
        <div className="flex flex-col gap-y-6">
          <HostsMember />
        </div>
      </div>
    </main>
  );
}

export default page;
