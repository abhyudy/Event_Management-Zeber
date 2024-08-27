import React from "react";
import EventCard from "../../components/EventCard/EventCard";
import { eventList } from "../../utils/EventDatabase";
import "./EventList.css";

const EventList = () => {
  const renderEventCards = () => {
    return eventList.map(({ id, date, heading, location, img }) => (
      <EventCard
        key={id}
        id={id}
        date={date}
        heading={heading}
        location={location}
        img={img}
      />
    ));
  };

  return (
    <div className="event-list-wrapper">
      <div className="event-list">
        {eventList.length > 0 ? renderEventCards() : <p>No events available</p>}
      </div>
    </div>
  );
};

export default EventList;
