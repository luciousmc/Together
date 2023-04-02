import { useState } from "react";

const useProvideEvents = () => {
  const [events, setEvents] = useState([]);

  const addEvents = newEvents => {
    setEvents([...events, ...newEvents]);
  };

  const removeEvent = eventId => {
    setEvents(prevEvents => prevEvents.filter(event => event._id !== eventId));
  };

  return {
    events,
    setEvents,
    addEvents,
    removeEvent,
  };
};

export default useProvideEvents;
