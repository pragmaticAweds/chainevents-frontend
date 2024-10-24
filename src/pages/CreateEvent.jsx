import { useState } from "react";
import CreateEventName from "../components/CreateEventName";
import CreateEventFormPage from "../components/CreateEventFormPage";

function CreateEvent() {
  const [eventName, setEventName] = useState("");

  if (!eventName) {
    return (
      <CreateEventName eventName={eventName} setEventName={setEventName} />
    );
  }

  return (
    <CreateEventFormPage eventName={eventName} setEventName={setEventName} />
  );
}

export default CreateEvent;
