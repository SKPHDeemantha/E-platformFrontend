import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const FullCalendarComponent = () => {
  return (
    <div>
      <h2>Event Calendar</h2>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={[
          { title: "Meeting", date: "2025-02-10" },
          { title: "Project Deadline", date: "2025-02-15" }
        ]}
      />
    </div>
  );
};

export default FullCalendarComponent;
