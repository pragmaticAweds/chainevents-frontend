import EventStrip from "./EventStrip";

function EventsList() {
  return (
    <div>
      <h3 className="text-white text-xl font-bold mb-4">Events</h3>
      <div className="flex flex-col gap-y-4">
        <EventStrip />
        <EventStrip />
        <EventStrip />
        <EventStrip />
      </div>
    </div>
  );
}

export default EventsList;
