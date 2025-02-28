import EventsList from "@/components/EventsList";
import { Suspense } from "react";

function EventsPage() {
  return (
    <div className="text-white overflow-x-hidden flex flex-col items-center text-center bg-primaryBackground bg-[#1E1D1D] min-h-screen">
      <main className="pt-[74px] pb-[197px]">
        <Suspense fallback={<div>Loading events...</div>}>
          <EventsList />
        </Suspense>
      </main>
    </div>
  );
}

export default EventsPage;
