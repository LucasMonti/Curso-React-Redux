import React from "react";
import { NavBar, CalendarEvent } from "../";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { addHours } from "date-fns";
import { localizer, getMessages } from "../../helpers";

const events = [
  {
    title: "cumpleaños",
    notes: "comprar torta",
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: "#fafafa",
    user: {
      _id: "123",
      name: "Lucas",
    },
  },
];

const eventStyleGetter = (event, start, end, isSelected) => {
console.log({event, start, end, isSelected});
}

export const CalendarPage = () => {
  return (
    <>
      <NavBar />

      <Calendar
        culture="es"
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "calc(100vh - 80px)" }}
        messages={getMessages()}
        eventPropGetter={eventStyleGetter}
        components={{
            event: CalendarEvent
        }}
      />
    </>
  );
};
