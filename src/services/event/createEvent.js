import { BACKEND_API } from "@/utils/constants";

export const createEvent = async (eventData) => {
  try {
    const response = await fetch(`${BACKEND_API}/event`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: eventData.name,
        location: eventData.location,
        event_onchain_id: eventData.event_onchain_id,
        event_owner: eventData.event_owner,
        event_email: eventData.event_email,
        event_capacity: eventData.event_capacity,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to create event");
    }

    return await response.json();
  } catch (error) {
    console.error("Error creating event:", error);
    throw error;
  }
};
