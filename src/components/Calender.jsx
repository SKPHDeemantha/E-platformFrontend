import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const FullCalendarComponent = () => {
  return (
    <div className="lg:w-[90%]  lg: relative h-[70%]">
      <h2>Event Calendar</h2>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={[
          { title: "speecil Momentom", date: "2025-02-10" },
          { title: "Project Deadline", date: "2025-03-02" },
        ]}
      />
    </div>
  );
};

export default FullCalendarComponent;
