import { BACKEND_API } from "@/utils/constants";

export const EventService = {
  /**
   * Create a new event
   * @param {Object} eventData - The event data to create
   * @returns {Promise<Object>} - { success: true, data: event } or { success: false, message: errorMessage }
   */
  createEvent: async (eventData) => {
    try {
      const response = await fetch(`${BACKEND_API}/event`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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

      const res = await response.json();
      return res;
    } catch (error) {
      console.error("Error creating event:", error);
      throw new Error(error?.message);
    }
  },

  createEventAttendee: async (eventData) => {
    try {
      console.log("eventData:::", eventData);
      const response = await fetch(`${BACKEND_API}/event/register_for_event`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(eventData),
      });
      if (!response.ok) {
        const errorData = await response.json();
        console.log("response error data:::", errorData?.message);
        throw new Error(errorData.message || "Failed to create event attendee");
      }

      const res = await response?.json();
      return res;
    } catch (error) {
      console.error("Error creating event attendee:", error);
      throw new Error(error?.message);
    }
  },

  /**
   * Get all events
   * @param {Object} params - Optional query parameters (for filtering, pagination, etc.)
   * @returns {Promise<Object>} - { success: true, data: events } or { success: false, message: errorMessage }
   */
  getAllEvents: async (params = {}) => {
    try {
      // Convert params object to URL search params if provided
      const queryParams = new URLSearchParams();
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          queryParams.append(key, value);
        }
      });

      const queryString = queryParams.toString();
      const url = `${BACKEND_API}/event${queryString ? `?${queryString}` : ""}`;

      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to fetch events");
      }

      const data = await response.json();
      return data?.data || [];
    } catch (error) {
      console.error("Error fetching events:", error);
      throw new Error(error?.message);
    }
  },

  /**
   * Get a single event by ID
   * @param {string|number} eventId - The ID of the event to retrieve
   * @returns {Promise<Object>} - { success: true, data: event } or { success: false, message: errorMessage }
   */
  getEventById: async (eventId) => {
    try {
      if (!eventId) {
        throw new Error("Event ID is required");
      }
      // https://chainevents-backend.onrender.com/event/id/:{event_id}
      const response = await fetch(`${BACKEND_API}/event/id/${eventId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to fetch event");
      }

      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error(`Error fetching event with ID ${eventId}:`, error);
      throw new Error(error?.message);
    }
  },
  // https://chainevents-backend.onrender.com/event
  getOwnerEvents: async ({ queryKey }) => {
    const { event_owner_address, page, per_page } = queryKey[0];

    try {
      // Convert params object to URL search params if provided
      // Build query parameters conditionally
      const params = new URLSearchParams();
      if (page !== undefined && page !== null) {
        params.append("page", page);
      }

      if (per_page !== undefined && per_page !== null) {
        params.append("per_page", per_page);
      }

      const queryString = params.toString();

      const url = `${BACKEND_API}/event/owner/${event_owner_address}${
        queryString ? `?${queryString}` : ""
      }`;

      const response = await fetch(url);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to fetch events");
      }

      const json = await response.json();
      return json.data.data;
    } catch (error) {
      console.error("Error fetching events:", error);
      throw new Error(error?.message);
    }
  },

  /**
   * Update an existing event
   * @param {string|number} eventId - The ID of the event to update
   * @param {Object} eventData - The updated event data
   * @returns {Promise<Object>} - { success: true, data: updatedEvent } or { success: false, message: errorMessage }
   */
  updateEvent: async (eventId, eventData) => {
    try {
      if (!eventId) {
        throw new Error("Event ID is required");
      }

      const response = await fetch(`${BACKEND_API}/event/${eventId}`, {
        method: "PUT", // or 'PATCH' depending on your API
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eventData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to update event");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Error updating event with ID ${eventId}:`, error);
      throw new Error(error?.message);
    }
  },

  /**
   * Delete an event
   * @param {string|number} eventId - The ID of the event to delete
   * @returns {Promise<Object>} - { success: true, data: result } or { success: false, message: errorMessage }
   */
  deleteEvent: async (eventId) => {
    try {
      if (!eventId) {
        throw new Error("Event ID is required");
      }

      const response = await fetch(`${BACKEND_API}/event/${eventId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to delete event");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Error deleting event with ID ${eventId}:`, error);
      throw new Error(error?.message);
    }
  },
};

export default EventService;
