"use client";
import EventStrip from "./EventStrip";
import EventStripSkeleton from "./skeletons/EventStripSkeleton";
import ErrorMessage from "./ErrorMessage";
import { useQuery } from "@tanstack/react-query";
import EventService from "@/services/event/eventService";

function EventsList() {
  const {
    data: events,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["events"],
    queryFn: EventService.getAllEvents,
  });

  // const from = (+page - 1) * 10;
  // const to = from + 10;

  if (isLoading) {
    return (
      <div>
        <h3 className="text-white text-xl font-bold mb-4">Events</h3>
        <div className="flex flex-col gap-y-4">
          {[...Array(3)].map((_, index) => (
            <EventStripSkeleton key={index} />
          ))}
        </div>
      </div>
    );
  }

  if (error?.message) {
    return (
      <div>
        <h3 className="text-white text-xl font-bold mb-4">Events</h3>
        <ErrorMessage message={error?.message || "Failed to load events"} />
      </div>
    );
  }

  return (
    <div>
      <h3 className="text-white text-xl font-bold mb-4">Events</h3>
      <div className="flex flex-col gap-y-4">
        {events && events.length > 0 ? (
          events
            // .slice(from, to)
            .map((event) => (
              <EventStrip
                key={event.id}
                title={event.name}
                subTitle={event.description || "No description available"}
                date={event.event_start_date || "Date not available"}
                thumbnail={event.event_image_url || "assets/eventImg.jpeg"}
                location={event.location || "Not Available"}
                id={event.id}
              />
            ))
        ) : (
          <p className="text-gray-400">No events available</p>
        )}
      </div>
      {/* {events && events.length > 0 && (
        <div className="mt-[34px] flex w-full justify-end">
          <Pagination count={events.length} />
        </div>
      )} */}
    </div>
  );
}

export default EventsList;
